import { motion } from "framer-motion";

interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`mx-auto h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent ${className}`}
    />
  );
};

export default Divider;