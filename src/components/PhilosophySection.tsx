import { Quote } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
          
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8">
            «Каждый ребёнок — это уникальный мир, полный возможностей и талантов. 
            Моя задача — помочь ему раскрыться, поверить в себя и сделать первые 
            шаги к большим открытиям»
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/30" />
            <p className="text-muted-foreground font-medium">
              Т.Н. Горохова
            </p>
            <div className="w-16 h-px bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
