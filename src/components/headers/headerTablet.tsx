'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { Input } from "../common/input";
import Logo from "../common/logo";

export function HeaderTablet({
  isScrolled,
  onMenuToggle,
}: {
  isScrolled: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <div className="flex justify-between items-center h-20 gap-4 px-10">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle}>
          <Menu size={22} />
        </button>
        <Logo />
      </div>

      {isScrolled && (
        <div className="flex-1">
          <div className="relative max-w-[400px] mx-auto">
            <Input
              type="text"
              placeholder="Tìm kiếm địa điểm..."
              className="w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-sm text-gray-800 dark:text-white"
              showIcon={true}         
            />
          </div>
        </div>
      )}

      <Link
        href="/login"
        className="bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full px-4 py-2 hover:opacity-90"
      >
        Đăng nhập
      </Link>
    </div>
  );
}