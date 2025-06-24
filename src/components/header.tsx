'use client';

import Link from "next/link";
import ThemeToggle from "./themeToggle";
import Container from "./ui/container";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function HeadeLayout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const heroHeight = hero?.offsetHeight || 500; // fallback if not found
      setIsScrolled(window.scrollY > heroHeight - 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white dark:bg-black text-black dark:text-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-gray-200 dark:border-neutral-800" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo + search compact */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-black dark:text-white">
              Smart VN Travel
            </Link>
            {isScrolled && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ví dụ: Đà Lạt, Hội An, Hà Nội..."
                  className="pl-9 pr-3 py-1.5 rounded-full border text-sm text-gray-700 w-[200px] md:w-[300px]"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            )}
          </div>

          {/* Menu chính */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
            <Link href="#">Khách sạn</Link>
            <Link href="#">Hoạt động giải trí</Link>
            <Link href="#">Nhà hàng</Link>
            <Link href="#">Chuyến bay</Link>
          </nav>

          {/* Ngôn ngữ + đăng nhập */}
          {!isScrolled && (
            <div className="flex items-center gap-4">
              <ThemeToggle />
            <Link
              href="/login"
              className="bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full px-4 py-2 hover:opacity-90"
            >
              Đăng nhập
            </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
