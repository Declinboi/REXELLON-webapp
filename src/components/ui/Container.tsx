import type { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;