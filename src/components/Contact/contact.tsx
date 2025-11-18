import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "../../lib/utils";
import { useLanguage } from "../language/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("GetIn")} <span className="text-primary">{t("Touch")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contactSubtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{t("ContactInformation")}</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{t("Email")}</h4>
                  <a
                    href="mailto:ghonche.ataee@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    ghonche.ataee@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{t("Phone")}</h4>
                  <a
                    href="tel:+989359312592"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +98 (935) 931-2592
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-foreground">{t("Location")}</h4>
                  <p className="text-muted-foreground">Iran, Mazandaran, Babol</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("ConnectWithMe")}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ghonche-ataei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com/ghoncheh.ataei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
            <h3 className="text-2xl font-semibold mb-6">{t("SendaMessage")}</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-500 font-medium text-lg">
                  {t("ThankyouYourmessagehasbeensent")}
                </div>
                {/* <p className="text-muted-foreground mt-2">
                  {t("IllGetBackToYouAsSoonAsPossible")}
                </p> */}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t("YourName")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder={t("Enteryourname")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t("YourEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder={t("Enteryouremail")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("YourMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    placeholder={t("Writeyourmessagehere")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex justify-center items-center gap-2 transition-all",
                    isSubmitting && "opacity-70 cursor-pointer"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      {t("Sending")}
                    </>
                  ) : (
                    <>
                      {t("SendMessage")}
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
