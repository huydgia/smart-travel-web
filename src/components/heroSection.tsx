import Image from "next/image";
import Container from "./ui/container";

export function HeroSection() {
  return (
    <Container>
      <section id="hero-section" className="relative h-[450px] w-full rounded-lg overflow-hidden">
        {/* Ảnh nền */}
        <Image
          src="/images/hoi-an-photo.jpg"
          alt="Du lịch Việt Nam"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />

        {/* Overlay nội dung */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Khám phá điểm đến tuyệt vời tại Việt Nam
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Nhập địa điểm bạn muốn đến để xem gợi ý ăn uống, lưu trú và vui chơi
          </p>

          {/* Ô tìm kiếm */}
          <div className="w-full max-w-xl">
            <input
              type="text"
              placeholder="Ví dụ: Đà Lạt, Hội An, Hà Nội..."
              className="w-full rounded-full px-6 py-3 text-black text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
