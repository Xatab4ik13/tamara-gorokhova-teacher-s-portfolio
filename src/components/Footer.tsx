import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-r from-secondary/60 via-secondary/40 to-secondary/60 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-script text-2xl text-primary">Горохова</span>
            <span className="font-display text-sm text-muted-foreground">Тамара Николаевна</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Воспитатель <Heart className="w-4 h-4 text-primary fill-primary" /> МБОУ «БСШ 5»
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;