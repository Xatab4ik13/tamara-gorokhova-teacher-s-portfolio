import { useState } from "react";
import { X, Camera, Heart } from "lucide-react";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: photo1,
      description: "В нашей дошкольной группе прошла тематическая беседа, посвящённая Дню Героев Отечества.",
    },
    {
      src: photo2,
      description: "Волшебный праздник: «Новогоднее приключение Буратино и Мальвины»",
    },
    {
      src: photo3,
      description: "4 ноября в России отмечается государственный праздник — День народного единства.",
    },
    {
      src: photo4,
      description: "В рамках IV этапа «Декады дорожной безопасности» в нашем детском саду были организованы разнообразные мероприятия, направленные на повышение уровня дорожной безопасности среди детей.",
    },
    {
      src: photo5,
      description: "31 октября в нашем детском саду прошёл незабываемый осенний праздник «Здравствуй, осень золотая!»",
    },
    {
      src: photo6,
      description: "ПОКА ПАМЯТЬ ЖИВА…",
    },
    {
      src: photo7,
      description: "ВЫПУСКНОЙ В ДЕТСКОМ САДУ",
    },
    {
      src: photo8,
      description: "12 декабря наша страна отмечает особенный праздник – День Конституции Российской Федерации",
    },
    {
      src: photo9,
      description: "В дошкольной группе нашей школы прошла замечательная выставка осенних поделок из природного материала «Осенний бум», организованная для наших маленьких творцов и их родителей.",
    },
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-primary/10">
        <Camera className="w-20 h-20" />
      </div>
      <div className="absolute bottom-20 right-10 text-accent/15">
        <Heart className="w-16 h-16 fill-current" />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Яркие моменты</span>
          <h2 className="section-title">Фотогалерея</h2>
          <p className="section-subtitle mx-auto">
            Моменты из рабочих будней и праздничных мероприятий
          </p>
          <div className="decorative-line" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden card-hover border border-border/50">
                  {/* Description on top */}
                  <div className="p-4 border-b border-border/30">
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Image - fixed aspect ratio */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.description}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
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
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;