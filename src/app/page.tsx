import { HeroSection } from "@/components/heroSection";
import { InspirationSlider } from "@/components/inspirationSlider";
import { ActivityCategoryGrid } from "@/components/activityCategoryGrid";
import { ComboPlanCard } from "@/components/comboPlanCard";
import IconicPlacesSection from "@/components/iconicPlacesSection";
import CollectionMosaic from "@/components/collectionSlider";

export default function HomePage() {
  return (
    <main className="py-6 space-y-10">
      <HeroSection />

      {/* Phần nội dung dưới đây sẽ tiếp tục sau */}
      <ComboPlanCard />

      {/* Section 1: Tìm hoạt động theo sở thích */}
      <ActivityCategoryGrid />

      {/* Section 2: Nguồn cảm hứng giúp bạn bắt đầu */}
      <InspirationSlider />

      {/* Section 3: Những địa điểm mang tính biểu tượng */}
      <IconicPlacesSection />

      {/* Section 4: Duyệt tìm bộ sưu tập theo chủ đề */}
      <CollectionMosaic />
    </main>
  );
}
