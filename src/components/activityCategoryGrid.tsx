'use client';

import Image from "next/image";
import Container from "./ui/container";

const activities = [
  {
    title: "Ngoài trời",
    image: "/images/activities/outdoor.jpg",
  },
  {
    title: "Ẩm thực",
    image: "/images/activities/food.jpg",
  },
  {
    title: "Văn hóa",
    image: "/images/activities/culture.jpg",
  },
  {
    title: "Nước",
    image: "/images/activities/water.jpg",
  },
];

export const ActivityCategoryGrid = () => {
  return (
    <section className="bg-gray-100 dark:bg-zinc-800 px-4 md:px-10 py-10 space-y-4">
      <Container>
        <h2 className="text-2xl font-bold">Tìm hoạt động giải trí theo sở thích</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Chúng tôi có mọi trải nghiệm bạn yêu thích
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {activities.map((item, index) => (
            <div key={index} className="relative h-44 rounded-xl overflow-hidden group shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:brightness-110 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
