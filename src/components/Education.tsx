import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Formation
          </span>
        </h2>

        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Licence en Informatique (Computer Science)</CardTitle>
                <p className="text-muted-foreground font-medium">Institut Supérieur d'Informatique (ISI Ariana) • Tunisie</p>
                <p className="text-sm text-muted-foreground">2023 - 2026</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Formation intensive et compétitive en développement logiciel, intelligence artificielle et systèmes d'information, 
              offrant une formation polyvalente.
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Award className="w-5 h-5 text-accent" />
              <p className="text-sm font-semibold text-foreground">
                Classé parmi les 5 premiers étudiants du département chaque année
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">Domaines d'études:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Développement Logiciel",
                  "Intelligence Artificielle",
                  "Science des Données",
                  "Systèmes d'Information",
                  "Programmation Orientée Objet",
                  "Base de Données"
                ].map((domain, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
