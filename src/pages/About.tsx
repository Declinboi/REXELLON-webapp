import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";
import SectionTitle from "../components/ui/SectionTitle";

import { fadeInUp } from "../animations/fade";
import { slideRight } from "../animations/slide";
import { staggerContainer } from "../animations/stagger";
import FeaturedProjects from "../components/sections/Featuredprojects";
import Team from "../components/sections/Team";

const POINTS = [
  "Senior engineers embedded in every project, not just account managers",
  "Transparent timelines with weekly demos, not black-box delivery",
  "Production-grade code from day one: tested, typed, and documented",
  "Post-launch support so your product keeps shipping after we're done",
];

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="relative overflow-hidden bg-white py-24 lg:py-32 flex justify-center "
      >
        <Container>
          <div className="  grid items-center gap-16 lg:grid-cols-2">
            {/* Visual panel */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-8 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <div className="mt-6 space-y-3 font-mono text-xs leading-relaxed text-slate-400 sm:text-sm">
                  <p>
                    <span className="text-cyan-400">const</span>{" "}
                    <span className="text-blue-300">mission</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    build:{" "}
                    <span className="text-emerald-300">
                      "reliable digital products"
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    partner:{" "}
                    <span className="text-emerald-300">
                      "like a co-founder"
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    ship:{" "}
                    <span className="text-emerald-300">
                      "fast, without debt"
                    </span>
                    ,
                  </p>
                  <p>{"};"}</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Founded</p>
                    <p className="mt-1 text-xl font-bold text-white">2022</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Team</p>
                    <p className="mt-1 text-xl font-bold text-white">
                      Remote-first
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[100px]" />
            </motion.div>

            {/* Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeInUp}>
                <Badge color="blue">About Rexellon</Badge>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-6">
                <SectionTitle
                  center={false}
                  title="We're the technical team behind ambitious products"
                />
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl leading-relaxed text-slate-600"
              >
                Rexellon Technologies is a full-stack product studio. We work
                directly with founders and product teams to turn ideas into
                shipped software — handling architecture, design, and
                engineering so you can focus on the business.
              </motion.p>

              <motion.ul variants={staggerContainer} className="mt-8 space-y-4">
                {POINTS.map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    <span className="text-slate-700">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Container>
      </section>
      <div>
        <Team />
      </div>
    </div>
  );
};

export default About;
