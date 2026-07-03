import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        clsx(
          "rex-button rounded-xl font-semibold transition-all duration-300 active:scale-95",
          "inline-flex min-h-11 items-center justify-center gap-2.5 whitespace-nowrap",

          {
            "bg-[#1E40AF] text-white hover:bg-[#2563EB]": variant === "primary",

            "bg-[#06B6D4] text-white hover:bg-cyan-500":
              variant === "secondary",

            "border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white":
              variant === "outline",

            "px-5 py-2.5 text-sm": size === "sm",

            "px-7 py-3 text-sm sm:px-8 sm:text-base": size === "md",

            "rex-button-lg px-8 py-3.5 text-base sm:px-9 sm:py-4 sm:text-lg": size === "lg",
          },
        ),
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
