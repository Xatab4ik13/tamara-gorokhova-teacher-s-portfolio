import { useState } from "react";
import { X, Camera, Heart } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: gallery1,
      alt: "Праздничное мероприятие с балалайкой",
      span: "col-span-1 row-span-2",
    },
    {
      src: gallery2,
      alt: "Новогоднее представление - Снегурочка",
      span: "col-span-1 row-span-1",
    },
    {
      src: gallery3,
      alt: "Русские народные традиции",
      span: "col-span-1 row-span-1",
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${image.span} cursor-pointer group overflow-hidden rounded-2xl shadow-lg relative`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground font-script text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 font-script text-xl">
            Дополнительные фотографии будут добавлены 📸
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