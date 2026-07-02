import type { TextareaHTMLAttributes } from "react";
import {  forwardRef } from "react";
import clsx from "clsx";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={clsx(
        "min-h-40 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all",
        "focus:border-blue-600 focus:ring-4 focus:ring-blue-200",
        className
      )}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
