import { motion } from "framer-motion";

const NoiseBackground = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          fixed
          inset-0
          z-999
          opacity-[0.035]
          mix-blend-soft-light
        "
        style={{
          backgroundImage: `
            radial-gradient(circle,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-998
          bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_65%)]
        "
      />
    </>
  );
};

export default NoiseBackground;
