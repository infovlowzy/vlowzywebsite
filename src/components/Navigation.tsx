import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary">
            Vlowzy
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solusi
            </a>
            <a href="#use-cases" className="text-foreground hover:text-primary transition-colors">
              Studi Kasus
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimoni
            </a>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
