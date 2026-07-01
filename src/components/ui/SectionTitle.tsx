import { motion } from "framer-motion";
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
      <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">{title}</h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-slate-600 mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
