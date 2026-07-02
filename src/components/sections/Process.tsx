import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints to scope a plan that's realistic and worth building.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "Wireframes and UI systems get validated with you early, before a single line of code is written.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    description:
      "Iterative development with weekly demos, so you always see progress and can steer direction.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "We ship to production and stay on to monitor, fix, and extend the product as it grows.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative flex min-h-[720px] items-center justify-center bg-white py-32 lg:py-44">
      <Container>
        <SectionTitle
          title="How we work"
          subtitle="A straightforward process that keeps you in the loop from kickoff to launch."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8"
        >
          {/* Connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-slate-300 to-transparent lg:block" />

          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#1E40AF] to-[#06B6D4] text-white shadow-lg">
                  <Icon size={26} />
                </div>

                <span className="mt-5 text-sm font-bold text-slate-300">
                  {step.step}
                </span>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;
