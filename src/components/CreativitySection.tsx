import snowFigure from "@/assets/snow-figure.jpg";

const CreativitySection = () => {
  return (
    <section id="creativity" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Творческие проекты</h2>
          <p className="section-subtitle mx-auto">
            Творчество — неотъемлемая часть моей работы и жизни
          </p>
          <div className="decorative-line" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm uppercase tracking-widest text-accent mb-4">
                Конкурс «Лучшая снежная фигура»
              </span>
              <h3 className="font-display text-3xl font-semibold text-foreground mb-6">
                Снежная скульптура
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={snowFigure}
                    alt="Снежная фигура - конкурсная работа"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                  <span className="font-display text-lg font-semibold">
                    Победитель
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
