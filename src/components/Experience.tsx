import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t("experience.role1"),
      company: t("experience.company1"),
      location: t("experience.location1"),
      period: t("experience.period1"),
      description: [
        t("experience.desc1_1"),
        t("experience.desc1_2")
      ],
      skills: ["Gestion de Projet", "Méthodologie Agile", "Leadership", "Documentation"]
    },
    {
      title: t("experience.role2"),
      company: t("experience.company2"),
      location: t("experience.location2"),
      period: t("experience.period2"),
      description: [
        t("experience.desc2_1"),
        t("experience.desc2_2"),
        t("experience.desc2_3")
      ],
      skills: ["Python", "Machine Learning", "Streamlit", "SQL", "Pandas", "Power BI"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("experience.title")}
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">{t("experience.skills1")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
