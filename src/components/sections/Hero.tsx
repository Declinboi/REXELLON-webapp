import { useEffect, useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ReactCountUp from "react-countup";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import GlowButton from "../ui/GlowButton";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";
import { wordAnimation } from "../../animations/text";
import { COLORS } from "../../constants/colors";

// Vite's dev-mode dependency pre-bundler (esbuild) doesn't always unwrap
// react-countup's CJS `exports.default` correctly, so the default import can
// resolve to the whole module object instead of the component itself. This
// falls back safely whether we're in dev (needs `.default`) or a production
// build (already unwrapped).
const CountUp =
  (ReactCountUp as unknown as { default?: typeof ReactCountUp }).default ??
  ReactCountUp;

const HEADLINE_WORDS = [
  "We",
  "build",
  "digital",
  "products",
  "that",
  "help",
  "you",
  "scale.",
];

const STATS = [
  { label: "Projects Delivered", end: 50, suffix: "+" },
  { label: "Client Satisfaction", end: 98, suffix: "%" },
  { label: "Years Combined Experience", end: 6, suffix: "+" },
];

/**
 * Lightweight canvas "constellation" particle field.
 * Particles drift slowly and draw a connecting line when close together,
 * giving the hero background subtle depth without pulling in a 3D engine.
 */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frameId = 0;
    let width = 0;
    let height = 0;

    const PARTICLE_COUNT = 60;
    const LINK_DISTANCE = 130;

    type Particle = { x: number; y: number; vx: number; vy: number };
    let particles: Particle[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.55)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.18 * (1 - distance / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-[#0F172A] pb-24 pt-40 lg:pt-48"
    >
      {/* Ambient gradient glow, matches COLORS.gradient.hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{ background: COLORS.gradient.hero }}
      />

      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <ParticleField />

      <Container>
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-20 py-20 lg:grid-cols-2">
          {/* Left column: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* <motion.div variants={fadeInUp}>
              <Badge color="cyan">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} />
                  Full-Stack Product Studio
                </span>
              </Badge>
            </motion.div> */}

            <motion.h1
              variants={staggerContainer}
              className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {HEADLINE_WORDS.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={wordAnimation}
                  className={
                    word === "scale."
                      ? "mr-3 inline-block bg-linear-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent"
                      : "mr-3 inline-block"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              Rexellon partners with startups and businesses to design, build,
              and ship fast, reliable web and mobile products — from first
              prototype to production launch.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link to="/contact">
                <GlowButton>
                  <span className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight size={18} />
                  </span>
                </GlowButton>
              </Link>

              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white hover:text-[#0F172A]"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-white sm:text-3xl">
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: 3D tilting glass panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  rexellon / product-dashboard
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-3 w-3/4 rounded-full bg-linear-to-r from-cyan-400/70 to-blue-500/70" />
                <div className="h-3 w-1/2 rounded-full bg-white/10" />
                <div className="h-3 w-5/6 rounded-full bg-white/10" />

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Uptime</p>
                    <p className="mt-1 text-xl font-bold text-cyan-300">
                      99.9%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Deploys</p>
                    <p className="mt-1 text-xl font-bold text-blue-300">Live</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 -top-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-xl"
            >
              <p className="text-xs font-semibold text-white">
                🚀 Shipped to production
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-8 -right-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-xl"
            >
              <p className="text-xs font-semibold text-white">
                ⚡ Built for scale
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-9 w-5 rounded-full border border-slate-600 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
