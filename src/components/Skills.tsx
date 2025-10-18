import { useState, useEffect, useRef } from "react";
import { Code, Database, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Langages de Programmation",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "Frameworks & Outils",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Streamlit", level: 85 },
        { name: "Android Studio", level: 70 },
        { name: "Git", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Bases de Données & BI",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 75 },
        { name: "Power BI", level: 80 }
      ]
    },
    {
      icon: Users,
      title: "Méthodologies & Soft Skills",
      skills: [
        { name: "Agile Scrum", level: 90 },
        { name: "Machine Learning", level: 80 },
        { name: "Gestion de Projet", level: 85 },
        { name: "Documentation", level: 90 },
        { name: "Coordination d'Équipe", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Compétences
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card 
              key={catIndex}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <Card className="mt-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Outils & Technologies Supplémentaires</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Linux",
                "Jupyter Notebook",
                "Pandas",
                "Figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Express.js",
                "OOP"
              ].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
