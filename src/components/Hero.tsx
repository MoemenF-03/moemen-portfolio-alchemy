import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Moemen Ferjani
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              {t("hero.subtitle")}
            </p>
            <p className="text-xl text-muted-foreground">
              {t("hero.tagline")}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:ferjanimoemen2003@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">ferjanimoemen2003@gmail.com</span>
              </a>
              <a href="tel:+21620560657" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+216 20 560 657</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="default" size="lg" asChild className="group">
                <a href="https://github.com/MoemenF-03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-primary/50 hover:border-primary">
                <a href="https://www.linkedin.com/in/moemen-ferjeni-0b964a356" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="https://scontent.ftun19-1.fna.fbcdn.net/v/t39.30808-6/550816824_2559217394445362_9068775176139254003_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-GjgDjXIRSAQ7kNvwFZChRC&_nc_oc=AdnUuDbkwGzH8sicE8N7bYABMGsyjh13Lfkz3wWYbX_zn5qAtYhiBlGV4YFb9UaWWN8&_nc_zt=23&_nc_ht=scontent.ftun19-1.fna&_nc_gid=5g9-gwPbao33BSrwYXtNhA&oh=00_AfdZ3SUacgzU-Kr5GDgCIv-s88qW3InT5UXAOdnVl5obiw&oe=68F9678C" 
                alt="Moemen Ferjani"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-2 border-primary/30 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
