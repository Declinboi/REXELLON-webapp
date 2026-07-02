import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import GlowButton from "../ui/GlowButton";
import Button from "../ui/Button";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0F172A] pb-20 pt-28 sm:pt-32">
      {/* Brand gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0F172A 0%, #1E40AF 55%, #06B6D4 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0F172A]/75" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-64 w-64 rounded-full bg-blue-600/25 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge color="cyan">
              <Sparkles size={14} className="-mt-0.5 mr-1.5 inline" />
              Trusted Technology Partner
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build Digital
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Products That Scale
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl"
          >
            Rexellon Technologies partners with ambitious teams to design,
            engineer, and ship software that drives real business growth —
            from idea to launch and beyond.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <GlowButton className="w-full sm:w-auto">
                Book a Consultation
                <ArrowRight size={18} className="ml-2 inline" />
              </GlowButton>
            </Link>

            <Link to="/projects" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/20 text-white hover:bg-white hover:text-[#0F172A] sm:w-auto"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;