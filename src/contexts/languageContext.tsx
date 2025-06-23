'use client';

import * as React from "react";
import i18n from "@/lib/i18n";

export type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    i18n.changeLanguage((localStorage.getItem("locale") as Language) || "vi");
  }, []);

  const [language, setLanguage] = React.useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Language) || "vi";
    }
    return "vi";
  });

  React.useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("locale", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
