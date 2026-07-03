import type { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7",
          className,
        ),
      )}
    >
      {children}
    </div>
  );
};

export default Card;
