import { Button } from "@/components/ui/button";
import { Play, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/jharkhand-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful landscape of Jharkhand with lush forests and tribal heritage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 tribal-pattern opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-tribal-gold" />
              <span className="text-tribal-gold font-medium tracking-wide">Discover Jharkhand</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to Smart
              <span className="block text-tribal-gold">Jharkhand Tourism</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl leading-relaxed">
              Explore the untamed beauty of Jharkhand - from majestic waterfalls to vibrant tribal culture, 
              discover experiences that connect you with nature's heartbeat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link to="/itinerary-planner">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Plan Your Trip
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <Button variant="tribal" size="lg" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tribal-gold">24+</div>
              <div className="text-white/80 text-sm md:text-base">Districts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tribal-gold">150+</div>
              <div className="text-white/80 text-sm md:text-base">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tribal-gold">32</div>
              <div className="text-white/80 text-sm md:text-base">Tribal Groups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;