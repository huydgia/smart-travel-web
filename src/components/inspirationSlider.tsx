'use client';

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./ui/container";

const inspirations = [
  {
    image: "/images/stargazing.jpg",
    caption: "Địa điểm ngắm sao trên khắp thế giới, từ Utah đến Dubai",
  },
  {
    image: "/images/art-museum.jpg",
    caption: "Tiếp xúc với nghệ thuật ở Paris, NYC và các điểm đến hấp dẫn về văn hóa khác",
  },
  {
    image: "/images/food-tour.jpg",
    caption: "13 thành phố, 13 chuyến đi khám phá ẩm thực tuyệt vời",
  },
  {
    image: "/images/beach-trip.jpg",
    caption: "Thư giãn tại các bãi biển đẹp nhất thế giới",
  },
];

export function InspirationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1000,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track?.details.rel);
    // },
    // created(slider) {
    //   if (slider?.track?.details) {
    //     setCurrentSlide(slider?.track.details.rel);
    //   }
    // },
    slideChanged(slider) {
      setCurrentSlide(slider.details().relativeSlide);
    },
    created(slider) {
      if (slider.details()) {
        setCurrentSlide(slider.details().relativeSlide);
      }
    },
    slidesPerView: 1.2,
    spacing: 12,
    breakpoints: {
      "(min-width: 640px)": {
        slidesPerView: 2.2,
        spacing: 16,
      },
      "(min-width: 1024px)": {
        slidesPerView: 3.2,
        spacing: 20,
      },
    },
  });

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      sliderInstanceRef?.next();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [sliderInstanceRef]);

  return (
    <section className="bg-white dark:bg-zinc-900 px-4 md:px-10 py-10 space-y-4">
      <Container>
        <h2 className="text-2xl font-bold">Nguồn cảm hứng giúp bạn bắt đầu</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Bạn chưa biết đi đâu? Hãy để chúng tôi truyền cảm hứng cho chuyến đi sắp tới của bạn.
        </p>
        <div className="relative">
          {/* Slider Container */}
          <div ref={sliderRef} className="keen-slider pb-2">
            {inspirations.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide rounded-xl bg-white dark:bg-zinc-900 shadow-md"
              >
                <div className="relative group">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute top-2 right-2 bg-white/80 dark:bg-zinc-800/80 p-1 rounded-full">
                    <Heart className="w-4 h-4 text-black dark:text-white" />
                  </button>
                </div>
                <div className="px-3 py-2 text-sm font-semibold text-center">{item.caption}</div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {inspirations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderInstanceRef?.moveToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentSlide === idx ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
