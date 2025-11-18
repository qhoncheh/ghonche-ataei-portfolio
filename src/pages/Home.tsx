import AboutMe from "../components/about/AboutMe";
import BackToTop from "../components/back-to-top/BackTop";
import { StarBackground } from "../components/background/StarBackground";
import Contact from "../components/Contact/contact";
import Footer from "../components/footer/footer";
import HeroSection from "../components/Hero/HeroSection";
import { LanguageProvider } from "../components/language/LanguageContext";
import Navbar from "../components/Navbar/Navbar";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Skills from "../components/Skills/skills";

const Home = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutMe />
          <Skills /> 
          <ProjectSection />
          <Contact />
          <Footer />
        </main>
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Home;
