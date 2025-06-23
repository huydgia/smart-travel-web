'use client';

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-2 rounded-full bg-zinc-500/70 text-white shadow-md hover:bg-green-600 transition"
        aria-label="Lên đầu trang"
      >
        <ChevronUp size={20} />
      </button>

      {/* Tooltip */}
      {/* <div className="absolute bottom-full right-0 mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Lên đầu trang
      </div> */}
    </div>
  );
}
