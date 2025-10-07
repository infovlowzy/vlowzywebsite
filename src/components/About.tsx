import { Card } from "@/components/ui/card";
import { Bot, Clock, Zap, Puzzle } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Bot,
      title: "24/7 Smart Agents",
      description: "AI yang bekerja tanpa henti untuk melayani bisnis Anda kapan saja.",
    },
    {
      icon: Zap,
      title: "Custom Automation",
      description: "Solusi AI yang disesuaikan dengan kebutuhan unik bisnis Anda.",
    },
    {
      icon: Clock,
      title: "Maximum Efficiency",
      description: "Hemat waktu hingga 80% dengan otomasi proses berulang.",
    },
    {
      icon: Puzzle,
      title: "Easy Integration",
      description: "Terintegrasi mulus dengan sistem yang sudah Anda gunakan.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm md:text-base text-primary font-medium">
              Lebih dari sekadar chatbot — ini adalah paket solusi AI lengkap yang dirancang khusus untuk kebutuhan bisnismu
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengapa Memilih <span className="text-primary">Vlowzy</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vlowzy, bagian dari <strong>PT Tritech Dynamic Indonesia</strong>, adalah partner terpercaya dalam transformasi digital bisnis Anda. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
