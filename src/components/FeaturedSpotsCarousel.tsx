import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Star, Camera } from "lucide-react";

// Mock data for Tourist_Spots until database is connected
const touristSpots = [
  {
    id: 1,
    name: "Netarhat Hill Station",
    description: "Queen of Chotanagpur plateau with stunning sunrise and sunset views",
    location: "Latehar District",
    images: ["/placeholder.svg"],
    category: "Hill Station",
    ar_vr_preview_url: "#"
  },
  {
    id: 2,
    name: "Dassam Falls",
    description: "Spectacular 144-feet waterfall surrounded by dense forests",
    location: "Ranchi District", 
    images: ["/placeholder.svg"],
    category: "Waterfall",
    ar_vr_preview_url: "#"
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Tiger reserve with diverse wildlife and ancient fort ruins",
    location: "Palamu District",
    images: ["/placeholder.svg"], 
    category: "Wildlife",
    ar_vr_preview_url: "#"
  },
  {
    id: 4,
    name: "Hundru Falls",
    description: "Breathtaking 320-feet waterfall cascading from rocky cliffs",
    location: "Ranchi District",
    images: ["/placeholder.svg"],
    category: "Waterfall", 
    ar_vr_preview_url: "#"
  },
  {
    id: 5,
    name: "Rock Garden Ranchi",
    description: "Artistic garden with rock sculptures and scenic lake views",
    location: "Ranchi District",
    images: ["/placeholder.svg"],
    category: "Garden",
    ar_vr_preview_url: "#"
  }
];

const FeaturedSpotsCarousel = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Featured Spots</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Amazing
            <span className="text-primary block">Tourist Destinations</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience Jharkhand's most captivating locations with immersive AR/VR previews
            and detailed information about each destination.
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {touristSpots.map((spot) => (
              <CarouselItem key={spot.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden bg-card shadow-soft hover:shadow-tribal transition-smooth group cursor-pointer h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={spot.images[0]} 
                      alt={`${spot.name} - ${spot.description}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {spot.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Camera className="w-4 h-4 text-primary" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{spot.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{spot.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{spot.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">4.{Math.floor(Math.random() * 4) + 5}</span>
                      </div>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                        View AR Preview →
                      </button>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedSpotsCarousel;