import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300 active:scale-95",

        {
          "bg-[#1E40AF] text-white hover:bg-[#2563EB]": variant === "primary",

          "bg-[#06B6D4] text-white hover:bg-cyan-500": variant === "secondary",

          "border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white":
            variant === "outline",

          "px-4 py-2 text-sm": size === "sm",

          "px-6 py-3 text-base": size === "md",

          "px-8 py-4 text-lg": size === "lg",
        },

        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
