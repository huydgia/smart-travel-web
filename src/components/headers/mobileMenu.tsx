'use client';

import Link from "next/link";
import { X, PencilLine, Plane, Hotel, MapPin, MessageSquareText, Utensils, Image, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [animate, setAnimate] = useState(false);

  // Khi menu mount → trượt vào
  useEffect(() => {
    setTimeout(() => setAnimate(true), 10);
  }, []);

  // Xử lý đóng với animation ngược
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => onClose(), 300); // chờ animation xong
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40">
      <div
        className={`bg-white dark:bg-black w-[260px] h-full p-4 shadow-lg transform transition-transform duration-300 ${
          animate ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <ThemeToggle />
          <button onClick={handleClose}>
            <X size={22} />
          </button>
        </div>

        {/* Menu Sections */}
        <nav className="text-sm font-medium text-gray-800 dark:text-gray-200 space-y-6">
          <div className="flex flex-col gap-2">
            <MenuItem icon={<PencilLine size={18} />} label="Viết đánh giá" href="#" />
            <MenuItem icon={<Plane size={18} />} label="Chuyến đi" href="#" />
            <MenuItem icon={<MessageSquareText size={18} />} label="Câu chuyện du lịch" href="#" />
          </div>
          <hr className="border-t dark:border-neutral-700" />

          <div className="flex flex-col gap-2">
            <MenuItem icon={<Hotel size={18} />} label="Khách sạn" href="#" />
            <MenuItem icon={<Utensils size={18} />} label="Nhà hàng" href="#" />
            <MenuItem icon={<MapPin size={18} />} label="Hoạt động giải trí" href="#" />
            <MenuItem icon={<Plane size={18} />} label="Chuyến bay" href="#" />
          </div>
          <hr className="border-t dark:border-neutral-700" />

          <div className="flex flex-col gap-2">
            <MenuItem icon={<Image size={18} />} label="Đăng ảnh / video" href="#" />
            <MenuItem icon={<PlusCircle size={18} />} label="Thêm địa điểm" href="#" />
          </div>
        </nav>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
    >
      <span className="text-gray-500 dark:text-gray-400">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}