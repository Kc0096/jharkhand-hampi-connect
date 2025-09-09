import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Clock, ArrowLeft, Download, Share } from "lucide-react";
import { Link } from "react-router-dom";

const ItineraryPlanner = () => {
  const [duration, setDuration] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const [generatedItinerary, setGeneratedItinerary] = useState(false);

  const sampleItinerary = [
    {
      day: 1,
      title: "Arrival in Ranchi",
      activities: [
        { time: "10:00 AM", activity: "Arrive at Birsa Munda Airport", location: "Ranchi" },
        { time: "12:00 PM", activity: "Check-in at Hotel", location: "Ranchi City" },
        { time: "2:00 PM", activity: "Visit Rock Garden", location: "Ranchi" },
        { time: "5:00 PM", activity: "Explore Kanke Dam", location: "Ranchi" }
      ]
    },
    {
      day: 2,
      title: "Waterfalls & Nature",
      activities: [
        { time: "8:00 AM", activity: "Depart for Hundru Falls", location: "30 km from Ranchi" },
        { time: "10:00 AM", activity: "Explore Hundru Falls", location: "Hundru" },
        { time: "1:00 PM", activity: "Lunch at local restaurant", location: "Near Falls" },
        { time: "3:00 PM", activity: "Visit Dassam Falls", location: "Dassam" }
      ]
    },
    {
      day: 3,
      title: "Cultural Experience",
      activities: [
        { time: "9:00 AM", activity: "Visit Tribal Museum", location: "Ranchi" },
        { time: "11:00 AM", activity: "Handicraft Shopping", location: "Main Road Market" },
        { time: "2:00 PM", activity: "Traditional Lunch", location: "Cultural Center" },
        { time: "4:00 PM", activity: "Folk Dance Performance", location: "Cultural Center" }
      ]
    }
  ];

  const generateItinerary = () => {
    setGeneratedItinerary(true);
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
              <h1 className="text-2xl font-bold text-primary">Trip Planner</h1>
              <p className="text-sm text-muted-foreground">Plan your perfect Jharkhand adventure</p>
            </div>
          </div>
          
          {generatedItinerary && (
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!generatedItinerary ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Create Your Perfect Trip</h2>
              <p className="text-muted-foreground">Tell us your preferences and we'll create a personalized itinerary</p>
            </div>

            <Card className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Duration</label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 Days</SelectItem>
                        <SelectItem value="3-4">3-4 Days</SelectItem>
                        <SelectItem value="5-7">5-7 Days</SelectItem>
                        <SelectItem value="week+">More than a week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Group Size</label>
                    <Select value={groupSize} onValueChange={setGroupSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Traveler</SelectItem>
                        <SelectItem value="couple">Couple (2)</SelectItem>
                        <SelectItem value="small">Small Group (3-5)</SelectItem>
                        <SelectItem value="large">Large Group (6+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range (per person)</label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget (₹2,000-5,000)</SelectItem>
                      <SelectItem value="mid">Mid-range (₹5,000-10,000)</SelectItem>
                      <SelectItem value="luxury">Luxury (₹10,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Interests & Preferences</label>
                  <Textarea 
                    placeholder="Tell us what you're interested in (nature, culture, adventure, photography, etc.)"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={generateItinerary} className="w-full" size="lg">
                  Generate My Itinerary
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Jharkhand Adventure</h2>
              <p className="text-muted-foreground">3-day customized itinerary based on your preferences</p>
            </div>

            <div className="space-y-6">
              {sampleItinerary.map((day) => (
                <Card key={day.day} className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{day.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground min-w-[80px]">
                          <Clock className="w-4 h-4" />
                          {activity.time}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{activity.activity}</h4>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{activity.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button onClick={() => setGeneratedItinerary(false)} variant="outline" className="mr-4">
                Create New Itinerary
              </Button>
              <Button>Book This Trip</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ItineraryPlanner;