import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-semibold text-foreground">
            Т.Н. Горохова
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-primary" /> для конкурса «Учитель года»
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
