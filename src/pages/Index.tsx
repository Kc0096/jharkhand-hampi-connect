import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedSpotsCarousel from "@/components/FeaturedSpotsCarousel";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import CulturalHeritage from "@/components/CulturalHeritage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedSpotsCarousel />
      <FeaturedDestinations />
      <CulturalHeritage />
    </div>
  );
};

export default Index;
