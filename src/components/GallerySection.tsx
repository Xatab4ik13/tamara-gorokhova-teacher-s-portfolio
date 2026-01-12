import { useState } from "react";
import { X } from "lucide-react";
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
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                className={`${image.span} cursor-pointer group overflow-hidden rounded-2xl`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 italic">
            Дополнительные фотографии будут добавлены
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
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
