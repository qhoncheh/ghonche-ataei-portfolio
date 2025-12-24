import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { ThemeToggle } from "../background/ThemeToggle";
import SwitchLanguage from "../language/SwitchLanguageButton";

const Navbar = () => {
    const { t, lang, setLang } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const navItems = [
        { name: t("home"), href: "#hero" },
        { name: t("about"), href: "#about" },
        { name: t("skills"), href: "#skills" },
        { name: t("projects"), href: "#projects" },
        { name: t("contact"), href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    href="#hero"
                    className="md:text-xl text-xs font-bold text-primary flex gap-16 items-center"
                >
                  
                    <SwitchLanguage />
                      <ThemeToggle />
                        <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Ghonche Ataei
                        </span>{" "}
                        Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}

                
                </div>

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col text-xl space-y-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <button
                            onClick={() => setLang(lang === "en" ? "de" : "en")}
                            className="text-primary underline mt-6"
                        >
                            {t("switchLang")}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
