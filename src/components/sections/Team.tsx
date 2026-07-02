import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const TEAM = [
  {
    name: "Clinton Rex",
    role: "Founder & Lead Engineer",
    initials: "CR",
  },
  {
    name: "Amara Chukwu",
    role: "Product Designer",
    initials: "AC",
  },
  {
    name: "David Okafor",
    role: "Mobile Engineer",
    initials: "DO",
  },
  {
    name: "Sarah Bello",
    role: "Backend Engineer",
    initials: "SB",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative bg-white py-24 lg:py-32 flex justify-center">
      <Container>
        <SectionTitle
          title="Meet the team"
          subtitle="A small, senior team that works directly with you — no layers of account managers in between."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-[#1E40AF] via-[#3B82F6] to-[#06B6D4] text-2xl font-bold text-white shadow-lg">
                {member.initials}
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {member.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">{member.role}</p>

              <div className="mt-5 flex items-center justify-center gap-4 text-slate-400">
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="transition hover:text-blue-600"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="#"
                  aria-label={`${member.name} on Twitter`}
                  className="transition hover:text-cyan-500"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href="#"
                  aria-label={`${member.name} on GitHub`}
                  className="transition hover:text-slate-900"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;