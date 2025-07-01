'use client';

import { Search } from "lucide-react";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  inputSize?: 'default' | 'popup' | 'fullscreen';
  isActive?: boolean;
}

export const Input = ({
  showIcon = false,
  iconPosition = 'left',
  inputSize = 'default',
  isActive = false,
  className,
  ...props
}: InputProps) => {
  const iconBase = "absolute top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none";

  const baseWrapper = clsx(
    "relative w-full flex items-center transition-all duration-200",
    inputSize === 'popup'
      ? isActive
        ? "rounded-t-2xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-lg"
        : "rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm"
      : "rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900",
    className
  );

  const inputPadding = iconPosition === 'left' ? "pl-10 pr-4" : "pl-4 pr-10";
  const inputRounded = inputSize === 'popup' && isActive ? "rounded-t-2xl h-12" : "rounded-full";

  return (
    <div className={baseWrapper}>
      {showIcon && iconPosition === 'left' && (
        <Search className={clsx(iconBase, "left-3")} />
      )}

      <input
        {...props}
        className={clsx(
          "w-full py-2 text-sm bg-transparent text-gray-800 dark:text-white outline-none",
          inputPadding,
          inputRounded
        )}
      />

      {showIcon && iconPosition === 'right' && (
        <Search className={clsx(iconBase, "right-3")} />
      )}
    </div>
  );
};
