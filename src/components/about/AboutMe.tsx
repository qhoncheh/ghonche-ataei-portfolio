import { Briefcase, Code, User } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("aboutMeTitle").split(" ")[0]}{" "}
          <span className="text-primary">
            {t("aboutMeTitle").split(" ")[1]}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("passionateTitle")}</h3>

            <p className="text-muted-foreground">{t("aboutP1")}</p>

            <p className="text-muted-foreground">{t("aboutP2")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t("getInTouch")}
              </a>

              <a
                href="/cv/GhonchehAtaei-Front-end.pdf"
                download="GhonchehAtaei-Front-end.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("downloadCV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols- gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("webDevTitle")}</h4>
                  <p className="text-muted-foreground">{t("webDevDesc")}</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("uiuxTitle")}</h4>
                  <p className="text-muted-foreground">{t("uiuxDesc")}</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{t("projectMgmtTitle")}</h3>
                  <p className="text-muted-foreground">{t("projectMgmtDesc")}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
