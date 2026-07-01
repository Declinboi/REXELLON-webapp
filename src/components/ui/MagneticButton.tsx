import type { ButtonHTMLAttributes, ReactNode } from "react";

import { useRef } from "react";
import gsap from "gsap";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MagneticButton = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = ref.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };

  return (
    <button
      ref={ref}
      {...props}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="rounded-xl bg-[#1E40AF] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#2563EB]"
    >
      {children}
    </button>
  );
};

export default MagneticButton;
