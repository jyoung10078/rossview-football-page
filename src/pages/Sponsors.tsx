
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Gift, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sponsors = () => {
  // Mock data for sponsors
  const sponsors = {
    platinum: [
      {
        id: 1,
        name: "Clarksville Auto Group",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 2,
        name: "First Community Bank",
        logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      }
    ],
    gold: [
      {
        id: 3,
        name: "Johnson Construction",
        logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 4,
        name: "Sports Medicine Associates",
        logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 5,
        name: "Tennessee Orthopaedics",
        logo: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      }
    ],
    silver: [
      {
        id: 6,
        name: "Miller's Grocery",
        logo: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 7,
        name: "Gateway Tire & Service",
        logo: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 8,
        name: "Legends Bank",
        logo: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      },
      {
        id: 9,
        name: "Clarksville Dental Center",
        logo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        website: "https://example.com"
      }
    ]
  };

  // Sponsorship levels
  const sponsorshipLevels = [
    {
      name: "Platinum Sponsor",
      amount: "$5,000+",
      benefits: [
        "Company logo on game jerseys",
        "Premium scoreboard advertising",
        "Full-page program advertisement",
        "PA announcements at all home games",
        "Website and social media recognition",
        "VIP passes to all home games",
        "Team-signed memorabilia",
        "Company banner displayed at field"
      ],
      color: "bg-gray-200" // Platinum color
    },
    {
      name: "Gold Sponsor",
      amount: "$2,500-$4,999",
      benefits: [
        "Half-page program advertisement",
        "Scoreboard advertising",
        "PA announcements at all home games",
        "Website and social media recognition",
        "4 season passes to home games",
        "Company banner displayed at field"
      ],
      color: "bg-yellow-100" // Gold color
    },
    {
      name: "Silver Sponsor",
      amount: "$1,000-$2,499",
      benefits: [
        "Quarter-page program advertisement",
        "PA announcements at select home games",
        "Website and social media recognition",
        "2 season passes to home games"
      ],
      color: "bg-gray-100" // Silver color
    },
    {
      name: "Bronze Sponsor",
      amount: "$500-$999",
      benefits: [
        "Business card ad in program",
        "Website recognition",
        "2 tickets to home opener"
      ],
      color: "bg-orange-50" // Bronze color
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">OUR SPONSORS</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Supporting Hawks Football through community partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                <Handshake className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Thank You to Our Sponsors</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Rossview Hawks Football program would not be possible without the generous support 
              of our sponsors. These local businesses and organizations contribute to the success of our 
              student-athletes both on and off the field. We are grateful for their commitment to our program.
            </p>
          </div>
        </div>
      </section>
      
      {/* Platinum Sponsors */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-gray-200 text-gray-800 text-lg py-2 px-4">Platinum Sponsors</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.platinum.map(sponsor => (
              <Card key={sponsor.id} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-40 w-40 mb-6 relative">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{sponsor.name}</h3>
                  <Button variant="outline" asChild>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="mt-2">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gold Sponsors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg py-2 px-4">Gold Sponsors</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sponsors.gold.map(sponsor => (
              <Card key={sponsor.id} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-32 w-32 mb-4 relative">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{sponsor.name}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Silver Sponsors */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-gray-100 text-gray-800 text-lg py-2 px-4">Silver Sponsors</Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sponsors.silver.map(sponsor => (
              <Card key={sponsor.id} className="overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="h-24 w-24 mb-3 relative">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold mb-2 text-center">{sponsor.name}</h3>
                  <Button variant="outline" size="sm" asChild className="text-xs">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Become a Sponsor Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
                Become a Sponsor
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Support the Rossview Hawks and promote your business to our community. 
                Sponsorship packages are available at various levels to fit your budget and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipLevels.map((level, index) => (
                <Card key={index} className={`overflow-hidden border-t-4 border-t-rossview-red ${level.color}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold">{level.name}</h3>
                      <p className="text-2xl font-bold text-rossview-red mt-2">{level.amount}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {level.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Gift className="h-4 w-4 mr-2 mt-1 text-rossview-red flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-rossview-red hover:bg-red-800 mt-2">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-rossview-red text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                <Award className="h-8 w-8 text-rossview-red" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Interested in Becoming a Sponsor?</h2>
            <p className="text-xl mb-8">
              Contact our Booster Club today to learn more about sponsorship opportunities 
              and how your business can support Hawks Football while gaining valuable exposure.
            </p>
            <Button className="bg-white text-rossview-red hover:bg-gray-100">
              Request Sponsorship Information
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sponsors;
