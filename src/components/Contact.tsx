import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ferjanimoemen2003@gmail.com",
      href: "mailto:ferjanimoemen2003@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+216 20 560 657",
      href: "tel:+21620560657"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Mornag, Ben Arous, Tunisie",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MoemenF-03"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moemen-ferjeni-0b964a356"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact
          </span>
        </h2>

        <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Restons en contact!</h3>
              <p className="text-muted-foreground">
                N'hésitez pas à me contacter pour toute opportunité de stage PFE 2025 ou collaboration
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-sm text-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Suivez-moi sur</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="group border-primary/50 hover:border-primary animate-scale-in"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <Button 
                size="lg" 
                asChild
                className="group relative overflow-hidden"
              >
                <a href="mailto:ferjanimoemen2003@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Envoyez-moi un message
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
