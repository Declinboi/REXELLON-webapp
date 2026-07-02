import { motion } from "framer-motion";
import {
  SiReact,
  SiNestjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiExpo,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const STACK = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiExpo, name: "React Native", color: "#000020" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: FaAws, name: "AWS", color: "#FF9900" },
];

const TechStack = () => {
  return (
    <section className="relative flex min-h-[720px] items-center justify-center bg-[#F8FAFC] py-32 lg:py-44">
      <Container>
        <SectionTitle
          title="Our tech stack"
          subtitle="Battle-tested tools chosen for reliability and speed, not resume-padding."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:mt-20 lg:grid-cols-6"
        >
          {STACK.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-5"
              >
                <Icon
                  size={36}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-center text-xs font-medium text-slate-600 sm:text-sm">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
