
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mock data for gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Football game action",
      category: "game"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team huddle",
      category: "team"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Practice session",
      category: "practice"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Stadium view",
      category: "facility"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Touchdown celebration",
      category: "game"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1527861518759-9ae9a7217afb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Football equipment",
      category: "equipment"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1580151312338-e7c5315bbbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team meeting",
      category: "team"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1568185518838-3300c90c9170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Pregame warmup",
      category: "practice"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1591647862759-bdf6ef08ae78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Football helmet",
      category: "equipment"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Game day atmosphere",
      category: "game"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Team photo",
      category: "team"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1517009323773-b935cc4c15da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Coaching staff",
      category: "team"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">PHOTO GALLERY</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Capturing Hawks moments on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="section-title">Season Highlights</h2>
            <p className="text-lg text-gray-700 mb-8">
              Browse through our collection of photos from games, practices, and special events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="aspect-square overflow-hidden cursor-pointer rounded-md relative group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 text-white text-center px-4 transition-opacity duration-300">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
            <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-black border-none">
              <div className="relative h-full flex flex-col justify-center">
                {selectedImage !== null && (
                  <div className="h-full flex items-center justify-center p-4">
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                
                <DialogClose className="absolute top-4 right-4 text-white hover:text-gray-300">
                  <X className="h-6 w-6" />
                </DialogClose>

                <div className="absolute inset-y-0 left-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>

                <div className="absolute inset-y-0 right-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                  {selectedImage !== null && (
                    <p className="font-medium">{galleryImages[selectedImage].alt}</p>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Photos to Share?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Parents, fans, and students who have great Hawks football photos are encouraged to share them with us for possible inclusion in our gallery.
          </p>
          <Button className="bg-rossview-red hover:bg-red-800 text-white">
            Submit Your Photos
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
