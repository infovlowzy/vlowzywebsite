import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Workflow, Code } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: MessageCircle,
      title: "AI Chat Agent",
      description: "Chatbot pintar yang bisa berinteraksi layaknya manusia — memahami konteks percakapan, menjawab pertanyaan secara akurat, dan memberikan solusi real-time di berbagai platform. Bukan sekadar chatbot biasa, tapi agen cerdas yang bisa menjadwalkan meeting, mengirim email, memperbarui data, dan menjalankan tugas-tugas bisnis secara otomatis.",
      features: ["Human-like & Contextual Conversation", "24/7 Availability", "Lead Qualification & Scoring", "Multi-channel Integration (Whatsapp, Website, etc)", "Supports 96+ Languages", "Centralized Funneling Dashboard", "Seamless System Integration (CRM, Calendar, Email. dll.", "Customizable Tone & Personality"],
    },
    {
      icon: Mail,
      title: "Smart Voice Agent",
      description: "Asisten suara pintar yang bisa berbicara layaknya manusia, memahami konteks pembicaraan, dan merespons secara real-time. Cocok untuk bisnis yang ingin memberikan pengalaman pelanggan modern — dari menjawab pertanyaan, melakukan panggilan otomatis, hingga follow-up prospek tanpa perlu tenaga manusia.",
      features: ["Natural Human-like Voice Conversations", "Real-Time Response & Context Understanding", "Lead Qualification via Phone Calls", "Automated Call Follow-Ups & Reminders", "Integration with Existing CRM / Customer Database"],
    },
    {
      icon: Workflow,
      title: "Operational Automation",
      description: "Semua proses internal bisnis berjalan otomatis, mulai dari laporan, reminder, approval, hingga koordinasi tim. Lebih efisien, minim error, dan hemat waktu.",
      features: ["Automated Daily & Weekly Reports", "Smart Reminders & Notifications", "Task Assignment & Tracking", "Email & Document Automation", "Dashboard Summary & Analytics"],
    },
    {
      icon: Code,
      title: "Custom AI Systems",
      description: "Solusi AI yang dirancang khusus sesuai kebutuhan unik bisnis Anda—dari chatbot spesial hingga sistem prediktif.",
      features: ["Tailored Solutions", "Scalable Architecture", "Full Support"],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solusi yang Kami <span className="text-primary">Tawarkan</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Berbagai solusi AI automation yang dapat disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Learn More →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
