
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Calendar, Flag, MapPin, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  // We'll use placeholders for data that would normally come from a database
  const upcomingGames = [
    {
      id: 1,
      opponent: "Clarksville High School",
      location: "Home",
      date: "Sep 23, 2025",
      time: "7:00 PM",
    },
    {
      id: 2,
      opponent: "Northwest High School",
      location: "Away",
      date: "Sep 30, 2025",
      time: "7:00 PM",
    },
    {
      id: 3,
      opponent: "West Creek High School",
      location: "Home",
      date: "Oct 7, 2025",
      time: "7:00 PM",
    },
  ];

  const recentNews = [
    {
      id: 1,
      title: "Hawks Defeat Wildcats 28-14 in Season Opener",
      date: "Aug 25, 2025",
      summary: "The Hawks started the season strong with a convincing victory over the Wildcats on Friday night...",
    },
    {
      id: 2,
      title: "Annual Football Camp Registration Now Open",
      date: "Jul 15, 2025",
      summary: "Registration for our annual youth football camp is now open. The camp will run from July 25-27...",
    },
    {
      id: 3,
      title: "Five Hawks Players Named to All-Region Team",
      date: "Dec 10, 2024",
      summary: "Congratulations to our five players who have been selected to the All-Region team for their outstanding performance...",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-image" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              ROSSVIEW HAWKS <span className="text-rossview-red">FOOTBALL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Building champions on and off the field in Clarksville, Tennessee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-rossview-red hover:bg-red-800 text-white">
                <Link to="/schedule">View Schedule</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/team">Meet The Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements & Schedule Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="section-title">Latest News & Announcements</h2>
              
              <Tabs defaultValue="news" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="news">News</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="news" className="space-y-6">
                  {recentNews.map(item => (
                    <Card key={item.id}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{item.summary}</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-rossview-red">
                          Read more
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="events" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Homecoming Game</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-1">October 14, 2025 at 7:00 PM</p>
                      <p>Join us for our annual homecoming game against Northeast High School. Special pre-game and halftime activities planned!</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Football Banquet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-1">November 20, 2025 at 6:00 PM</p>
                      <p>End-of-season celebration for players, coaches and families at the Rossview High School cafeteria.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <h2 className="section-title">Upcoming Games</h2>
              <div className="space-y-4">
                {upcomingGames.map(game => (
                  <Card key={game.id} className="overflow-hidden border-l-4 border-l-rossview-red">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold">{game.opponent}</div>
                        <span className={`text-sm rounded-full px-3 py-1 ${
                          game.location === "Home" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {game.location}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-rossview-red" />
                        {game.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-rossview-red" />
                        {game.location === "Home" ? "Rossview Stadium" : `${game.opponent} Field`}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="text-center mt-6">
                  <Button variant="outline" className="border-rossview-red text-rossview-red hover:bg-rossview-red hover:text-white">
                    <Link to="/schedule">View Full Schedule</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2 mb-12">
            Our Football Program
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Team Excellence</h3>
              <p className="text-gray-600">
                Our coaching staff develops players' skills, discipline, and teamwork 
                to achieve excellence both on and off the field.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Success</h3>
              <p className="text-gray-600">
                We prioritize education, providing support to ensure our student-athletes 
                excel in the classroom as much as on the field.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Flag className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Involvement</h3>
              <p className="text-gray-600">
                Hawks players are active community members, participating in service 
                projects and representing Rossview with pride.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-rossview-red hover:bg-red-800 text-white">
              <Link to="/about">Learn More About Our Program</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Preview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white after:bg-rossview-red">Photo Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Football game action" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team huddle" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Practice session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Stadium view" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-rossview-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">JOIN THE HAWKS FAMILY</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Support our student-athletes and become part of the Rossview Hawks community.
            Get involved with our booster club, attend games, and help us build champions.
          </p>
          <Button variant="secondary" className="bg-white text-rossview-red hover:bg-gray-100">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
