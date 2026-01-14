import { Heart, Users, Palette, Award } from "lucide-react";
import galleryImage from "@/assets/gallery-2.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Users, label: "16+ лет", description: "педагогического стажа" },
    { icon: Heart, label: "3 детей", description: "любящая мама" },
    { icon: Palette, label: "Творчество", description: "рисование и рукоделие" },
    { icon: Award, label: "Профессионал", description: "постоянное развитие" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Познакомимся поближе</span>
          <h2 className="section-title">Обо мне</h2>
          <div className="decorative-line" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-sm card-hover border border-border/50"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display text-2xl font-semibold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={galleryImage} 
                  alt="Горохова Тамара Николаевна на работе" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-script text-2xl text-white drop-shadow-lg">
                    С любовью к детям ❤️
                  </p>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="lg:col-span-3">
              <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-sm border border-border/50 h-full">
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Я родилась <strong className="text-foreground font-medium">27 января 1988 года</strong> в 
                    Северо-Енисейском районе, посёлок Брянка. Там же окончила общеобразовательную школу №5, 
                    которая стала для меня не только местом учёбы, но и определила мой жизненный путь.
                  </p>
                  <p className="text-lg">
                    Ещё в школьные годы я поняла, что хочу посвятить свою жизнь работе с детьми. 
                    Это решение привело меня в <strong className="text-foreground font-medium">Краевой педагогический 
                    колледж №2</strong>, где я получила специальность «Дошкольное образование» с дополнительной 
                    квалификацией «Руководитель изобразительной деятельности». В 2008 году я успешно окончила 
                    обучение и вернулась в родной посёлок.
                  </p>
                  <p className="text-lg">
                    С тех пор я работаю воспитателем дошкольной группы в <strong className="text-foreground font-medium">
                    МБОУ «Брянковская средняя школа 5»</strong>. Каждый день я стараюсь 
                    создавать для детей атмосферу творчества, тепла и заботы.
                  </p>
                  <p className="text-lg">
                    В свободное время увлекаюсь спортом — волейболом и баскетболом. Особую страсть питаю к 
                    рисованию. Радостно, что мои <strong className="text-foreground font-medium">трое детей</strong> — сыновья 15 и 5 лет, а также дочь 11 лет — 
                    унаследовали этот талант, и теперь мы творим вместе.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="font-script text-2xl text-primary text-center">
                    "Каждый ребёнок — это целый мир, который нужно открыть с любовью"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;