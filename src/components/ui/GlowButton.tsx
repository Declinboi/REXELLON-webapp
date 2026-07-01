import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GlowButton = ({ children, className, ...props }: GlowButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "relative overflow-hidden rounded-xl",
        "bg-[#1E40AF] px-8 py-4",
        "font-semibold text-white",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:shadow-[0_0_35px_rgba(6,182,212,0.55)]",
        "active:scale-95",
        className,
      )}
    >
      <span
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-white/25
          to-transparent
          -translate-x-full
          hover:animate-[shine_1s_linear]
        "
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GlowButton;
