import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Computer Science Student",
    "hero.tagline": "PFE 2025 - Passionate about AI, software development and data science",
    
    // About
    "about.title": "About",
    "about.description": "Final year Computer Science student at ISI Ariana, passionate about software development, artificial intelligence and data science. With experience in AI/BI development and technical project management at Codex Junior Entreprise, I'm seeking a challenging PFE 2025 internship to apply my skills in AI, data and full-stack development in an innovative environment.",
    "about.achievement": "Ranked among the top 5 students in the department",
    
    // Education
    "education.title": "Education",
    "education.degree": "Bachelor's in Computer Science",
    "education.school": "Higher Institute of Computer Science (ISI Ariana) • Tunisia",
    "education.period": "2023 - 2026",
    "education.description": "Intensive and competitive training in software development, artificial intelligence and information systems, offering versatile education.",
    "education.achievement": "Ranked among the top 5 students in the department each year",
    "education.domains": "Areas of Study:",
    "education.domain1": "Software Development",
    "education.domain2": "Artificial Intelligence",
    "education.domain3": "Data Science",
    "education.domain4": "Information Systems",
    "education.domain5": "Object-Oriented Programming",
    "education.domain6": "Database",
    
    // Experience
    "experience.title": "Professional Experience",
    "experience.role1": "Project Department Manager",
    "experience.company1": "Codex Junior Entreprise",
    "experience.location1": "Ariana, Tunisia",
    "experience.period1": "August 2025 - Present",
    "experience.desc1_1": "Supervision and management of technical projects, collection of client requirements and documentation writing (specifications, contract, requirements...).",
    "experience.desc1_2": "Coordination of project managers and monitoring of agile methodologies to ensure quality and deadlines.",
    "experience.skills1": "Skills used:",
    
    "experience.role2": "AI & Business Intelligence Intern",
    "experience.company2": "Sagemcom",
    "experience.location2": "Ben Arous, Tunisia",
    "experience.period2": "June 2025 - August 2025",
    "experience.desc2_1": "Development and integration of AI and BI solutions, data collection and processing with Python, Pandas and SQL to optimize dashboards.",
    "experience.desc2_2": "Design and deployment of prediction models, including linear regression, decision trees and random forest, to automate and improve decision-making.",
    "experience.desc2_3": "Creation of a Streamlit application to predict values from user inputs based on models trained in Jupyter Notebook.",
    
    // Projects
    "projects.title": "Projects",
    "projects.role": "Role",
    "projects.technologies": "Technologies:",
    "projects.sourceCode": "Source Code",
    "projects.academicTitle": "Academic & Personal Projects",
    "projects.academicDesc": "Discover my other projects and contributions on GitHub",
    "projects.viewGithub": "View on GitHub",
    
    // Skills
    "skills.title": "Skills",
    "skills.languages": "Programming Languages",
    "skills.frameworks": "Frameworks & Tools",
    "skills.databases": "Databases & BI",
    "skills.methodologies": "Methodologies & Soft Skills",
    "skills.additionalTools": "Additional Tools & Technologies",
    
    // Languages
    "languages.title": "Languages",
    "languages.linguistic": "Linguistic Skills",
    "languages.arabic": "Arabic",
    "languages.arabicLevel": "Native language",
    "languages.english": "English",
    "languages.englishLevel": "Advanced",
    "languages.french": "French",
    "languages.frenchLevel": "Intermediate",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's stay in touch!",
    "contact.description": "Feel free to contact me for any PFE 2025 internship opportunity or collaboration",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.followMe": "Follow me on",
    "contact.sendMessage": "Send me a message",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.student": "Computer Science Student • PFE 2025",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.education": "Formation",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Étudiant en Licence Informatique",
    "hero.tagline": "PFE 2025 - Passionné par l'IA, le développement logiciel et la data science",
    
    // About
    "about.title": "À propos",
    "about.description": "Étudiant en dernière année de Licence en Informatique à l'ISI Ariana, passionné par le développement logiciel, l'intelligence artificielle et la science des données. Fort d'expériences en développement IA/BI et en gestion de projets techniques au sein de Codex Junior Entreprise, je recherche un stage PFE 2025 stimulant pour appliquer mes compétences en IA, data et développement full-stack dans un environnement innovant.",
    "about.achievement": "Classé parmi les 5 premiers étudiants du département",
    
    // Education
    "education.title": "Formation",
    "education.degree": "Licence en Informatique (Computer Science)",
    "education.school": "Institut Supérieur d'Informatique (ISI Ariana) • Tunisie",
    "education.period": "2023 - 2026",
    "education.description": "Formation intensive et compétitive en développement logiciel, intelligence artificielle et systèmes d'information, offrant une formation polyvalente.",
    "education.achievement": "Classé parmi les 5 premiers étudiants du département chaque année",
    "education.domains": "Domaines d'études:",
    "education.domain1": "Développement Logiciel",
    "education.domain2": "Intelligence Artificielle",
    "education.domain3": "Science des Données",
    "education.domain4": "Systèmes d'Information",
    "education.domain5": "Programmation Orientée Objet",
    "education.domain6": "Base de Données",
    
    // Experience
    "experience.title": "Expériences Professionnelles",
    "experience.role1": "Responsable du Pôle Projet",
    "experience.company1": "Codex Junior Entreprise",
    "experience.location1": "Ariana, Tunisie",
    "experience.period1": "Août 2025 - Présent",
    "experience.desc1_1": "Supervision et pilotage des projets techniques, collecte des besoins clients et rédaction de la documentation (cahier des charges, contrat, spécifications ...).",
    "experience.desc1_2": "Coordination des chefs de projets et suivi des méthodologies agiles pour garantir qualité et respect des délais.",
    "experience.skills1": "Compétences utilisées:",
    
    "experience.role2": "Stagiaire en Intelligence Artificielle & Business Intelligence",
    "experience.company2": "Sagemcom",
    "experience.location2": "Ben Arous, Tunisie",
    "experience.period2": "Juin 2025 - Août 2025",
    "experience.desc2_1": "Développement et intégration de solutions IA et BI, collecte et traitement de données avec Python, Pandas et SQL pour optimiser les tableaux de bord.",
    "experience.desc2_2": "Conception et déploiement de modèles de prédiction, dont régression linéaire, arbres de décision et random forest, pour automatiser et améliorer la prise de décision.",
    "experience.desc2_3": "Création d'une application Streamlit pour prédire des valeurs à partir d'entrées utilisateur sur la base de modèles entraînés dans Jupyter Notebook.",
    
    // Projects
    "projects.title": "Projets",
    "projects.role": "Rôle",
    "projects.technologies": "Technologies:",
    "projects.sourceCode": "Code Source",
    "projects.academicTitle": "Projets Académiques & Personnels",
    "projects.academicDesc": "Découvrez mes autres projets et contributions sur GitHub",
    "projects.viewGithub": "Voir sur GitHub",
    
    // Skills
    "skills.title": "Compétences",
    "skills.languages": "Langages de Programmation",
    "skills.frameworks": "Frameworks & Outils",
    "skills.databases": "Bases de Données & BI",
    "skills.methodologies": "Méthodologies & Soft Skills",
    "skills.additionalTools": "Outils & Technologies Supplémentaires",
    
    // Languages
    "languages.title": "Langues",
    "languages.linguistic": "Compétences Linguistiques",
    "languages.arabic": "Arabe",
    "languages.arabicLevel": "Langue maternelle",
    "languages.english": "Anglais",
    "languages.englishLevel": "Avancé",
    "languages.french": "Français",
    "languages.frenchLevel": "Intermédiaire",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Restons en contact!",
    "contact.description": "N'hésitez pas à me contacter pour toute opportunité de stage PFE 2025 ou collaboration",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.followMe": "Suivez-moi sur",
    "contact.sendMessage": "Envoyez-moi un message",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.student": "Étudiant en Licence Informatique • PFE 2025",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
