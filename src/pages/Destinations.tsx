import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Camera, Filter, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Netarhat Hill Station",
    description: "Known as the 'Queen of Chotanagpur', famous for mesmerizing sunrise and sunset views",
    location: "Latehar District",
    images: ["/placeholder.svg"],
    category: "Hill Station",
    rating: 4.8,
    reviews: 156,
    highlights: ["Sunrise Point", "Pine Forest", "Cool Climate", "Trekking"]
  },
  {
    id: 2,
    name: "Dassam Falls",
    description: "Spectacular waterfall cascading from 144 feet height surrounded by dense forests",
    location: "Ranchi District",
    images: ["/placeholder.svg"],
    category: "Waterfall",
    rating: 4.6,
    reviews: 203,
    highlights: ["Photography", "Nature Walk", "Monsoon Beauty", "Picnic Spot"]
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Tiger reserve with diverse wildlife including elephants, tigers, and leopards",
    location: "Palamu District",
    images: ["/placeholder.svg"],
    category: "Wildlife",
    rating: 4.7,
    reviews: 89,
    highlights: ["Tiger Safari", "Wildlife Photography", "Bird Watching", "Forest Lodge"]
  },
  {
    id: 4,
    name: "Hundru Falls",
    description: "Majestic 320-feet waterfall formed by Subarnarekha river",
    location: "Ranchi District",
    images: ["/placeholder.svg"],
    category: "Waterfall",
    rating: 4.5,
    reviews: 187,
    highlights: ["Photography", "Trekking", "Natural Pool", "Rock Climbing"]
  },
  {
    id: 5,
    name: "Ranchi",
    description: "Capital city with modern amenities, museums, and cultural heritage sites",
    location: "Ranchi District",
    images: ["/placeholder.svg"],
    category: "City",
    rating: 4.3,
    reviews: 412,
    highlights: ["Museums", "Shopping", "Restaurants", "Hotels"]
  },
  {
    id: 6,
    name: "Parasnath Hills",
    description: "Highest peak in Jharkhand, sacred Jain pilgrimage site with ancient temples",
    location: "Giridih District",
    images: ["/placeholder.svg"],
    category: "Religious",
    rating: 4.4,
    reviews: 98,
    highlights: ["Jain Temples", "Trekking", "Spiritual Experience", "Panoramic Views"]
  }
];

const categories = ["All", "Hill Station", "Waterfall", "Wildlife", "City", "Religious"];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterDestinations(term, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterDestinations(searchTerm, category);
  };

  const filterDestinations = (searchTerm: string, category: string) => {
    let filtered = destinations;
    
    if (category !== "All") {
      filtered = filtered.filter(dest => dest.category === category);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">Destinations</h1>
              <p className="text-sm text-muted-foreground">Explore amazing places in Jharkhand</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search destinations, locations..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-smooth group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.images[0]} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{destination.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{destination.location}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-xs text-muted-foreground">({destination.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Add to Trip
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No destinations found matching your criteria.</p>
            <Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("All"); setFilteredDestinations(destinations);}} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Destinations;