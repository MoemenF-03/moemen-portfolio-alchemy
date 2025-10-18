const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            À propos
          </span>
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg animate-fade-in">
          <p className="text-lg text-foreground leading-relaxed">
            Étudiant en dernière année de Licence en Informatique à l'ISI Ariana, passionné par le développement logiciel, 
            l'intelligence artificielle et la science des données. Fort d'expériences en développement IA/BI et en gestion 
            de projets techniques au sein de Codex Junior Entreprise, je recherche un stage PFE 2025 stimulant pour appliquer 
            mes compétences en IA, data et développement full-stack dans un environnement innovant.
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <div className="h-1 flex-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-sm font-semibold">Classé parmi les 5 premiers étudiants du département</span>
            <div className="h-1 flex-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
