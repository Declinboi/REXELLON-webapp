import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeInUp } from "../../animations/fade";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = true }: Props) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={center ? "text-center" : ""}
    >
      <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "mt-5 max-w-2xl text-base leading-relaxed text-slate-600",
            center && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
