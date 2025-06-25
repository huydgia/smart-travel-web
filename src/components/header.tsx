'use client';

import Container from "./common/container";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "./headers/headerDesktop";
import { HeaderMobile } from "./headers/headerMobile";
import { HeaderTablet } from "./headers/headerTablet";
import { MobileMenu } from "./headers/mobileMenu";

export function HeadeLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const heroHeight = hero?.offsetHeight || 500;
      setIsScrolled(window.scrollY > heroHeight - 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-sm border-b border-gray-200 dark:border-neutral-800">
      <Container>
        {/* Desktop */}
        <div className="hidden lg:block">
          <HeaderDesktop isScrolled={isScrolled} />
        </div>

        {/* Tablet */}
        <div className="hidden md:block lg:hidden">
          <HeaderTablet isScrolled={isScrolled} onMenuToggle={() => setMenuOpen(true)} />
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <HeaderMobile isScrolled={isScrolled} onMenuToggle={() => setMenuOpen(true)} />
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}