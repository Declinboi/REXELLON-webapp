import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { staggerContainer } from "../animations/stagger";
import { fadeInUp } from "../animations/fade";
import Card from "../components/ui/Card";


const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, accessible, SEO-friendly web apps built with React, Next.js, and modern tooling.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with React Native, shipped to both app stores.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, containerized deployments, and infrastructure that scales with you.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "UI/UX design systems that balance brand identity with real usability.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust NestJS/Node APIs, database architecture, and third-party integrations.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Security",
    description:
      "Automated testing and security reviews so releases ship with confidence.",
  },
];
 
const Services = () => {
  return (
    <section id="services" className="relative bg-[#F8FAFC] py-24 lg:py-32 flex justify-center">
      <Container>
        <SectionTitle
          title="Services built for full product lifecycles"
          subtitle="From the first line of code to the millionth user, we cover every layer of your product."
        />
 
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
 
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="group h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#1E40AF] to-[#06B6D4] text-white shadow-lg">
                    <Icon size={26} />
                  </div>
 
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
 
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {service.description}
                  </p>
 
                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-blue-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight size={16} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
 
export default Services;