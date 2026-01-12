import { GraduationCap, BookOpen, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      year: "2008",
      title: "Дошкольное образование",
      institution: "Краевой педагогический колледж №2",
      description: "Дополнительная квалификация: Руководитель изобразительной деятельности",
      icon: GraduationCap,
    },
    {
      year: "2019",
      title: "Физическая культура",
      institution: "ООО «Инфоурок»",
      description: "Профессиональная переподготовка по программе «Физическая культура: теория и методика преподавания в дошкольном образовании». Квалификация: Инструктор по физической культуре",
      icon: BookOpen,
    },
  ];

  const courses = [
    {
      year: "2024",
      title: "Компетенции педагога дошкольного образования",
      hours: "216 часов",
      description: "При реализации Стратегии комплексной безопасности детей в Российской Федерации на период до 2030 года",
    },
    {
      year: "2025",
      title: "Речевое развитие в ФОП ДО",
      hours: "16 часов",
      description: "Планирование и проведение занятий, нацеленных на речевое развитие детей дошкольного возраста",
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* School-themed decorations */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-primary mb-2 block">Мой путь</span>
          <h2 className="section-title">Образование</h2>
          <div className="decorative-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Профессиональное образование
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 card-hover shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-accent" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Повышение квалификации
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-2xl border border-border/50 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full">
                      {course.year}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {course.hours}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;