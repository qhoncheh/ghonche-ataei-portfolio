import { useLanguage } from "../language/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-5xl font-bold tracking-tight">
            <span className="inline-block opacity-0 animate-fade-in">
              {t('hello')}
            </span>
            <span className="text-primary ml-3 opacity-0 text-2xl md:text-5xl animate-fade-in-delay-1">
              {t('name').split(' ')[0]}
            </span>
            <span className="text-gradient ml-3 opacity-0 text-2xl md:text-5xl animate-fade-in-delay-2">
              {t('name').split(' ')[1]}
            </span>
          </h1>
          <p className="text-md md:text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            {t('bio')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;