import { useState } from "react";
import { X, Camera, Heart } from "lucide-react";
import photo1 from "@/assets/gallery/photo-1.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: photo1,
      title: "День Героев Отечества",
      description: "В нашей дошкольной группе прошла тематическая беседа, посвящённая Дню Героев Отечества.",
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
                  {/* Title on top */}
                  <div className="p-4 border-b border-border/30">
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {image.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Image - fixed aspect ratio */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
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