import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-6 border-t border-border bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Moemen Ferjani. {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            {t("footer.student")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
