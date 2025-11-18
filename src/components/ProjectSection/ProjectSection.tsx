import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "./projects-array";
import { useLanguage } from "../language/LanguageContext";

const ProjectSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Title */}
        <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
          <span className="">{t("featuredProjects").split(" ")[0]}</span>{" "}
          <span className="text-primary">
            {t("featuredProjects").split(" ")[1]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("projectsSubtitle")}
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary/foreground"
                    >
                      {t(tag.toLowerCase())}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {t(project.title)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs pb-2">
                  {t(project.description)}
                </p>

                {/* Links */}
                <div className="flex justify-start items-center space-x-3 mt-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/qhoncheh"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center gap-2 mx-auto"
          >
            {t("checkMyGithub")} <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
