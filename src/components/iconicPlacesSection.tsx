'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "./ui/container";

const iconicPlaces = [
  {
    location: "Hội An",
    title: "Phố cổ Hội An về đêm",
    imageUrl: "/images/hoian.jpg",
  },
  {
    location: "Sa Pa",
    title: "Khám phá đỉnh Fansipan và bản làng",
    imageUrl: "/images/sapa.jpg",
  },
  {
    location: "Hạ Long",
    title: "Vịnh Hạ Long - kỳ quan thiên nhiên thế giới",
    imageUrl: "/images/halong.jpg",
  },
  {
    location: "Đà Lạt",
    title: "Không khí mộng mơ giữa rừng thông",
    imageUrl: "/images/dalat.jpg",
  },
  {
    location: "Ninh Bình",
    title: "Tràng An - Tam Cốc hữu tình",
    imageUrl: "/images/ninhbinh.jpg",
  },
];

export default function IconicPlacesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-amber-100 dark:bg-zinc-800 px-4 md:px-10 py-10 space-y-4">
      <Container>
        <h2 className="text-2xl font-bold mb-1">
          Những địa điểm mang tính biểu tượng mà bạn cần ghé thăm
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Đừng bỏ lỡ các địa danh nổi bật tại Việt Nam như Hội An, Sa Pa, Hạ Long…
        </p>

        {/* Wrapper relative để định vị nút trái/phải */}
        <div className="relative">
          {/* Nút trái */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-700 shadow p-2 rounded-full hidden md:flex"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Nút phải */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-700 shadow p-2 rounded-full hidden md:flex"
            >
              <ChevronRight />
            </button>
          )}

          {/* Vùng scroll */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 overflow-hidden scrollbar-hide"
            onScroll={checkScroll}
          >
            {iconicPlaces.map((place, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 w-full rounded-t-lg">
                  <Image
                    src={place.imageUrl}
                    alt={place.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{place.location}</p>
                  <p className="font-semibold">{place.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
