import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID || 'your_service_id', // Your EmailJS service ID
      import.meta.env.VITE_CONTACT_TEMPLATE_ID || 'your_template_id', // Your EmailJS template ID
      form.current as HTMLFormElement,
      import.meta.env.EMAIL_PUBLIC_KEY || 'your_public_key' // Your EmailJS public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will respond within 2 business days.",
      });

      // Sending message to Coaching Staff
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_MESSAGE_PASS_TEMPLATE_ID || 'your_template_id',
        form.current as HTMLFormElement,
        import.meta.env.EMAIL_PUBLIC_KEY || 'your_public_key'
      )
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again later.",
          variant: "destructive"
        });
      }
      )
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    })
    .finally(() => {
      setLoading(false);
    });
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
              backgroundImage: "url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3')", 
              backgroundPosition: "center 30%",
              filter: "brightness(0.6)"
            }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">CONTACT US</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Feel free to reach out with any questions about the football program, 
                booster club, upcoming events, or if you're interested in supporting the Hawks.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rossview-red/10 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-rossview-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-4pm CT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rossview-red/10 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-rossview-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-700">football@rossviewhawks.org</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-rossview-red/10 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-rossview-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Address</h3>
                    <p className="text-gray-700">1237 Rossview Rd</p>
                    <p className="text-gray-700">Clarksville, TN 37043</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-rossview-red hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-5 w-5 fill-white">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-rossview-red hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 fill-white">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-rossview-red hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-white">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="section-title">Send a Message</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject of your message" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message" 
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-rossview-red hover:bg-red-800 text-white w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2 mb-8">
            Find Us
          </h2>
          <div className="aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.3075353885396!2d-87.2988813!3d36.5953528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886534da4e7b5e7d%3A0x3e9780fe9df3d700!2sRossview%20High%20School!5e0!3m2!1sen!2sus!4v1656789012345!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Rossview High School Map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;