'use client';

import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  containerClassName?: string;
}

export function Input({
  placeholder = "",
  className = "",
  containerClassName = "",
  type = "text",
  value,
  onChange,
  name,
  id,
  showIcon = false,
  iconPosition = "left",
  ...rest
}: InputProps) {
  const iconLeft = iconPosition === "left";

  return (
    <div className={`relative w-full ${containerClassName}`}>
      {showIcon && iconLeft && (
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full py-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          showIcon ? (iconLeft ? "pl-10 pr-3" : "pr-10 pl-3") : "px-3"
        } ${className}`}
        {...rest}
      />

      {showIcon && !iconLeft && (
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
      )}
    </div>
  );
}
