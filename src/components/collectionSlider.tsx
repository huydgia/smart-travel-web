'use client';

import Image from "next/image";
import Container from "./common/container";

const collections = [
  {
    title: "Ẩm thực đường phố",
    description: "Món ngon đặc trưng từng vùng miền",
    imageUrl: "/images/street-food.jpg",
    size: "col-span-2 row-span-2",
  },
  {
    title: "Chuyến đi cuối tuần",
    description: "Cảnh đẹp hùng vĩ của đất nước",
    imageUrl: "/images/weekend-trip.jpg",
    size: "",
  },
  {
    title: "Thành phố năng động",
    description: "Nơi của những hoạt động giải trí hiện đại",
    imageUrl: "/images/luxury.jpg",
    size: "",
  },
  {
    title: "Du lịch mạo hiểm",
    description: "Du lịch mạo hiểm",
    imageUrl: "/images/adventure.jpg",
    size: "col-span-2",
  },
];

export default function CollectionMosaic() {
  return (
    <section className="bg-white dark:bg-zinc-900 px-4 md:px-10 py-10 space-y-4">
      <Container>
        <h2 className="text-2xl font-bold mb-2">Duyệt tìm các bộ sưu tập theo chủ đề</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Những gợi ý độc đáo dành riêng cho bạn
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {collections.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group ${item.size} shadow hover:shadow-lg transition-shadow duration-300`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 text-white group-hover:text-zinc-100">
                <h3 className="font-semibold text-lg mb-1 drop-shadow-sm">{item.title}</h3>
                <p className="text-sm drop-shadow-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
