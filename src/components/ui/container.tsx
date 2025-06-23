'use client';

import clsx from "clsx";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
