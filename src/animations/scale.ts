import type { Variants } from "framer-motion";

export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const popIn: Variants = {
  hidden: {
    scale: 0,
    rotate: -10,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};
