import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("education.title")}
          </span>
        </h2>

        <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{t("education.degree")}</CardTitle>
                <p className="text-muted-foreground font-medium">{t("education.school")}</p>
                <p className="text-sm text-muted-foreground">{t("education.period")}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              {t("education.description")}
            </p>
            
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Award className="w-5 h-5 text-accent" />
              <p className="text-sm font-semibold text-foreground">
                {t("education.achievement")}
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">{t("education.domains")}</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  t("education.domain1"),
                  t("education.domain2"),
                  t("education.domain3"),
                  t("education.domain4"),
                  t("education.domain5"),
                  t("education.domain6")
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
