
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create placeholder pages that we'll implement later
const Team = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-3xl font-bold">Team Roster Page</h1>
    <p>This page will be implemented soon.</p>
  </div>
);

const Schedule = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-3xl font-bold">Game Schedule Page</h1>
    <p>This page will be implemented soon.</p>
  </div>
);

const Gallery = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-3xl font-bold">Photo Gallery Page</h1>
    <p>This page will be implemented soon.</p>
  </div>
);

const About = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-3xl font-bold">About Program Page</h1>
    <p>This page will be implemented soon.</p>
  </div>
);

const Contact = () => (
  <div className="min-h-screen pt-20 px-4">
    <h1 className="text-3xl font-bold">Contact Us Page</h1>
    <p>This page will be implemented soon.</p>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
