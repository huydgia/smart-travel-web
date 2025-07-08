'use client';

import { LocateIcon } from "lucide-react";
import Image from "next/image";

export default function PopupSearch() {
  return (
    <div className="absolute left-0 top-full w-full bg-white dark:bg-neutral-900 rounded-b-2xl shadow-xl z-50 border border-t-0 border-gray-200 dark:border-neutral-700 overflow-hidden text-sm">
      
      {/* Gần đây */}
      <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer px-4 py-3 flex items-center gap-3 transition">
        <div className="flex items-center justify-center w-11 h-10 rounded-md bg-gray-100 dark:bg-neutral-800 shrink-0">
          <LocateIcon size={22} className="text-gray-600 dark:text-gray-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-800 dark:text-gray-100 font-medium">Gần đây</span>
        </div>
      </div>

      {/* Gợi ý tài trợ */}
      <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer px-4 py-3 flex items-center gap-3 transition">
        <Image
          src="/images/hoian.jpg"
          alt="Thailand"
          width={45}
          height={45}
          className="rounded-md object-cover shrink-0"
        />
        <div className="flex flex-col">
          <span className="text-gray-800 dark:text-gray-100 font-medium">
            Journey through Thailand’s hidden gem cities
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Tài trợ bởi Tourism Authority of Thailand
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-neutral-700 mx-4" />

      {/* Đã xem gần đây */}
      <div className="px-4 py-3">
        <div className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
          Đã xem gần đây
        </div>

        {/* 1 item */}
        <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer py-2 rounded-lg flex items-center gap-3 transition">
          <Image
            src="/images/hoian.jpg"
            alt="Hà Nội"
            width={45}
            height={45}
            className="rounded-md object-cover shrink-0"
          />
          <div>
            <div className="text-gray-800 dark:text-gray-100 font-medium">Hà Nội</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Việt Nam, Châu Á</div>
          </div>
        </div>

        {/* Thêm nhiều item nếu muốn */}
      </div>
    </div>
  );
}
