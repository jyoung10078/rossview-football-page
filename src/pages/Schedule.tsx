import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Trophy, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGoogleSheetData, Game } from "@/lib/googleSheets";
import { useToast } from "@/components/ui/use-toast";
import { GOOGLE_SHEET_ID, SHEET_TABS } from "@/config";

const Schedule = () => {
  const { toast } = useToast();

  // Fetch games data from Google Sheet
  const {
    data: games,
    loading: gamesLoading,
    error: gamesError
  } = useGoogleSheetData<Game>(GOOGLE_SHEET_ID, SHEET_TABS.GAMES);

  // Show error notifications if there are issues loading data
  React.useEffect(() => {
    if (gamesError) {
      toast({
        title: "Error loading schedule",
        description: gamesError.message,
        variant: "destructive"
      });
    }
  }, [gamesError, toast]);

  // Fallback games data in case of error or for development
  const fallbackGames: Game[] = [
    {
      id: 1,
      opponent: "Clarksville High School",
      location: "Home",
      date: "September 1, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    },
    {
      id: 2,
      opponent: "Northwest High School",
      location: "Away",
      date: "September 8, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    },
    {
      id: 3,
      opponent: "West Creek High School",
      location: "Home",
      date: "September 15, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    },
    {
      id: 4,
      opponent: "Northeast High School",
      location: "Away",
      date: "September 22, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    },
    {
      id: 5,
      opponent: "Montgomery Central High School",
      location: "Home",
      date: "October 6, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: true,
      isSeniorNight: false
    },
    {
      id: 6,
      opponent: "Kenwood High School",
      location: "Away",
      date: "October 13, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    },
    {
      id: 7,
      opponent: "Henry County High School",
      location: "Home",
      date: "October 20, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: true
    },
    {
      id: 8,
      opponent: "Springfield High School",
      location: "Away",
      date: "October 27, 2025",
      time: "7:00 PM",
      result: null,
      outcome: null,
      isHomecoming: false,
      isSeniorNight: false
    }
  ];

  // Use actual data if available, otherwise fall back to mock data
  const displayedGames = games.length > 0 ? games : fallbackGames;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1571034756200-5f5cb2ba40a5?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">2025 GAME SCHEDULE</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Follow the Hawks throughout the season. See you under the Friday night lights!
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="section-title">Season Schedule</h2>
            <p className="text-lg text-gray-700 mb-4">
              All varsity games are played on Friday nights at 7:00 PM unless otherwise noted. 
              Home games are played at Rossview High School Stadium.
            </p>
            <div className="flex items-center space-x-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Home Games</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>Away Games</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1 text-rossview-red" />
                <span>Special Events</span>
              </div>
            </div>
          </div>
          
          {gamesLoading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin h-12 w-12 border-4 border-rossview-red border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {displayedGames.map(game => (
                <Card 
                  key={game.id} 
                  className={`overflow-hidden border-l-4 ${
                    game.location === "Home" 
                      ? "border-l-green-500" 
                      : "border-l-blue-500"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="md:flex md:justify-between md:items-center">
                      <div>
                        <div className="text-2xl font-bold mb-2">
                          {game.location === "Home" ? "Rossview vs " : "Rossview at "} {game.opponent}
                        </div>
                        <div className="flex flex-wrap gap-y-2 gap-x-6 text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-rossview-red" />
                            {game.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-rossview-red" />
                            {game.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-rossview-red" />
                            {game.location === "Home" ? "Rossview Stadium" : `${game.opponent} Field`}
                          </div>
                        </div>
                        
                        <div className="mt-3">
                            {Boolean(game.isHomecoming) && (
                              <span className="inline-block bg-rossview-red text-white text-sm py-1 px-3 rounded-full mr-2">
                                Homecoming Game
                              </span>
                            )}
                            {Boolean(game.isSeniorNight) && (
                              <span className="inline-block bg-rossview-red text-white text-sm py-1 px-3 rounded-full">
                                Senior Night
                              </span>
                            )}
                          </div>
                      </div>

                      <div className="mt-4 md:mt-0">
                        {game.outcome && (
                                <div className={`text-sm font-medium mt-1 ${
                                  game.outcome === 'Win' ? 'text-green-600' : 
                                  game.outcome === 'Loss' ? 'text-red-600' : 'text-gray-600'
                                }`}>
                                  {game.outcome}
                                </div>
                              )}
                      </div>
                      
                      <div className="mt-4 md:mt-0">
                        {game.result ? (
                          <div className="bg-gray-100 py-3 px-6 rounded-lg text-center">
                            <div className="text-sm text-gray-600">Final</div>
                            <div className="text-xl font-bold">{game.result}</div>
                          </div>
                        ) : (
                          <Button variant="outline" className="border-rossview-red text-rossview-red hover:bg-rossview-red hover:text-white">
                            Add to Calendar
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Season Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2 mb-12">
            Season Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Playoff Information</h3>
              <p className="text-gray-700 text-center">
                Region playoffs begin November 3, 2025. Check back for updates 
                as our Hawks compete for the state championship.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Special Events</h3>
              <p className="text-gray-700 text-center">
                Homecoming Week: October 2-6, 2025<br />
                Senior Night: October 20, 2025<br />
                Football Banquet: November 30, 2025
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Ticket Information</h3>
              <p className="text-gray-700 text-center">
                Tickets: $8 Adults, $5 Students<br />
                Season Passes Available<br />
                Online purchasing available soon
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Schedule;
