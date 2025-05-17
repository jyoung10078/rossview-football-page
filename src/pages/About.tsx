
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, BookOpen, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  // Mock data for accomplishments
  const accomplishments = [
    {
      year: "2024",
      achievements: [
        "Regional Semifinals",
        "District Champions",
        "7-3 Regular Season Record"
      ]
    },
    {
      year: "2023",
      achievements: [
        "State Quarterfinals",
        "Regional Champions",
        "9-1 Regular Season Record"
      ]
    },
    {
      year: "2022",
      achievements: [
        "District Runners-Up",
        "8-2 Regular Season Record",
        "Academic All-State Team"
      ]
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
              backgroundImage: "url('https://images.unsplash.com/photo-1580151312338-e7c5315bbbf1?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">ABOUT OUR PROGRAM</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Building a tradition of excellence since 2001.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              The mission of Rossview High School Football is to develop student-athletes who excel academically, 
              athletically, and as citizens. We strive to build young men of character who demonstrate leadership, 
              discipline, and teamwork both on and off the field.
            </p>
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Pillars */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Program Pillars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Academic Excellence</h3>
              <CardContent className="px-0 py-0">
                <p className="text-gray-700 text-center">
                  We prioritize academic achievement, maintaining high GPA standards and promoting classroom success.
                  Our student-athletes are students first, with structured study halls and academic support systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Athletic Development</h3>
              <CardContent className="px-0 py-0">
                <p className="text-gray-700 text-center">
                  Our comprehensive training program develops strength, speed, agility and football skills.
                  We implement advanced systems that prepare players for success at the collegiate level.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-rossview-red flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Character Building</h3>
              <CardContent className="px-0 py-0">
                <p className="text-gray-700 text-center">
                  We develop integrity, responsibility, and leadership through team activities and community service.
                  Our players learn life skills that carry beyond the football field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Program History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Program History</h2>
              <p className="text-lg text-gray-700 mb-6">
                Rossview High School opened its doors in 2001, and with it came the birth of our football program.
                From humble beginnings, the Hawks have grown into a competitive force in Tennessee high school football.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Under our current leadership, the program has reached new heights with multiple district championships
                and playoff appearances. We've developed dozens of collegiate athletes and maintain a tradition of
                excellence both on and off the field.
              </p>
              <p className="text-lg text-gray-700">
                The Hawks continue to build on this foundation, with state championship aspirations and a commitment
                to developing outstanding young men who represent our school and community with pride.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Recent Accomplishments</h3>
              <div className="space-y-6">
                {accomplishments.map(item => (
                  <Card key={item.year} className="overflow-hidden border-l-4 border-l-rossview-red">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3">{item.year} Season</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-rossview-red flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaching Philosophy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">COACHING PHILOSOPHY</h2>
            <p className="text-xl mb-8">
              "Our goal is not just to win games, but to develop young men who will succeed in life. 
              We believe in hard work, discipline, and teamwork as the foundations for success both on and off the field."
            </p>
            <p className="text-lg italic">
              - Coach Robert Wilson, Head Coach
            </p>
          </div>
        </div>
      </section>
      
      {/* Community Impact */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Community Involvement</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The Rossview Hawks are committed to giving back to the Clarksville community that supports us.
                Our players and coaches regularly participate in service projects and community events throughout the year.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Recent community service activities include:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-rossview-red" />
                  Annual youth football camp for elementary and middle school students
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-rossview-red" />
                  Volunteer work with local food banks and homeless shelters
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-rossview-red" />
                  Reading program with nearby elementary schools
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-rossview-red" />
                  Fundraising for local charities and community programs
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                We believe that service builds character and teaches our athletes the importance of giving back.
              </p>
            </div>
            <div className="relative h-80 md:h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Community service" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
