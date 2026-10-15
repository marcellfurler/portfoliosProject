
import { useEffect, useState } from "react";
import "./experiences.css";

const experiences = [
  {
    id: 1,
    category: "INTERNATIONAL PROGRAM",
    date: "May 2026",
    title: "Global Education Experiences (GlobEES)",
    subtitle:
      "Local Action for Environmental Sustainability: Learning Together in Taiwan",
    place: "Chang Jung Christian University · Taiwan",
    description:
      "Participated in an international collaborative program focused on environmental sustainability, cross-cultural learning, academic activities, workshops, and cultural exchange.",
    cover: "src/assets/5.experiences/globees/glo1.JPG",
    photos: [
      "src/assets/5.experiences/globees/glo1.JPG",
      "src/assets/5.experiences/globees/glo2.JPG",
      "src/assets/5.experiences/globees/glo3.JPG",
      "src/assets/5.experiences/globees/glo4.JPG",
    ],
    color: "beige",
  },

  {
    id: 2,
    category: "COMPETITION",
    date: "Oktober 2025",
    title: "5th International Bandung Choral Festival 2025",
    subtitle: "International Choral Competition",
    place: "Parahyangan Catholic University, Bandung",
    description:
      "Participated in the 5th International Bandung Choral Festival (IBCF) 2025, competing in three categories: Mixed Choir Category – 2nd Place (Gold Medal), Folklore Category – 2nd Place (Gold Medal), and Pop & Jazz Category – 5th Place (Gold Medal), demonstrating musical excellence, teamwork, and artistic versatility.",
    cover: "src/assets/5.experiences/dv-ibcf/ibcf1.jpg",
    photos: [
      "src/assets/5.experiences/dv-ibcf/ibcf1.jpg",
      "src/assets/5.experiences/dv-ibcf/ibcf2.jpg",
      "src/assets/5.experiences/dv-ibcf/ibcf3.jpg",
      "src/assets/5.experiences/dv-ibcf/ibcf4.JPG",
      "src/assets/5.experiences/dv-ibcf/ibcf5.jpg",
      "src/assets/5.experiences/dv-ibcf/ibcf6.JPG",
    ],
    color: "green",
  },

  {
    id: 3,
    category: "COMPETITION",
    date: "February 2025",
    title: "Festival Swara Saraswati II",
    subtitle: "National Choral Competition",
    place: "Indonesian Institute of the Arts, Yogyakarta",
    description:
      "Participated in the Festival Swara Saraswati II  National Choir Festival, competing in two categories: Mixed Choir Category – Gold Medal and Folklore Category – Gold Medal, demonstrating musical excellence, teamwork, and artistic versatility.",
    cover: "src/assets/5.experiences/dv-fss/fss1.jpg",
    photos: [
      "src/assets/5.experiences/dv-fss/fss1.jpg",
      "src/assets/5.experiences/dv-fss/fss2.JPG",
      "src/assets/5.experiences/dv-fss/fss3.jpg",
      "src/assets/5.experiences/dv-fss/fss4.JPG",
      "src/assets/5.experiences/dv-fss/fss5.JPG",
      "src/assets/5.experiences/dv-fss/fss6.JPG",
      "src/assets/5.experiences/dv-fss/fss7.JPG",
      "src/assets/5.experiences/dv-fss/fss8.JPG",
    ],
    color: "blue",
  },

  {
    id: 4,
    category: "COMPETITION",
    date: "November 2024",
    title: "3rd Soegijapranata International Choir Competition 2024",
    subtitle: "International Choral Competition",
    place: "Soegijapranata Catholic University, Semarang",
    description:
      "Participated in the 3rd Soegijapranata International Choir Competition 2024, competing in two categories: Mixed Choir Category – Gold Medal, Folklore Category – Gold Medal, demonstrating musical excellence, teamwork, and artistic versatility.",
    cover: "src/assets/5.experiences/dv-sicc/sicc1.JPG",
    photos: [
      "src/assets/5.experiences/dv-sicc/sicc1.JPG",
      "src/assets/5.experiences/dv-sicc/sicc2.JPG",
      "src/assets/5.experiences/dv-sicc/sicc3.jpg",
      "src/assets/5.experiences/dv-sicc/sicc4.JPG",
      "src/assets/5.experiences/dv-sicc/sicc5.jpg",
    ],
    color: "pink",
  },
  {
    id: 5,
    category: "COMMUNITY SERVICE",
    date: "May 2024 — Aug 2024",
    title: "Thematic Community Service Program on STEM 2024",
    subtitle: "AI and Machine Learning, Collaboration with The Hong Kong Polytechnic University",
    place: "Yogyakarta, Indonesia",
    description:
      "Collaborated with Indonesian students and peers from PolyU, Hong Kong to deliver basic STEM education programs for elementary and high school students.",
    cover: "src/assets/5.experiences/kkn/kkn1.jpg",
    photos: [
      "src/assets/5.experiences/kkn/kkn1.jpg",      
      "src/assets/5.experiences/kkn/kkn2.jpg",
      "src/assets/5.experiences/kkn/kkn3.jpg",
      "src/assets/5.experiences/kkn/kkn4.jpg",
      "src/assets/5.experiences/kkn/kkn5.jpg",
      "src/assets/5.experiences/kkn/kkn6.jpg",
      "src/assets/5.experiences/kkn/kkn7.jpg",
      "src/assets/5.experiences/kkn/kkn8.jpg",
    ],
    color: "yellow",
  },
  {
    id: 6,
    category: "STUDENT LEADERSHIP",
    date: "September 2024",
    title: "FTI Camp Student Facilitator 2024",
    subtitle: "FTI Camp 2024 | Embracing Cultural Diversity: Understanding, Respecting, and Celebrating Our Differences",
    place: "Faculty of Information Technology · UKDW",
    description:
      "Served as a student facilitator for new students during orientation events hosted by the Faculty of Information Technology.",
    cover: "src/assets/5.experiences/fticamp24/fticamp24-1.JPG",
    photos: [
      "src/assets/5.experiences/fticamp24/fticamp24-1.JPG",
      "src/assets/5.experiences/fticamp24/fticamp24-2.png",
      "src/assets/5.experiences/fticamp24/fticamp24-3.JPG",
      "src/assets/5.experiences/fticamp24/fticamp24-4.JPG",
      "src/assets/5.experiences/fticamp24/fticamp24-5.JPG",
      "src/assets/5.experiences/fticamp24/fticamp24-6.png",
      "src/assets/5.experiences/fticamp24/fticamp24-7.png",
    ],
    color: "purple",
  },

  {
    id: 7,
    category: "STUDENT LEADERSHIP",
    date: "September 2024",
    title: "FTI GO Student Facilitator 2024",
    subtitle: "FTI GO 2024",
    place: "Faculty of Information Technology · UKDW",
    description:
      "Served as a student facilitator for new students during orientation events hosted by the Faculty of Information Technology.",
    cover: "src/assets/5.experiences/ftigo24/ftigo1.JPG",
    photos: [
      "src/assets/5.experiences/ftigo24/ftigo1.JPG",
      "src/assets/5.experiences/ftigo24/ftigo2.JPG",
      "src/assets/5.experiences/ftigo24/ftigo3.JPG",
    ],
    color: "green",
  },

  {
    id: 8,
    category: "STUDENT LEADERSHIP",
    date: "Augustus 2023",
    title: "FTI Camp Student Facilitator 2023",
    subtitle: "FTI Camp 2023 | One Dream a Thousand Hopes",
    place: "Faculty of Information Technology · UKDW",
    description:
      "Served as a student facilitator for new students during orientation events hosted by the Faculty of Information Technology.",
    cover: "src/assets/5.experiences/fticamp23/fticamp23-1.JPG",
    photos: [
      "src/assets/5.experiences/fticamp23/fticamp23-1.JPG",
      "src/assets/5.experiences/fticamp23/fticamp23-2.JPG",
      "src/assets/5.experiences/fticamp23/fticamp23-3.JPG",
      "src/assets/5.experiences/fticamp23/fticamp23-4.JPG",
      "src/assets/5.experiences/fticamp23/fticamp23-5.JPG",
      "src/assets/5.experiences/fticamp23/fticamp23-6.jpg",
      "src/assets/5.experiences/fticamp23/fticamp23-7.JPG",      
    ],
    color: "blue",
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const openGallery = (experience) => {
    setSelectedExperience(experience);
    setActivePhoto(0);
  };

  const closeGallery = () => {
    setSelectedExperience(null);
    setActivePhoto(0);
  };

  const nextPhoto = () => {
    setActivePhoto((current) =>
      (current + 1) % selectedExperience.photos.length
    );
  };

  const previousPhoto = () => {
    setActivePhoto((current) =>
      (current - 1 + selectedExperience.photos.length) %
      selectedExperience.photos.length
    );
  };

  useEffect(() => {
    if (!selectedExperience) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextPhoto();
      if (event.key === "ArrowLeft") previousPhoto();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedExperience, activePhoto]);

  return (
    <>
      <section className="experience-section">
        <div className="section-label">05 — Experience</div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <button
              type="button"
              className={`experience-card ${experience.color}`}
              key={experience.id}
              onClick={() => openGallery(experience)}
              aria-label={`View photos of ${experience.title}`}
            >
              <div className="experience-cover">
                <img
                  src={experience.cover}
                  alt={experience.title}
                  loading="lazy"
                />

                <span className="experience-open">
                  VIEW PROJECT ↗
                </span>

                <span className="experience-card-number">
                  {String(experience.id).padStart(2, "0")}
                </span>
              </div>

              <div className="experience-card-content">
                <div className="experience-card-meta">
                  <span>{experience.category}</span>
                  <span>{experience.date}</span>
                </div>

                <h3>{experience.title}</h3>
                <p className="experience-subtitle">
                  {experience.subtitle}
                </p>

                <div className="experience-card-footer">
                  <span>{experience.place}</span>
                  <span className="experience-arrow">↗</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedExperience && (
        <div
          className="experience-modal"
          onClick={closeGallery}
        >
          <div
            className="experience-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={selectedExperience.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="experience-modal-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="experience-modal-gallery">
              <img
                src={selectedExperience.photos[activePhoto]}
                alt={`${selectedExperience.title} — photo ${activePhoto + 1}`}
              />

              {selectedExperience.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    className="gallery-arrow gallery-previous"
                    onClick={previousPhoto}
                    aria-label="Previous photo"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    className="gallery-arrow gallery-next"
                    onClick={nextPhoto}
                    aria-label="Next photo"
                  >
                    →
                  </button>

                  <span className="gallery-counter">
                    {String(activePhoto + 1).padStart(2, "0")} /
                    {" "}
                    {String(selectedExperience.photos.length).padStart(2, "0")}
                  </span>
                </>
              )}
            </div>

            <div className="experience-modal-info">
              <p className="experience-modal-category">
                {selectedExperience.category} · {selectedExperience.date}
              </p>

              <h2>{selectedExperience.title}</h2>
              <h3>{selectedExperience.subtitle}</h3>

              <p className="experience-modal-description">
                {selectedExperience.description}
              </p>

              <p className="experience-modal-place">
                {selectedExperience.place}
              </p>

              <div className="experience-thumbnails">
                {selectedExperience.photos.map((photo, index) => (
                  <button
                    type="button"
                    key={photo}
                    className={
                      activePhoto === index
                        ? "experience-thumbnail active"
                        : "experience-thumbnail"
                    }
                    onClick={() => setActivePhoto(index)}
                    aria-label={`View photo ${index + 1}`}
                  >
                    <img src={photo} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
