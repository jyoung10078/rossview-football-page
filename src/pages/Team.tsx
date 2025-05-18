import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Trophy, Award, Table as TableIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGoogleSheetData, Player, Coach } from "@/lib/googleSheets";
import { useToast } from "@/components/ui/use-toast";
import { GOOGLE_SHEET_ID, SHEET_TABS } from "@/config";
import React from "react";

const Team = () => {
  const { toast } = useToast();
  
  // Fetch players data from Google Sheet
  const { 
    data: players,
    loading: playersLoading,
    error: playersError
  } = useGoogleSheetData<Player>(GOOGLE_SHEET_ID, SHEET_TABS.PLAYERS);
  
  // Fetch coaches data from Google Sheet
  const {
    data: coaches,
    loading: coachesLoading,
    error: coachesError
  } = useGoogleSheetData<Coach>(GOOGLE_SHEET_ID, SHEET_TABS.COACHES);

  // Show error notifications if there are issues loading data
  React.useEffect(() => {
    if (playersError) {
      toast({
        title: "Error loading players",
        description: playersError.message,
        variant: "destructive"
      });
    }
    
    if (coachesError) {
      toast({
        title: "Error loading coaches",
        description: coachesError.message,
        variant: "destructive"
      });
    }
  }, [playersError, coachesError, toast]);

  // Fallback players data in case of error or for development
  const fallbackPlayers: Player[] = [
    {
      id: 1,
      name: "Jackson Smith",
      number: 12,
      position: "Quarterback",
      grade: "Senior",
      height: "6'2\"",
      weight: "195 lbs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Tyler Johnson",
      number: 21,
      position: "Running Back",
      grade: "Junior",
      height: "5'11\"",
      weight: "185 lbs",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Marcus Williams",
      number: 88,
      position: "Wide Receiver",
      grade: "Senior",
      height: "6'3\"",
      weight: "190 lbs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Isaiah Brown",
      number: 75,
      position: "Offensive Line",
      grade: "Senior",
      height: "6'5\"",
      weight: "285 lbs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Jamal Thompson",
      number: 5,
      position: "Cornerback",
      grade: "Junior",
      height: "5'10\"",
      weight: "175 lbs",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Caleb Wilson",
      number: 52,
      position: "Linebacker",
      grade: "Senior",
      height: "6'1\"",
      weight: "220 lbs",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Fallback coaches data in case of error or for development
  const fallbackCoaches: Coach[] = [
    {
      id: 1,
      name: "Coach Robert Wilson",
      position: "Head Coach",
      bio: "Coach Wilson has led the Hawks program since 2018. With over 20 years of coaching experience, he focuses on developing well-rounded student-athletes.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Coach Michael Thomas",
      position: "Offensive Coordinator",
      bio: "Coach Thomas joined the Hawks in 2019. He previously coached at the collegiate level and brings innovative offensive strategies to the team.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Coach David Martinez",
      position: "Defensive Coordinator",
      bio: "Coach Martinez has been with Rossview for 5 seasons. His defensive schemes have helped the Hawks become one of the top defensive teams in the region.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
  ];

  // Use actual data if available, otherwise fall back to mock data
  const displayedPlayers = players.length > 0 ? players : fallbackPlayers;
  const displayedCoaches = coaches.length > 0 ? coaches : fallbackCoaches;

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">TEAM ROSTER</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Meet the Rossview Hawks football team for the 2025 season.
            </p>
          </div>
        </div>
      </section>

      {/* Team Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="players" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="players" className="text-lg">
                  <Users className="mr-2 h-5 w-5" /> Players
                </TabsTrigger>
                <TabsTrigger value="coaches" className="text-lg">
                  <Trophy className="mr-2 h-5 w-5" /> Coaches
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="players">
              <div className="mb-8">
                <h2 className="section-title">Meet Our Players</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our roster features dedicated student-athletes who represent Rossview with pride on and off the field.
                </p>
              </div>
              
              <div className="mb-8">
                <Card>
                  <CardContent className="p-0">
                    <ScrollArea className="h-[60vh] rounded-md">
                      {playersLoading ? (
                        <div className="flex justify-center items-center p-8">
                          <div className="animate-spin h-8 w-8 border-4 border-rossview-red border-t-transparent rounded-full"></div>
                        </div>
                      ) : (
                        <Table>
                          <TableCaption>Rossview Hawks Football Roster 2025</TableCaption>
                          <TableHeader>
                            <TableRow className="bg-gray-100">
                              <TableHead className="w-12 text-center">#</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Position</TableHead>
                              <TableHead>Grade</TableHead>
                              <TableHead>Height</TableHead>
                              <TableHead>Weight</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {displayedPlayers.map((player) => (
                              <TableRow key={player.id}>
                                <TableCell className="font-medium text-center bg-rossview-red text-white">
                                  {player.number}
                                </TableCell>
                                <TableCell className="font-medium">{player.name}</TableCell>
                                <TableCell>{player.position}</TableCell>
                                <TableCell>{player.grade}</TableCell>
                                <TableCell>{player.height}</TableCell>
                                <TableCell>{player.weight}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button className="bg-rossview-red hover:bg-red-800 text-white">
                  Download Full Roster
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="coaches">
              <div className="mb-8">
                <h2 className="section-title">Coaching Staff</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our experienced coaching staff is dedicated to developing exceptional athletes and outstanding young men.
                </p>
              </div>
              
              {coachesLoading ? (
                <div className="flex justify-center items-center p-8">
                  <div className="animate-spin h-8 w-8 border-4 border-rossview-red border-t-transparent rounded-full"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {displayedCoaches.map(coach => (
                    <Card key={coach.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <img 
                          src={coach.image} 
                          alt={coach.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                        <div className="text-rossview-red font-medium mb-3">{coach.position}</div>
                        <p className="text-gray-700">{coach.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join the Hawks?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Interested students should contact the coaching staff for information about tryouts and team requirements.
          </p>
          <Button className="bg-rossview-red hover:bg-red-800 text-white">
            Contact Coaches
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
