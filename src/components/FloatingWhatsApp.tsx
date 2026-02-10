import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const FloatingWhatsApp = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your water tanks. Could you help me choose the right one?"
    );
    window.open(`https://wa.me/254739588226?text=${message}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size="sm"
            className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 text-foreground shadow-elegant animate-fade-in hover-scale"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        )}

        {/* WhatsApp Button */}
        <div className="relative">
          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Main Button - text only */}
          <Button
            onClick={openWhatsApp}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            className="relative h-12 md:h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-elegant hover-scale transition-all duration-300 focus:outline-none border border-white/60 backdrop-blur-sm px-5 md:px-6 text-sm md:text-base font-medium tracking-wide"
          >
            Talk to us
          </Button>

          {/* Tooltip for mobile */}
          <div className="md:hidden absolute bottom-16 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-card">
            Talk to us
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
          </div>
        </div>
      </div>

      {/* Background Pulse Effect */}
      <div className="fixed bottom-[1.875rem] right-[1.875rem] z-40 w-16 h-16 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none"></div>
    </>
  );
};

export default FloatingWhatsApp;