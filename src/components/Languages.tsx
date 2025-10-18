import { Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Languages = () => {
  const languages = [
    { name: "Arabe", level: "Langue maternelle", proficiency: 100 },
    { name: "Anglais", level: "Avancé", proficiency: 85 },
    { name: "Français", level: "Intermédiaire", proficiency: 70 }
  ];

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Langues
          </span>
        </h2>

        <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Compétences Linguistiques</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className="space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Languages;
