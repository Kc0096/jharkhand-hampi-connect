import { Button } from "@/components/ui/button";
import { Menu, MapPin, Heart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">Jharkhand Tourism</h1>
            <p className="text-xs text-muted-foreground">Smart Portal</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#destinations" className="text-foreground hover:text-primary transition-smooth font-medium">
            Destinations
          </a>
          <a href="#culture" className="text-foreground hover:text-primary transition-smooth font-medium">
            Culture
          </a>
          <a href="#activities" className="text-foreground hover:text-primary transition-smooth font-medium">
            Activities
          </a>
          <a href="#plan" className="text-foreground hover:text-primary transition-smooth font-medium">
            Plan Trip
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="hero" size="sm" className="hidden md:inline-flex">
            Book Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;