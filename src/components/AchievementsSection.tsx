import { useState } from "react";
import { X, Award, Star } from "lucide-react";
import cert1 from "@/assets/certificate-1.jpg";
import cert2 from "@/assets/certificate-2.jpg";
import cert3 from "@/assets/certificate-3.jpg";

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      image: cert1,
      title: "Речевое развитие в ФОП ДО",
      year: "2025",
    },
    {
      image: cert2,
      title: "Компетенции педагога дошкольного образования",
      year: "2024",
    },
    {
      image: cert3,
      title: "Инструктор по физической культуре",
      year: "2019",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-secondary/30 to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Stars decoration */}
      <div className="absolute top-20 left-1/4 text-accent/20">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-32 right-1/4 text-primary/20">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-1/2 right-10 text-accent/15">
        <Star className="w-10 h-10 fill-current" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Гордость и успехи</span>
          <h2 className="section-title">Достижения и награды</h2>
          <p className="section-subtitle mx-auto">
            Сертификаты и дипломы, подтверждающие профессиональный рост и квалификацию
          </p>
          <div className="decorative-line" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-background/90 backdrop-blur-sm shadow-lg card-hover border border-border/50">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-foreground font-display text-lg font-semibold">
                      {cert.title}
                    </p>
                    <p className="text-primary-foreground/80 text-sm">
                      {cert.year}
                    </p>
                  </div>
                  {/* Award badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 font-script text-xl">
            Дополнительные сертификаты и дипломы будут добавлены ✨
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;