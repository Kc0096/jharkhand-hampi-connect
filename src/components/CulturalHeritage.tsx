import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Music, Users, Calendar } from "lucide-react";

const CulturalHeritage = () => {
  return (
    <section id="culture" className="py-20 forest-texture">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-earth/10 px-4 py-2 rounded-full mb-6">
              <Palette className="w-4 h-4 text-earth" />
              <span className="text-earth font-medium">Cultural Heritage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rich Tribal Culture &
              <span className="text-earth block">Ancient Traditions</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the vibrant tapestry of Jharkhand's tribal heritage. From the colorful 
              Sohrai paintings to soul-stirring folk dances, immerse yourself in traditions 
              that have been preserved for centuries.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">32 Tribes</h4>
                <p className="text-sm text-muted-foreground">Diverse Communities</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Folk Arts</h4>
                <p className="text-sm text-muted-foreground">Music & Dance</p>
              </div>
            </div>

            <Button variant="tribal" size="lg">
              Explore Culture
            </Button>
          </div>

          {/* Cultural Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card shadow-tribal hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sohrai Art</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Traditional wall paintings celebrating harvest and cattle.
              </p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                Learn More →
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-tribal hover:shadow-glow transition-smooth group">
              <div className="w-12 h-12 bg-earth/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-earth/20 transition-smooth">
                <Music className="w-6 h-6 text-earth" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Folk Music</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Melodious tunes of Santali, Ho, and Mundari traditions.
              </p>
              <Button variant="ghost" size="sm" className="text-earth hover:text-primary-foreground">
                Listen Now →
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-tribal hover:shadow-glow transition-smooth group sm:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tribal-gold/10 rounded-lg flex items-center justify-center group-hover:bg-tribal-gold/20 transition-smooth">
                  <Calendar className="w-6 h-6 text-tribal-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">Festivals & Events</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join colorful celebrations like Karma, Sarhul, and Karam festivals that bring communities together.
                  </p>
                  <Button variant="ghost" size="sm" className="text-tribal-gold hover:text-primary-foreground">
                    View Calendar →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;