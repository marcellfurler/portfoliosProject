import { useEffect, useState } from "react";
import "./WebDesign.css";

const designProjects = [
  {
    id: 1,
    title: "Rancangan Tugas Akhir Kuliah (Skripsi)",
    description: "Design plan for a final project project.",
    category: "Web Design",
    figmaUrl: "https://www.figma.com/design/08Un12UPyzhvfj1YxMJ7a2/Tugas-Akhir?node-id=0-1&t=guwWm0KVKkIyVYqa-1",
  },  
  {
    id: 2,
    title: "Re-Design E-Class UKDW",
    description: "UI/UX design for a mobile website application.",
    category: "Web Design",
    figmaUrl: "https://www.figma.com/design/vHEzTLwr9XXgdBAPz1vfMK/Untitled?node-id=0-1&t=dd9yxjw0LIJHVVrS-1",
  },
  {
    id: 3,
    title: "CALL CENTER DASHBOARD DAERAH ISTIMEWA YOGYAKARTA",
    description: "Visualization of call center data for the Special Region of Yogyakarta.",
    category: "Data Visualization",
    figmaUrl: "https://www.figma.com/design/XNhymaOrewgAaGJGcuf7qO/Visualisasi-Data?node-id=0-1&t=XGzCNY6uVqe3ywbH-1",
  },
  {
    id: 4,
    title: "Rancangan Magang",
    description: "Design plan for a intern project.",
    category: "Web Design",
    figmaUrl: "https://www.figma.com/design/GEKvtsZqcuCc4oRSwgUYLc/Rancangan-Magang?node-id=0-1&t=RSp0hLFgFZhXCqdb-1",
  },
  {
    id: 5,
    title: "Rancangan Game Design Game Ular Tangga",
    description: "Design plan for Snakes and Ladders game project.",
    category: "App/Game Design",
    figmaUrl: "https://www.figma.com/design/2ggzZvASWeKI0God3nbubv/Tugas-UTS-Desain-Game?node-id=0-1&t=c0IvhWhHPeEXGuLv-1",
  },
  {
    id: 6,
    title: "Rancangan Aplikasi Laundry Go",
    description: "Design plan for a laundry application project.",
    category: "App Design",
    figmaUrl: "https://www.figma.com/design/LYuDdKm7qKEzj25A92hUEy/Tugas-Desain-DEA?node-id=0-1&t=h9x0Neyyk8IcItn0-1",
  },
  {
    id: 7,
    title: "Rancangan Aplikasi Chat BOTI",
    description: "Design plan for a AI chat bot application project.",
    category: "App Design",
    figmaUrl: "https://www.figma.com/design/Qf8O75vkYV5bpW1oA6hnbW/Untitled?node-id=0-1&t=4Y33iU3cckF15j62-1",
  },
  {
    id: 8,
    title: "Re-Design E-Class UKDW - Human Computer Interaction",
    description: "Design plan for a mobile website application.",
    category: "App Design",
    figmaUrl: "https://www.figma.com/design/jelJN4LaUivj2n05zndX2R/IMK?node-id=0-1&t=y6xqCQy9lLD00LJ3-1",
  },
];

export default function WebDesign() {
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
        className="project-card project-secondary webdesign-trigger"
        onClick={() => setIsOpen(true)}
      >
        <div className="project-card-top">
          <span>02 - APP / WEB DESIGN</span>
          <span>↗</span>
        </div>

        <div className="project-visual web-design-visual">
          <img
            src={`${import.meta.env.BASE_URL}/assets/art.png`}
            alt="App / Web Design Icon"
            className="project-icon"
          />
        </div>

        <h4>Web Design Projects</h4>

        <p>
          Exploring UI/UX design through user-centered interfaces,
          thoughtful layouts, and interactive prototypes that
          create intuitive digital experiences.
        </p>

        <div className="project-tech">Figma</div>
      </button>

      {/* POPUP PROJECT LIST */}
      {isOpen && (
        <div
          className="webdesign-modal"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="webdesign-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Web Design Projects"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="webdesign-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close projects"
            >
              ×
            </button>

            <div className="webdesign-modal-header">
              <span>02 — APP / WEB DESIGN</span>
              <h2>Selected Designs</h2>
              <p>
                A collection of UI/UX explorations, interface designs,
                and interactive prototypes.
              </p>
            </div>

            <div className="webdesign-project-list">
              {designProjects.map((project) => (
                <article
                  className="webdesign-project-item"
                  key={project.id}
                >
                  <span className="webdesign-project-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  <div className="webdesign-project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <span className="webdesign-project-category">
                      {project.category}
                    </span>

                    <div className="webdesign-project-actions">
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        VIEW DESIGN ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="webdesign-modal-footer">
              <span>{designProjects.length} PROJECTS</span>
              <span>UI / UX DESIGN</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}