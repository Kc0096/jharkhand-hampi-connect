import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Calendar, Users, Music, Palette, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const culturalElements = [
  {
    id: 1,
    title: "Sohrai & Khovar Art",
    description: "Traditional wall paintings created by tribal women during festivals, depicting cattle, harvest themes, and nature",
    image: "/placeholder.svg",
    category: "Art",
    tribe: "Kurukh, Santhal",
    significance: "UNESCO recognized art form",
    hasVideo: true
  },
  {
    id: 2,
    title: "Jhumar Dance",
    description: "Graceful folk dance performed during Karma festival, expressing joy and celebration of life",
    image: "/placeholder.svg",
    category: "Dance",
    tribe: "Oraon",
    significance: "Harvest celebration",
    hasVideo: true
  },
  {
    id: 3,
    title: "Santali Music",
    description: "Melodious folk songs accompanied by traditional instruments like Tirio, Flute, and Madal",
    image: "/placeholder.svg",
    category: "Music",
    tribe: "Santhal",
    significance: "Cultural identity",
    hasVideo: true
  },
  {
    id: 4,
    title: "Dokra Metal Craft",
    description: "Ancient lost-wax casting technique creating beautiful bronze artifacts and jewelry",
    image: "/placeholder.svg",
    category: "Craft",
    tribe: "Various",
    significance: "4000+ years old technique",
    hasVideo: false
  }
];

const festivals = [
  {
    name: "Karma Festival",
    date: "September 2024",
    description: "Celebration of nature and fertility dedicated to Karma tree",
    status: "upcoming"
  },
  {
    name: "Sarhul Festival",
    date: "March 2024",
    description: "New Year celebration welcoming spring season",
    status: "past"
  },
  {
    name: "Karam Festival",
    date: "August 2024",
    description: "Worship of Karam tree for prosperity and happiness",
    status: "past"
  }
];

const tribes = [
  { name: "Santhal", population: "35%", region: "Santhal Parganas" },
  { name: "Oraon", population: "20%", region: "Ranchi, Gumla" },
  { name: "Munda", population: "15%", region: "Ranchi, Khunti" },
  { name: "Ho", population: "12%", region: "West Singhbhum" },
  { name: "Kurukh", population: "8%", region: "Palamu, Garhwa" },
  { name: "Others", population: "10%", region: "Various" }
];

const Culture = () => {
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
              <h1 className="text-2xl font-bold text-primary">Cultural Heritage</h1>
              <p className="text-sm text-muted-foreground">Rich tribal traditions of Jharkhand</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            32 Tribal Communities, Infinite Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the vibrant tapestry of Jharkhand's tribal heritage - from ancient art forms 
            to soul-stirring folk performances that have been preserved for millennia.
          </p>
        </section>

        {/* Cultural Elements */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Traditional Arts & Crafts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalElements.map((element) => (
              <Card key={element.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={element.image} 
                    alt={element.title}
                    className="w-full h-full object-cover"
                  />
                  {element.hasVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-smooth">
                      <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Video
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge>{element.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{element.title}</h4>
                  <p className="text-muted-foreground mb-4">{element.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Tribe: {element.tribe}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Significance: {element.significance}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Festivals */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Festivals & Events</h3>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              View Full Calendar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {festivals.map((festival, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-foreground">{festival.name}</h4>
                  <Badge variant={festival.status === 'upcoming' ? 'default' : 'secondary'}>
                    {festival.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{festival.date}</p>
                <p className="text-sm">{festival.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Tribal Communities */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Major Tribal Communities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tribes.map((tribe, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-smooth">
                <h4 className="font-bold text-foreground mb-2">{tribe.name}</h4>
                <div className="text-2xl font-bold text-primary mb-1">{tribe.population}</div>
                <p className="text-xs text-muted-foreground">{tribe.region}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-gradient-to-r from-primary/5 to-earth/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Experience Tribal Culture</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join immersive cultural tours, participate in traditional workshops, 
            and stay with tribal families to experience authentic Jharkhand culture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Cultural Tour
            </Button>
            <Button variant="outline" size="lg">
              <Music className="w-5 h-5 mr-2" />
              Virtual Experiences
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Culture;