import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fastStagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const slowStagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};