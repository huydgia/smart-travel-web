'use client';

import Link from "next/link";
import { X, PencilLine, Plane, Hotel, MapPin, MessageSquareText, Utensils, Image, PlusCircle, Download } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [animate, setAnimate] = useState(false);
  const [appPlatform, setAppPlatform] = useState<"iOS" | "Android" | null>(null);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 10);
    document.body.classList.add("overflow-hidden");

    // Detect thiết bị
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setAppPlatform("Android");
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      setAppPlatform("iOS");
    }

    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 1024) {
        setAppPlatform("iOS"); // fallback để test
      }
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => onClose(), 300);
  };

  const downloadText = appPlatform === "iOS" ? "Tải ứng dụng Apple" : "Tải ứng dụng Android";

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/40"
      onClick={handleClose}
    >
      <div
        className={`bg-white dark:bg-black w-[90%] sm:w-[360px] h-full p-4 shadow-lg transform transition-transform duration-300 overflow-y-auto
          ${animate ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <ThemeToggle />
          <button onClick={handleClose}>
            <X size={22} />
          </button>
        </div>

        {/* Nút tải ứng dụng nếu có thiết bị mobile/tablet */}
        {appPlatform && (
          <button
            className="flex items-center justify-center gap-2 w-full text-sm font-semibold px-3 py-2 mb-4 mt-8 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition"
          >
            <Download size={18} />
            {downloadText}
          </button>
        )}

        {/* Menu Items */}
        <nav className="text-sm font-medium text-gray-800 dark:text-gray-200 space-y-6">
          <hr className="border-t dark:border-neutral-700" />

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