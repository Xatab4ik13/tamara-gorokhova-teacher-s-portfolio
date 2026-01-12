import { GraduationCap, BookOpen } from "lucide-react";

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
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Образование</h2>
          <div className="decorative-line" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Профессиональное образование
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-card rounded-2xl border border-border card-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
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
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Повышение квалификации
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 bg-secondary/50 rounded-2xl border border-border/50 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {course.year}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {course.hours}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
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
