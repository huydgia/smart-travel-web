'use client';

import Link from "next/link";
import { Search } from "lucide-react";
import ThemeToggle from "../themeToggle";
import { Input } from "../common/input";
import Logo from "../common/logo";

export function HeaderDesktop({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex justify-between items-center h-20">
      <Logo />
      <div className="flex-1 flex justify-center">
        {isScrolled ? (
          <div className="relative w-full max-w-[400px]">
            <Input
              type="text"
              placeholder="Tìm kiếm địa điểm..."
              className="w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-sm text-gray-800 dark:text-white"
              showIcon={true}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
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
  );
}