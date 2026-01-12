import heroImage from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Portrait */}
          <div className="relative animate-fade-in">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img
                src={heroImage}
                alt="Горохова Тамара Николаевна"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full" />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Воспитатель • Педагог • Творец
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Горохова<br />
              <span className="text-primary">Тамара Николаевна</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Воспитатель разновозрастной группы МБУ «Брянковская школа №5». 
              Более 16 лет посвящаю себя воспитанию и развитию детей дошкольного возраста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Узнать больше
              </a>
              <a
                href="#achievements"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors duration-300"
              >
                Мои достижения
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
