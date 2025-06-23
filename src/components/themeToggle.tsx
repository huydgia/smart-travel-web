'use client';

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", stored === "dark");
    setIsDark(stored === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      title="Toggle Dark / Light mode"
    >
      <input type="checkbox" className="sr-only peer" checked={isDark} onChange={toggleTheme} />
      <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer dark:peer-checked:bg-yellow-500 peer-checked:bg-blue-600 transition-colors duration-300"></div>
      <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6">
        {isDark ? "🌙" : "🌞"}
      </div>
    </label>
  );
}
