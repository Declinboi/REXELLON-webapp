import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import Container from "../ui/Container";
import Badge from "../ui/Badge";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { fadeInUp } from "../../animations/fade";
import { staggerContainer } from "../../animations/stagger";

const POSTS = [
  {
    title: "Debugging pnpm's ERR_PNPM_IGNORED_BUILDS in Dockerized monorepos",
    category: "DevOps",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    gradient: "from-[#1E40AF] to-[#3B82F6]",
  },
  {
    title: "Why line-by-line translation fixed our AI content pipeline's TOC",
    category: "Engineering",
    date: "Jun 4, 2026",
    readTime: "5 min read",
    gradient: "from-[#0F172A] to-[#06B6D4]",
  },
  {
    title: "Building a tilting glass hero panel with Framer Motion",
    category: "Frontend",
    date: "May 22, 2026",
    readTime: "4 min read",
    gradient: "from-[#06B6D4] to-[#1E40AF]",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="relative flex min-h-[760px] items-center justify-center bg-white py-32 lg:py-44">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            center={false}
            title="From the blog"
            subtitle="Notes on what we're building, breaking, and fixing."
          />

          <Link to="/blog" className="hidden shrink-0 lg:block">
            <Button variant="outline">
              <span className="flex items-center gap-2">
                Read all posts
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
          className="mt-16 grid gap-7 lg:mt-20 lg:grid-cols-3"
        >
          {POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeInUp}
              className="group flex h-full min-h-[310px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className={`h-44 bg-linear-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-105`}
              />

              <div className="rex-card-body-compact flex flex-1 flex-col">
                <Badge color="cyan">{post.category}</Badge>

                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                  {post.title}
                </h3>

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link to="/blog">
            <Button variant="outline">
              <span className="flex items-center gap-2">
                Read all posts
                <ArrowRight size={16} />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
