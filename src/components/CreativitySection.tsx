import snowFigure from "@/assets/snow-figure.jpg";
import { Sparkles, Trophy } from "lucide-react";

const CreativitySection = () => {
  return (
    <section id="creativity" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      
      {/* Sparkle decorations */}
      <div className="absolute top-20 right-20 text-accent/30">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 left-16 text-primary/20">
        <Sparkles className="w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Вдохновение</span>
          <h2 className="section-title">Творческие проекты</h2>
          <p className="section-subtitle mx-auto">
            Творчество — неотъемлемая часть моей работы и жизни
          </p>
          <div className="decorative-line" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent mb-4 bg-accent/10 px-4 py-2 rounded-full">
                <Trophy className="w-4 h-4" />
                Конкурс «Лучшая снежная фигура»
              </div>
              <h3 className="font-display text-3xl font-semibold text-foreground mb-6">
                Снежная скульптура
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Одним из важных направлений моей работы является участие в творческих 
                  конкурсах вместе с воспитанниками и коллегами. Создание снежных фигур — 
                  это не просто зимняя забава, а настоящий творческий процесс.
                </p>
                <p>
                  Эта работа была представлена на конкурсе «Лучшая снежная фигура» и 
                  получила высокую оценку жюри. Создание таких проектов развивает 
                  у детей творческое мышление, навыки командной работы и чувство 
                  прекрасного.
                </p>
              </div>
              <div className="mt-8 p-4 bg-secondary/50 rounded-2xl border border-border/50">
                <p className="font-script text-xl text-primary text-center">
                  "Творчество — это способ показать детям, что невозможное возможно"
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                  <img
                    src={snowFigure}
                    alt="Снежная фигура - конкурсная работа"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span className="font-display text-lg font-semibold">
                    Победитель
                  </span>
                </div>
                {/* Corner decoration */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent/30 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;