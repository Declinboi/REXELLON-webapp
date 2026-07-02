import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "cyan" | "dark";
}

const Badge = ({
  children,
  color = "blue",
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm",

        {
          "bg-blue-100 text-blue-700":
            color === "blue",

          "bg-cyan-100 text-cyan-700":
            color === "cyan",

          "bg-slate-900 text-white":
            color === "dark",
        }
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
