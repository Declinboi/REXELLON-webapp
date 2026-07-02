import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const PROJECTS = [
  {
    title: "KpSwap",
    category: "FinTech · React Native",
    description:
      "A mobile trust-pool and swap platform with leaderboards, invites, and real-time balances.",
    gradient: "from-[#1E40AF] to-[#06B6D4]",
  },
  {
    title: "Bookforge AI",
    category: "AI Platform · NestJS",
    description:
      "An AI-powered book generation and translation pipeline that outputs polished PDF/EPUB editions.",
    gradient: "from-[#0F172A] to-[#3B82F6]",
  },
  {
    title: "Travel Worker",
    category: "Localization · Microservices",
    description:
      "A translation microservice that localizes AI-generated content across five languages.",
    gradient: "from-[#06B6D4] to-[#1E40AF]",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative flex justify-center bg-[#F8FAFC] py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            center={false}
            title="Featured projects"
            subtitle="A look at some of the products we've helped design, build, and ship."
          />

          <Link to="/projects" className="hidden shrink-0 lg:block">
            <Button variant="outline">
              <span className="flex items-center gap-2">
                View all projects
                <ArrowRight size={16} />
              </span>
            </Button>
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-linear-to-br ${project.gradient}`}
              >
                <span className="text-4xl font-extrabold text-white/25">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <Badge color="blue">{project.category}</Badge>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link to="/projects">
            <Button variant="outline">
              <span className="flex items-center gap-2">
                View all projects
                <ArrowRight size={16} />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
