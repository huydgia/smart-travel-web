'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Input } from "../common/input";
import Logo from "../common/logo";
import ThemeToggle from "../themeToggle";
import PopupSearch from "../searchPopup";

export function HeaderDesktop({ isScrolled }: { isScrolled: boolean }) {
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const hero = document.getElementById("hero-section");
      const heroHeight = hero?.offsetHeight || 500;

      if (window.scrollY < heroHeight - 20) {
        setShowSearchPopup(false);
      }
    }

    if (showSearchPopup) {
      window.addEventListener("scroll", handleScroll);
    }


    function handleClickOutside(event: MouseEvent) {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current.contains(event.target as Node)
      ) {
        setShowSearchPopup(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowSearchPopup(false);
      }
    }

    if (showSearchPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSearchPopup]);

  return (
    <div className="relative">
      {showSearchPopup && (
        <div className="fixed inset-0 bg-black/40 dark:bg-black/40 z-40"></div>
      )}
      <div className="flex justify-between items-center h-20 relative z-50 px-4">
        <Logo />
        <div className="flex-1 flex justify-center">
          {isScrolled ? (
            <div
              className="flex-1 flex justify-center relative"
              ref={inputWrapperRef}
            >
              <div className="relative w-full max-w-[500px]">
                <Input
                  onClick={() => setShowSearchPopup(true)}
                  type="text"
                  placeholder="Tìm kiếm địa điểm..."
                  showIcon={true}
                  inputSize="popup"
                  isActive={showSearchPopup}
                />
                {showSearchPopup && <PopupSearch />}
              </div>
            </div>
          ) : (
            <div className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
              <Link href="#">Khám phá</Link>
              <Link href="#">Chuyến đi</Link>
              <Link href="#">Đánh giá</Link>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full px-4 py-2 hover:opacity-90"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}