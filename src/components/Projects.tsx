import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();
  
  const projects = [
    {
      title: "Cosmos Delivery - Admin Dashboard",
      period: language === "en" ? "October 2024 - December 2024" : "Octobre 2024 - Décembre 2024",
      organization: "Codex Junior Entreprise",
      description: language === "en" 
        ? "Modern and interactive admin dashboard for Cosmos Delivery to streamline logistics, analytics and operations management. As Scrum Master and frontend developer, I created a data-rich interface with interactive charts, smooth animations and responsive design."
        : "Tableau de bord administratif moderne et interactif pour Cosmos Delivery afin de rationaliser la logistique, l'analyse et la gestion des opérations. En tant que Scrum Master et développeur frontend, j'ai créé une interface riche en données avec des graphiques interactifs, des animations fluides et un design responsive.",
      technologies: ["React", "Tailwind CSS", "Recharts", "Framer Motion", "Axios"],
      role: language === "en" ? "Scrum Master & Frontend Developer" : "Scrum Master & Développeur Frontend",
      github: "https://github.com/MoemenF-03/admin-dashboard-REACT"
    },
    {
      title: language === "en" ? "Multi-Descriptor Image Search Engine" : "Moteur de Recherche d'Images Multi-Descripteurs",
      period: language === "en" ? "Academic Project" : "Projet Académique",
      organization: "ISI Ariana",
      description: language === "en"
        ? "Comprehensive image search system using multiple descriptors for content-based image retrieval (CBIR). The system allows users to choose from different feature extraction methods: color/grayscale histograms, correlogram and deep features (VGG16 CNN)."
        : "Système complet de recherche d'images utilisant plusieurs descripteurs pour la récupération d'images basée sur le contenu (CBIR). Le système permet aux utilisateurs de choisir parmi différentes méthodes d'extraction de caractéristiques : histogrammes couleur/niveaux de gris, corrélogramme et deep features (VGG16 CNN).",
      technologies: ["Python", "TensorFlow", "OpenCV", "Gradio", "NumPy", "scikit-image"],
      role: language === "en" ? "Developer" : "Développeur",
      github: "https://github.com/MoemenF-03/Image-Search-Engine-with-Multiple-Descriptors"
    },
    {
      title: language === "en" ? "Car Rental Management System" : "Système de Gestion de Location de Voitures",
      period: language === "en" ? "Academic Project" : "Projet Académique",
      organization: "ISI Ariana",
      description: language === "en"
        ? "Complete car rental management web application developed in PHP and MySQL. Users can browse available vehicles, book cars and manage their reservations. The admin has a dashboard with statistics to manage vehicles, users and bookings."
        : "Application web complète de gestion de location de voitures développée en PHP et MySQL. Les utilisateurs peuvent parcourir les véhicules disponibles, réserver des voitures et gérer leurs réservations. L'administrateur dispose d'un tableau de bord avec statistiques pour gérer les véhicules, utilisateurs et réservations.",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
      role: language === "en" ? "Full-Stack Developer" : "Développeur Full-Stack",
      github: "https://github.com/MoemenF-03/car_rental_FULLSTACK-PHP_MYSQL_BOOTSTRAP"
    },
    {
      title: language === "en" ? "Contact Manager Application" : "Application de Gestion de Contacts",
      period: language === "en" ? "Academic Project" : "Projet Académique",
      organization: "ISI Ariana",
      description: language === "en"
        ? "Desktop application for institutional contact management built with PyQt5. The system offers complete contact management with authentication, allowing users to add, modify, display and delete contacts with data validation and security."
        : "Application desktop pour la gestion de contacts institutionnels construite avec PyQt5. Le système offre une gestion complète des contacts avec authentification, permettant aux utilisateurs d'ajouter, modifier, afficher et supprimer des contacts avec validation des données et sécurité.",
      technologies: ["Python", "PyQt5", "Qt Designer", "CSV"],
      role: language === "en" ? "Developer" : "Développeur",
      github: "https://github.com/MoemenF-03/Contact-Manager-Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("projects.title")}
          </span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-1">{project.organization}</p>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                    {project.role && (
                      <p className="text-sm text-accent font-semibold mt-2">{project.role}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">{t("projects.technologies")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      {t("projects.sourceCode")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-scale-in">
            <CardContent className="py-8 text-center">
              <h3 className="text-xl font-bold mb-2">{t("projects.academicTitle")}</h3>
              <p className="text-muted-foreground mb-4">
                {t("projects.academicDesc")}
              </p>
              <Button variant="outline" size="lg" asChild className="border-primary/50 hover:border-primary">
                <a href="https://github.com/MoemenF-03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  {t("projects.viewGithub")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
