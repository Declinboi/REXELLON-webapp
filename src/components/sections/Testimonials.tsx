import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { fadeInUp } from "../../animations/fade";

const TESTIMONIALS = [
  {
    quote:
      "Rexellon shipped our MVP faster than any agency we'd worked with before, and the code quality made our in-house team's job easy afterward.",
    name: "Ifeoma Nwosu",
    role: "CEO, Paylink Africa",
  },
  {
    quote:
      "They didn't just build what we asked for — they pushed back on ideas that wouldn't scale and saved us months of rework.",
    name: "Marcus Webb",
    role: "Founder, Loopstack",
  },
  {
    quote:
      "Communication was constant and clear. We always knew exactly where the project stood, week to week.",
    name: "Grace Adeyemi",
    role: "Product Lead, Harborline",
  },
  {
    quote:
      "Our mobile app went from concept to the App Store in ten weeks. The attention to detail on animations and performance was outstanding.",
    name: "Tunde Bakare",
    role: "COO, KpSwap",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24 lg:py-32 flex justify-center">
      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[130px]" />

      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            What clients say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            We measure success by whether our clients would work with us
            again. Most of them do.
          </p>
        </motion.div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonials-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto pb-2">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <Quote className="text-cyan-400" size={28} />

                  <div className="mt-4 flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mt-4 flex-1 leading-relaxed text-slate-300">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-pagination mt-10 flex justify-center gap-2" />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;