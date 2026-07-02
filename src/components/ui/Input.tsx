import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={clsx(
        "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all",
        "focus:border-blue-600 focus:ring-4 focus:ring-blue-200",
        className,
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
