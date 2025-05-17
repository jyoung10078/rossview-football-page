
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-5xl md:text-7xl font-bold text-rossview-red mb-4 font-display">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
            Please check the URL or return to the homepage.
          </p>
          <Button className="bg-rossview-red hover:bg-red-800">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
