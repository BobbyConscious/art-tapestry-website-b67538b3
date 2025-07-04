import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArtContest from "./pages/ArtContest";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/events" element={<><ScrollToTop /><Events /></>} />
            <Route path="/art-contest" element={<><ScrollToTop /><ArtContest /></>} />
            <Route path="/gallery" element={<><ScrollToTop /><Gallery /></>} />
            <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
            <Route path="/sponsors" element={<><ScrollToTop /><Sponsors /></>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
