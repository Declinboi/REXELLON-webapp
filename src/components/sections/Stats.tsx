import { motion } from "framer-motion";
import ReactCountUp from "react-countup";
import { Users, Rocket, Award, Clock } from "lucide-react";

import Container from "../ui/Container";
import { staggerContainer } from "../../animations/stagger";
import { fadeInUp } from "../../animations/fade";

// See Hero.tsx for why we guard against the CJS/ESM interop issue here.
const CountUp =
  (ReactCountUp as unknown as { default?: typeof ReactCountUp }).default ??
  ReactCountUp;

const STATS = [
  { icon: Users, end: 40, suffix: "+", label: "Happy Clients" },
  { icon: Rocket, end: 50, suffix: "+", label: "Projects Delivered" },
  { icon: Award, end: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, end: 6, suffix: "+", label: "Years Combined Experience" },
];

const Stats = () => {
  return (
    <section className="relative border-y border-white/5 bg-[#0F172A] py-16 flex justify-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_60%)]" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-400">
                  <Icon size={22} />
                </div>

                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  <CountUp
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <p className="text-xs text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;