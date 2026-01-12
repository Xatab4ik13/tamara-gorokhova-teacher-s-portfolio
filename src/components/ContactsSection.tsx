import { MapPin, Mail, Phone } from "lucide-react";

const ContactsSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Место работы",
      value: "МБУ «Брянковская школа №5»",
      subvalue: "Северо-Енисейский район, п. Брянка",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gorohova.tamara@example.com",
      subvalue: "Для связи по вопросам сотрудничества",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (XXX) XXX-XX-XX",
      subvalue: "Рабочее время: Пн-Пт, 8:00-17:00",
    },
  ];

  return (
    <section id="contacts" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                className="text-center p-8 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
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
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
