import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            Siap Naik Level <span className="text-primary">dengan AI</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Jadwalkan sesi konsultasi & demo gratis — tanpa komitmen, hanya peluang untuk mengubah cara kerja bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="group text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 animate-glow"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Jadwalkan Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10"
            >
              Hubungi Kami
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            💬 Atau chat langsung: <a href="mailto:info@vlowzy.com" className="text-primary hover:underline">info@vlowzy.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};
