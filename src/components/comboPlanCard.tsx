'use client';

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import Container from "./ui/container";

type ComboPlanCardProps = {
  location: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
};

const activities: ComboPlanCardProps[] = [
  {
    location: "Hội An",
    title: "Combo 3N2Đ Hội An - Phố cổ & Ẩm thực",
    rating: 4.8,
    reviewCount: 316,
    price: 4747069,
    imageUrl: "/images/tour-da-nang-hoi-an-3-ngay-2-dem.jpg",
  },
  {
    location: "Nha Trang",
    title: "Combo khám phá đảo & lặn biển",
    rating: 4.9,
    reviewCount: 3230,
    price: 1078879,
    imageUrl: "/images/nha-trang-combo.jpg",
  },
  {
    location: "Sa Pa",
    title: "Khám phá Fansipan & văn hóa bản làng",
    rating: 5.0,
    reviewCount: 247,
    price: 3124188,
    imageUrl: "/images/combo-sapa.jpg",
  },
  {
    location: "Đà Lạt",
    title: "Chèo thuyền + team building tại Đà Lạt",
    rating: 4.9,
    reviewCount: 451,
    price: 3479620,
    imageUrl: "/images/combo-dalat.jpg",
  },
];

export const ComboPlanCard = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slidesPerView: 1.2,
    spacing: 12,
    breakpoints: {
      "(min-width: 640px)": {
        slidesPerView: 2.2,
        spacing: 20,
      },
      "(min-width: 1024px)": {
        slidesPerView: 3.2,
        spacing: 24,
      },
    },
  });

  return (
    <section className="bg-white dark:bg-zinc-900 px-4 md:px-10 py-10 space-y-4">
      <Container>
        <h2 className="text-2xl font-bold">Khám phá các trải nghiệm ở gần Đà Nẵng</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Những lựa chọn không thể bỏ lỡ ở gần bạn
        </p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {activities.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-white">
                    <Heart className="w-5 h-5 text-black" />
                  </button>
                </div>

                <div className="p-3">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    {item.location}
                  </span>
                  <h3 className="mt-2 font-semibold text-sm line-clamp-2">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold">{item.rating}</span>
                    <div className="flex gap-1 text-green-600">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>●</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({item.reviewCount})</span>
                  </div>
                  <p className="text-sm mt-1">
                    từ <strong>{item.price.toLocaleString("vi-VN")} ₫</strong> /người lớn
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => instanceRef.prev()}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => instanceRef.next()}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
