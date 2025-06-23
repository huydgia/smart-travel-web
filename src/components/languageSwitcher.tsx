"use client";

import { useContext } from "react";
import { LanguageContext } from "@/contexts/languageContext";
import Image from "next/image";

const flags = {
  vi: "/icons/flags/vi.svg",
  en: "/icons/flags/en.svg",
};

export default function LanguageSwitcher() {
  const langCtx = useContext(LanguageContext);
  if (!langCtx) return null;

  const { language, setLanguage } = langCtx;
  const isEnglish = language === "en";

  const toggleLang = () => {
    setLanguage((isEnglish ? "vi" : "en") as "vi" | "en");
  };

  return (
    <div className="flex items-center gap-2" title="Chuyển ngôn ngữ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isEnglish}
          onChange={toggleLang}
        />
        <div
          className="w-10 h-5 bg-gray-300 dark:bg-zinc-600 rounded-full
          peer-checked:bg-blue-600 dark:peer-checked:bg-green-500 transition-colors duration-300"
        />
        <div
          className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white
          rounded-full shadow transition-transform duration-300
          peer-checked:translate-x-5"
        />
      </label>

      {isEnglish ? <span>en</span> : <span>vi</span>}
    </div>
  );
}
