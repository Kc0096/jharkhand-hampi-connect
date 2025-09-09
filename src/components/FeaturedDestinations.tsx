import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Netarhat",
    description: "Queen of Chotanagpur, famous for sunrise and sunset views",
    image: "/placeholder.svg",
    rating: 4.8,
    duration: "2-3 days",
    highlights: ["Hill Station", "Sunrise Point", "Pine Forest"]
  },
  {
    id: 2,
    name: "Dassam Falls",
    description: "Spectacular waterfall cascading from 144 feet height",
    image: "/placeholder.svg", 
    rating: 4.6,
    duration: "Half day",
    highlights: ["Waterfall", "Photography", "Nature Walk"]
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Tiger reserve with diverse wildlife and pristine forests",
    image: "/placeholder.svg",
    rating: 4.7,
    duration: "1-2 days", 
    highlights: ["Wildlife", "Safari", "Tigers"]
  },
  {
    id: 4,
    name: "Ranchi",
    description: "Capital city with modern amenities and cultural heritage",
    image: "/placeholder.svg",
    rating: 4.5,
    duration: "2-3 days",
    highlights: ["City Life", "Museums", "Shopping"]
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Popular Destinations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Must-Visit Places in 
            <span className="text-primary block">Jharkhand</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From serene hill stations to thundering waterfalls, discover the diverse landscapes 
            that make Jharkhand a hidden gem of incredible India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden bg-card shadow-soft hover:shadow-tribal transition-smooth group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`${destination.name} - ${destination.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{destination.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{destination.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <Button variant="explore" className="w-full">
                  Explore Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;