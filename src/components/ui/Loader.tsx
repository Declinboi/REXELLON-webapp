import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
        className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent"
      />
    </div>
  );
};

export default Loader;