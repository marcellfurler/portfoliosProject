import { useEffect, useState } from "react";
import "./WebApp.css";

const webProjects = [
  {
    id: 1,
    title: "GPM Hymnbook",
    description:
      "Interactive hymnbook website with animated musical scores.",
    technologies: "React · JavaScript · LilyPond · Python",
    websiteUrl: "https://marcellfurler.github.io/nyanyianGPM/#/",
    // githubUrl: "https://github.com/username/repository",
  },
  {
    id: 2,
    title: "GKJ Wates Selatan",
    description:
      "Church information and congregation management website.",
    technologies: "React · Express · MySQL · Node.js",
    websiteUrl: "http://datajemaat.gkjwatesselatan.org/",
    // githubUrl: "https://github.com/username/repository",
  },
];

export default function WebApp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* KARTU PORTFOLIO */}
      <button
        type="button"
        className="project-card project-main webapp-trigger"
        onClick={() => setIsOpen(true)}
      >
        <div className="project-card-top">
          <span>01 - WEB APPLICATION</span>
          <span>↗</span>
        </div>

        <div className="project-visual web-app-visual">
          <img
            src="./public/assets/internet.png"
            alt="Web Application Projects Icon"
            className="project-icon"
          />
        </div>

        <h4>Web Application Projects</h4>

        <p>
          Project collection of web applications focused on
          interactive experiences, user-friendly interfaces,
          and practical digital solutions.
        </p>

        <div className="project-tech">
          React · JavaScript · LilyPond · Node.js · Express · MySQL · Python
        </div>
      </button>

      {/* POPUP DAFTAR PROYEK */}
      {isOpen && (
        <div
          className="webapp-modal"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="webapp-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Web Application Projects"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="webapp-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close projects"
            >
              ×
            </button>

            <div className="webapp-modal-header">
              <span>01 — WEB APPLICATION</span>
              <h2>Selected Projects</h2>
              <p>
                A collection of web applications and digital solutions.
              </p>
            </div>

            <div className="webapp-project-list">
              {webProjects.map((project) => (
                <article
                  className="webapp-project-item"
                  key={project.id}
                >
                  <span className="webapp-project-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <div className="webapp-project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="webapp-project-tech">
                      {project.technologies}
                    </div>

                    <div className="webapp-project-links">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          VISIT WEBSITE ↗
                        </a>
                      )}

                      {/* {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          GITHUB ↗
                        </a>
                      )} */}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="webapp-modal-footer">
              <span>{webProjects.length} PROJECTS</span>
              <span>WEB DEVELOPMENT</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}