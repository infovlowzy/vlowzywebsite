import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rina Susanti",
      role: "CEO, EduConsult Indonesia",
      content: "Setelah pakai Vlowzy, pekerjaan admin kami jauh lebih cepat dan efisien. Tim bisa fokus ke hal yang lebih penting.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Operations Manager, Grand Hotel",
      content: "AI Voice Agent dari Vlowzy benar-benar game changer. Tamu kami sangat puas dengan layanan 24/7 yang responsif.",
      rating: 5,
    },
    {
      name: "Dr. Amelia Putri",
      role: "Director, Klinik Sehat Sentosa",
      content: "Reminder otomatis dan sistem appointment membuat operasional klinik kami jauh lebih smooth. No-show turun drastis!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Kepercayaan dari berbagai bisnis yang telah bertransformasi dengan Vlowzy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-border/50">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold text-foreground">StartupX</div>
            <div className="text-2xl font-bold text-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-foreground">Digital Agency</div>
            <div className="text-2xl font-bold text-foreground">SmartBiz</div>
          </div>
        </div>
      </div>
    </section>
  );
};
