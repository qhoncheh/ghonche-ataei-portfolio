import  { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "de";

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  en: {
    hello: "Hello, I am",
    name: "Ghoncheh Ataei",
    bio: "I create stellar web experiences with modern technologies. Specializing in front-end development, I build responsive and user-friendly websites and applications.",

    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    portfolio: "Portfolio",

    // About
    aboutMeTitle: "About Me",
    passionateTitle: "Passionate Web Developer & Tech Creator",
    aboutP1:
      "With over 4 years of experience in building dynamic and responsive websites, I specialize in creating seamless user experiences and innovative digital solutions.",
    aboutP2:
      "I'm passionate about leveraging technology to solve real-world problems and continuously learning to stay ahead in the ever-evolving tech landscape.",
    getInTouch: "Get In Touch",
    downloadCV: "Download CV",

    // Skills
    webDevTitle: "Web Development",
    webDevDesc:
      "Creating responsive websites and web applications with modern frameworks.",
    uiuxTitle: "UI/UX Design",
    uiuxDesc:
      "Designing intuitive user interfaces and seamless user experiences.",
    projectMgmtTitle: "Project Management",
    projectMgmtDesc:
      "Managing projects efficiently to ensure timely delivery and quality outcomes.",
    mySkills: "My Skills",
    frontend: "Frontend",
    tools: "Tools",

    GetIn: "Get In",
    Touch: "Touch",

    contactSubtitle:
      "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.",
    ContactInformation: "Contact Information",
    Email: "Email",
    Phone: "Phone",
    Location: "Location",
    ConnectWithMe: "Connect With Me",
    SendaMessage: "Send a Message",
    YourName: "Your Name",
    YourEmail: "Your Email",
    YourMessage: "Your Message",
    Enteryourname: "Ghoncheh Ataei",
    Enteryouremail: "john@example.com",
    Writeyourmessagehere: "Hello, I'd like to talk about...",
    SendMessage: "Send Message",
    Sending: "Sending...",
    ThankyouYourmessagehasbeensent: "Thank you! Your message has been sent.",
    Illgetbacktoyouassoonaspossible:
      "I'll get back to you as soon as possible.",

    // Projects Section
    featuredProjects: "Featured Projects",
    projectsSubtitle:
      "Here are some of my recent projects carefully created with attention to detail, performance, and user experience.",
    checkMyGithub: "Check My Github",

    // Tags
    react: "React",
    tailwind: "Tailwind CSS",
    typescript: "TypeScript",
//footer
allRightsReserved: "All rights reserved.",
    // Project Titles / Descriptions
    project1_title: "Pizza Landing Page",
    project1_description:
      "A beautiful landing page app using React, TypeScript and Tailwind CSS.",
    project2_title: "Pizza Landing Page",
    project2_description:
      "A beautiful landing page app using React, TypeScript and Tailwind CSS.",
    project3_title: "Pizza Landing Page",
    project3_description:
      "A beautiful landing page app using React, TypeScript and Tailwind CSS.",
    project4_title: "Pizza Landing Page",
    project4_description:
      "A beautiful landing page app using React, TypeScript and Tailwind CSS.",
  },

  // ---------------------- GERMAN -------------------

  de: {
    hello: "Hallo, ich bin",
    name: "Ghoncheh Ataei",
    bio: "Ich erschaffe außergewöhnliche Web-Erlebnisse mit modernen Technologien. Ich bin auf Frontend-Entwicklung spezialisiert und erstelle responsive und benutzerfreundliche Websites und Anwendungen.",

    home: "Start",
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",
    portfolio: "Portfolio",

    // About
    aboutMeTitle: "Über mich",
    passionateTitle: "Leidenschaftliche Webentwicklerin & Tech Creator",
    aboutP1:
      "Mit über 4 Jahren Erfahrung in der Erstellung dynamischer und responsiver Websites spezialisiere ich mich auf nahtlose Benutzererlebnisse und innovative digitale Lösungen.",
    aboutP2:
      "Ich liebe es, Technologie einzusetzen, um reale Probleme zu lösen, und lerne kontinuierlich weiter, um in der sich ständig entwickelnden Technologiewelt voraus zu sein.",
    getInTouch: "Kontakt aufnehmen",
    downloadCV: "Lebenslauf herunterladen",

    // Skills
    webDevTitle: "Webentwicklung",
    webDevDesc:
      "Erstellung responsiver Websites und Webanwendungen mit modernen Frameworks.",
    uiuxTitle: "UI/UX Design",
    uiuxDesc:
      "Gestaltung intuitiver Benutzeroberflächen und nahtloser Nutzererlebnisse.",
    projectMgmtTitle: "Projektmanagement",
    projectMgmtDesc:
      "Effiziente Projektleitung zur termingerechten und hochwertigen Umsetzung.",
    mySkills: "Meine Fähigkeiten",
    frontend: "Frontend",
    tools: "Werkzeuge",
    all: "Alle",
    //Footer 
    allRightsReserved: "Alle Rechte vorbehalten.",
    // Projects
    featuredProjects: "Ausgewählte Projekte",
    projectsSubtitle:
      "Hier sind einige meiner neuesten Projekte, die mit Liebe zum Detail, Leistung und Benutzererfahrung erstellt wurden.",
    checkMyGithub: "Mein GitHub ansehen",

    GetIn: "Kontakt",
    Touch: "aufnehmen",

    contactSubtitle:
      "Hast du ein Projekt im Kopf oder möchtest du zusammenarbeiten? Melde dich gerne. Ich bin immer offen für neue Ideen und Möglichkeiten.",
    ContactInformation: "Kontaktinformationen",
    Email: "E-Mail",
    Phone: "Telefon",
    Location: "Standort",
    ConnectWithMe: "Verbinde dich mit mir",
    SendaMessage: "Nachricht senden",
    YourName: "Dein Name",
    YourEmail: "Deine E-Mail",
    YourMessage: "Deine Nachricht",
    Enteryourname: "Ghoncheh Ataei",
    Enteryouremail: "ghonche.ataee@example.com",
    Writeyourmessagehere: "Hallo, ich würde gerne über...",
    SendMessage: "Nachricht senden",
    Sending: "Wird gesendet...",
    ThankyouYourmessagehasbeensent:
      "Vielen Dank! Deine Nachricht wurde gesendet.",
    Illgetbacktoyouassoonaspossible:
      "Ich melde mich schnellstmöglich bei dir.",

    // Tags
    react: "React",
    tailwind: "Tailwind CSS",
    typescript: "TypeScript",

    // Project Titles / Descriptions
    project1_title: "Pizza Landing Page",
    project1_description:
      "Eine schöne Landingpage-App mit React, TypeScript und Tailwind CSS.",
    project2_title: "Pizza Landing Page",
    project2_description:
      "Eine schöne Landingpage-App mit React, TypeScript und Tailwind CSS.",
    project3_title: "Pizza Landing Page",
    project3_description:
      "Eine schöne Landingpage-App mit React, TypeScript und Tailwind CSS.",
    project4_title: "Pizza Landing Page",
    project4_description:
      "Eine schöne Landingpage-App mit React, TypeScript und Tailwind CSS.",
  },
};


interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: () => "",
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
