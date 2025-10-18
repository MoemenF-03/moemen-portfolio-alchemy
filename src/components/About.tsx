import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("about.title")}
          </span>
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg animate-fade-in">
          <p className="text-lg text-foreground leading-relaxed">
            {t("about.description")}
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <div className="h-1 flex-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-semibold">{t("about.achievement")}</span>
            <div className="h-1 flex-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
