import { useLanguage } from "./LanguageContext";


const SwitchLanguage = () => {
  const { lang, setLang} = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border rounded-full p-1 shadow-lg ">
      <button
        onClick={() => setLang('en')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
          lang === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm '
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('de')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium  cursor-pointer transition-all duration-200 ${
          lang === 'de'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
    </div>
  );
};

export default SwitchLanguage;