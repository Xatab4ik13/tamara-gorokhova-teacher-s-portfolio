import { useState } from "react";
import { X } from "lucide-react";
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
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                <div className="relative overflow-hidden rounded-2xl bg-background shadow-sm card-hover">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-primary-foreground font-display text-lg font-semibold">
                      {cert.title}
                    </p>
                    <p className="text-primary-foreground/80 text-sm">
                      {cert.year}
                    </p>
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

          <p className="text-center text-muted-foreground mt-12 italic">
            Дополнительные сертификаты и дипломы будут добавлены
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
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
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
