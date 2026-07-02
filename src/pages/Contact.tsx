import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import GlowButton from "../components/ui/GlowButton";

import { fadeInUp } from "../animations/fade";
import { slideLeft } from "../animations/slide";
import { staggerContainer } from "../animations/stagger";
// import { staggerContainer } from "../../animations/stagger";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@rexellon.tech",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria · Remote-first",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative flex justify-center bg-[#F8FAFC] py-24 lg:py-32">
      <Container>
        <SectionTitle
          title="Let's build something together"
          subtitle="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Info panel */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-[#0F172A] p-5 text-white shadow-2xl sm:p-6 lg:p-7">
              <h3 className="text-xl font-bold">Contact information</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Prefer to skip the form? Reach out directly and we'll respond
                within one business day.
              </p>

              <div className="mt-7 space-y-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">{item.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7 lg:p-8"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-emerald-700"
                >
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    Thanks — your message has been sent. We'll be in touch soon.
                  </p>
                </motion.div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Project details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a bit about your project, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-7">
                <GlowButton type="submit" className="w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Send message
                    <Send size={16} />
                  </span>
                </GlowButton>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
