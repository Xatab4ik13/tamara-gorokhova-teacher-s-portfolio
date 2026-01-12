import { useState } from "react";
import { X, Award, Star, Medal, Trophy } from "lucide-react";
import cert1 from "@/assets/certificate-1.jpg";
import cert2 from "@/assets/certificate-2.jpg";
import cert3 from "@/assets/certificate-3.jpg";
import cert4 from "@/assets/certificate-4.jpg";
import cert5 from "@/assets/certificate-5.jpg";
import cert6 from "@/assets/certificate-6.jpg";
import cert7 from "@/assets/certificate-7.jpg";
import cert8 from "@/assets/certificate-8.jpg";
import gtoBadge from "@/assets/gto-badge.jpg";
import diplomaSnow from "@/assets/diploma-snow.jpg";

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const specialAwards = [
    {
      image: gtoBadge,
      title: "Золотой знак ГТО XI ступени",
      year: "2024",
      icon: Medal,
      highlight: true,
    },
    {
      image: diplomaSnow,
      title: "1 место — «Лучшая снежная фигура»",
      year: "2026",
      icon: Trophy,
      highlight: true,
    },
  ];

  const certificates = [
    {
      image: cert1,
      title: "Речевое развитие в ФОП ДО",
      year: "2025",
      hours: "16 часов",
    },
    {
      image: cert2,
      title: "Компетенции педагога дошкольного образования",
      year: "2024",
      hours: "216 часов",
    },
    {
      image: cert4,
      title: "Внедрение ФОП дошкольного образования",
      year: "2023",
      hours: "180 часов",
    },
    {
      image: cert8,
      title: "Музыка: теория и методика преподавания",
      year: "2019",
      hours: "Профессиональная переподготовка",
    },
    {
      image: cert3,
      title: "Физическая культура в дошкольном образовании",
      year: "2019",
      hours: "Профессиональная переподготовка",
    },
    {
      image: cert5,
      title: "Психолого-педагогическое сопровождение дошкольников с ОВЗ",
      year: "2017",
      hours: "72 часа",
    },
    {
      image: cert6,
      title: "ФГОС в системе дошкольного образования",
      year: "2016",
      hours: "110 часов",
    },
    {
      image: cert7,
      title: "Вариативные образовательные программы",
      year: "2009",
      hours: "72 часа",
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

        <div className="max-w-6xl mx-auto">
          {/* Special Awards */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3">
              <Medal className="w-6 h-6 text-accent" />
              Особые достижения
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {specialAwards.map((award, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(award.image)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-1 shadow-xl">
                    <div className="bg-background/95 backdrop-blur-sm rounded-xl overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                          <award.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                          {award.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{award.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Повышение квалификации
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <p className="text-primary-foreground font-display text-sm font-semibold line-clamp-2">
                        {cert.title}
                      </p>
                      <p className="text-primary-foreground/80 text-xs">
                        {cert.year} • {cert.hours}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <h4 className="font-display text-sm font-semibold text-foreground line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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