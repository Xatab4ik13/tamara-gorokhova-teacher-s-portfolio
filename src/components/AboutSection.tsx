import { Heart, Users, Palette, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Users, label: "16+ лет", description: "педагогического стажа" },
    { icon: Heart, label: "3 детей", description: "любящая мама" },
    { icon: Palette, label: "Творчество", description: "рисование и рукоделие" },
    { icon: Award, label: "Профессионал", description: "постоянное развитие" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Обо мне</h2>
          <div className="decorative-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl shadow-sm card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-2xl font-semibold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
              <p>
                Я родилась <strong className="text-foreground font-medium">27 января 1988 года</strong> в 
                Северо-Енисейском районе, посёлок Брянка. Там же окончила общеобразовательную школу №5, 
                которая стала для меня не только местом учёбы, но и определила мой жизненный путь.
              </p>
              <p>
                Ещё в школьные годы я поняла, что хочу посвятить свою жизнь работе с детьми. 
                Это решение привело меня в <strong className="text-foreground font-medium">Краевой педагогический 
                колледж №2</strong>, где я получила специальность «Дошкольное образование» с дополнительной 
                квалификацией «Руководитель изобразительной деятельности». В 2008 году я успешно окончила 
                обучение и вернулась в родной посёлок.
              </p>
              <p>
                С тех пор я работаю воспитателем разновозрастной группы в <strong className="text-foreground font-medium">
                Муниципальном Бюджетном учреждении «Брянковская школа №5»</strong>. Каждый день я стараюсь 
                создавать для детей атмосферу творчества, тепла и заботы.
              </p>
              <p>
                В свободное время увлекаюсь спортом — волейболом и баскетболом. Особую страсть питаю к 
                рисованию. Радостно, что мои трое детей — сыновья 15 и 5 лет, а также дочь 11 лет — 
                унаследовали этот талант, и теперь мы творим вместе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
