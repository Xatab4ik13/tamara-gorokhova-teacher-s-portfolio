import { Quote, Heart, Star } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5" />
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-1/4 text-accent/20">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-20 left-1/3 text-primary/20">
        <Heart className="w-6 h-6 fill-current" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
          
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8">
            «Каждый ребёнок — это уникальный мир, полный возможностей и талантов. 
            Моя задача — помочь ему раскрыться, поверить в себя и сделать первые 
            шаги к большим открытиям»
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/40" />
            <p className="text-muted-foreground font-script text-2xl">
              Тамара Николаевна Горохова
            </p>
            <div className="w-16 h-px bg-primary/40" />
          </div>
          
          {/* Decorative divider */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <Heart className="w-4 h-4 text-primary/40 fill-primary/40" />
            <Star className="w-3 h-3 text-accent/50 fill-accent/50" />
            <Heart className="w-4 h-4 text-primary/40 fill-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;