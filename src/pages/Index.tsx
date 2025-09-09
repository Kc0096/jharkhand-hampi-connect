import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import CulturalHeritage from "@/components/CulturalHeritage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedDestinations />
      <CulturalHeritage />
    </div>
  );
};

export default Index;
