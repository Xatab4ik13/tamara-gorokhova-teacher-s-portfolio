import { MapPin, Mail, Phone, Heart } from "lucide-react";

const ContactsSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Место работы",
      value: "МБОУ «БСШ 5»",
      subvalue: "Муниципальное Бюджетное общеобразовательное учреждение «Брянковская средняя школа 5»",
    },
    {
      icon: Mail,
      label: "Рабочая почта",
      value: "BryankaDOY@mail.ru",
      subvalue: "Личная: Tamara_kulya@mail.ru",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 923 356 2827",
      subvalue: "Рабочее время: Пн-Пт, 8:00-17:00",
    },
  ];

  return (
    <section id="contacts" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Будем на связи</span>
          <h2 className="section-title">Контакты</h2>
          <p className="section-subtitle mx-auto">
            Буду рада ответить на ваши вопросы
          </p>
          <div className="decorative-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 card-hover shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                  {item.label}
                </p>
                <p className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.subvalue}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/60 px-8 py-4 rounded-full">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <p className="font-script text-xl text-foreground">
                Благодарю за внимание к моей работе!
              </p>
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;