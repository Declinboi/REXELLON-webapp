import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorFollower = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 400,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 400,
    damping: 30,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-[9999]
      h-5
      w-5
      rounded-full
      bg-cyan-400
      mix-blend-difference
      "
    />
  );
};

export default CursorFollower;
