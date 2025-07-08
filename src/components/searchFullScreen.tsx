'use client';

import { X, LocateIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "./common/input";

export default function SearchFullScreen({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-neutral-700">
        <button onClick={onClose}>
          <X className="text-gray-600 dark:text-gray-300" size={24} />
        </button>
        <div className="flex-1">
          <Input
            autoFocus
            showIcon
            inputSize="fullscreen"
            placeholder="Tìm kiếm địa điểm..."
            isActive
          />
        </div>
      </div>

      {/* Nội dung gợi ý */}
      <div className="flex-1 overflow-y-auto px-4 py-3 text-sm">
        {/* Gần đây */}
        <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer flex items-center gap-3 px-2 py-3 rounded-md transition">
          <div className="w-10 h-10 rounded-md bg-gray-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
            <LocateIcon size={20} className="text-gray-600 dark:text-gray-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-800 dark:text-gray-100">Gần đây</span>
          </div>
        </div>

        {/* Gợi ý tài trợ */}
        <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer flex items-center gap-3 px-2 py-3 rounded-md transition">
          <Image
            src="/images/hoian.jpg"
            alt="Gợi ý"
            width={48}
            height={48}
            className="rounded-md object-cover shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-800 dark:text-gray-100">
              Journey through Thailand’s hidden gem cities
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Tài trợ bởi Tourism Authority of Thailand
            </span>
          </div>
        </div>

        {/* Đã xem gần đây */}
        <div className="mt-6">
          <div className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
            Đã xem gần đây
          </div>
          <div className="hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer flex items-center gap-3 px-2 py-2 rounded-md transition">
            <Image
              src="/images/hoian.jpg"
              alt="Hà Nội"
              width={48}
              height={48}
              className="rounded-md object-cover shrink-0"
            />
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-100">Hà Nội</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Việt Nam, Châu Á</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
