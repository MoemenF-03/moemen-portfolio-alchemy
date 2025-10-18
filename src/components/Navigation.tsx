import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#education", label: t("nav.education") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MF
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  language === "en" 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage("fr")}
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  language === "fr" 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium px-3 py-2 rounded transition-colors ${
                  language === "en" 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`text-sm font-medium px-3 py-2 rounded transition-colors ${
                  language === "fr" 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Français
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
