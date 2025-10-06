import { Card } from "@/components/ui/card";
import { GraduationCap, Hotel, Building2 } from "lucide-react";

export const UseCases = () => {
  const cases = [
    {
      icon: GraduationCap,
      industry: "Konsultan Pendidikan",
      title: "Otomasi Lead Qualification & Follow-up",
      challenge: "Ratusan inquiry siswa setiap hari sulit dikelola secara manual",
      solution: "AI Chat Agent untuk screening calon siswa, menjawab pertanyaan umum, dan auto-follow-up via WhatsApp & Email",
      results: ["60% waktu admin berkurang", "3x lebih banyak qualified leads", "95% response rate dalam 2 menit"],
    },
    {
      icon: Hotel,
      industry: "Hospitality",
      title: "AI Voice Agent Room Assistant",
      challenge: "Tamu kesulitan mendapat layanan di luar jam operasional resepsionis",
      solution: "Voice-activated AI agent di kamar hotel untuk pesan room service, request housekeeping, dan informasi fasilitas 24/7",
      results: ["100% availability", "40% peningkatan kepuasan tamu", "Pengurangan workload staff"],
    },
    {
      icon: Building2,
      industry: "Healthcare",
      title: "Automated Appointment & Reminder System",
      challenge: "Banyak pasien lupa jadwal dan no-show meningkat",
      solution: "Smart Email & SMS Agent untuk reminder otomatis, reschedule, dan konfirmasi appointment",
      results: ["50% penurunan no-show", "Efisiensi administrasi 70%", "Pasien lebih puas"],
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bagaimana AI <span className="text-primary">Membantu Bisnis</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Studi kasus nyata dari berbagai industri yang telah menggunakan Vlowzy
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {cases.map((useCase, index) => (
            <Card
              key={index}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="p-5 rounded-2xl bg-primary/10">
                    <useCase.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">{useCase.industry}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{useCase.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Tantangan</h4>
                      <p className="text-foreground leading-relaxed">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Solusi</h4>
                      <p className="text-foreground leading-relaxed">{useCase.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Hasil</h4>
                    <div className="flex flex-wrap gap-3">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
