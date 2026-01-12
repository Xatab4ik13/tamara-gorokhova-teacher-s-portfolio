import heroImage from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        
        {/* School-themed decorative elements */}
        <svg className="absolute top-32 right-20 w-16 h-16 text-primary/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
        <svg className="absolute bottom-40 left-20 w-12 h-12 text-accent/15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 12c.93 0 1.78.28 2.5.76V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.41-1.41-.71-.71-3.53 3.53.71.71 1.41-1.41L13 6.71V9H3c-1.1 0-2 .9-2 2v2.5h1.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5H9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5h1.5v3.5h2V12h1.5z"/>
        </svg>
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent/30 rounded-full" />
        <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-primary/20 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Portrait */}
          <div className="relative animate-fade-in">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20">
              <img
                src={heroImage}
                alt="Горохова Тамара Николаевна"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full" />
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary/20 rounded-full" />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">
              Воспитатель • Педагог • Творец
            </p>
            <h1 className="mb-6">
              <span className="font-script text-5xl md:text-6xl lg:text-7xl text-primary block mb-2">Горохова</span>
              <span className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">Тамара Николаевна</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Воспитатель разновозрастной группы МБУ «Брянковская школа №5». 
              Более 16 лет посвящаю себя воспитанию и развитию детей дошкольного возраста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Узнать больше
              </a>
              <a
                href="#achievements"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Мои достижения
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;