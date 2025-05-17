
import { Link } from "react-router-dom";
import { MapPin, School, Football } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rossview-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <Football className="mr-2 h-5 w-5 text-rossview-red" /> 
              ROSSVIEW HAWKS
            </h3>
            <p className="text-gray-300 mb-4">
              Home of the Rossview High School football program in Clarksville, Tennessee. 
              Building champions on and off the field since 2001.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="mr-2 h-4 w-4 text-rossview-red" />
              <address className="not-italic">
                1237 Rossview Rd, Clarksville, TN 37043
              </address>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-rossview-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-rossview-red transition-colors">
                  Team Roster
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-rossview-red transition-colors">
                  Game Schedule
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-rossview-red transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-rossview-red transition-colors">
                  About the Program
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-rossview-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4 flex items-center">
              <School className="mr-2 h-5 w-5 text-rossview-red" />
              Connect With Us
            </h3>
            <p className="text-gray-300 mb-4">
              Follow the Hawks on social media for the latest updates, game highlights and team news.
            </p>
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
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Rossview High School Football. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website is operated by Rossview High School's Football Booster Club.
            <br />
            Not an official website of the Clarksville-Montgomery County School System.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
