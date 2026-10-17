import { useRef } from "react";
import "./App.css";
import ell from "/public/assets/ell.jpg";
import Experiences from "./components/experiences.jsx";
import { Link } from "react-router-dom";
import WebApp from "./components/WebApp";
import WebDesign from "./components/WebDesign";

function Home() {
  const portfolioRef = useRef(null);

  const enterPortfolio = () => {
    portfolioRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpeningWheel = (event) => {
    if (event.deltaY > 0) {
      enterPortfolio();
    }
  };

  return (
    <main>
      {/* PORTFOLIO BOOK */}
      <div ref={portfolioRef} className="book">

        {/* HEADER */}
        <header className="book-header">

          <div className="header-title">
            <h1>portfolio</h1>
            <span className="header-dot">.</span>
          </div>

          <div className="floating-tags">
            <span className="tag pink">web design</span>
            <span className="tag green">creative developer</span>
            <span className="tag yellow">music</span>
            <span className="tag blue">UI / UX</span>
          </div>

        </header>

        {/* ABOUT */}
        
        <section className="about-layout">
          <span className="section-label">01 — ABOUT ME</span>
          <div className="">
            

            <p>
              Hello! I'm Marcell, an Informatics student with a strong interest in UI/UX Design, Frontend Development, Web Development, and Music. 
              
            </p>

            <p>
              Eager to combine technical expertise, 
              creative thinking, and analytical skills to design intuitive user experiences, 
              develop responsive web interfaces, and deliver effective digital solutions. 
              Demonstrates strong collaboration, problem-solving, and adaptability skills, 
              with a passion for continuous learning and exploring innovative ideas across technology and creative fields.
            </p>

            
          </div>

          <div className="profile-card">
            <div className="profile-photo">
              <img
                src={ell}
                alt="Foto profil Marcell"
                className="img-fluid w-100"
              />
            </div>

            <h3>Marcell Jureinwi Manuhutu</h3>

            <p>Informatics · Music · Creative · Developer · Choir · Songwriter</p>

          </div>
        </section>



        {/* work */}
        
        {/* WORK EXPERIENCE */}
        <section className="organization-section work-experience-section">
          <div className="section-label">
            02 — Work Experience
          </div>

          <div className="organization-list">

            {/* Work Experience 1 */}
            <article
              className="organization-item"
              style={{
                "--org-bg": `url(${import.meta.env.BASE_URL}assets/2.work_experience/ppbukdw.jpg)`
              }}
            >
              <div className="organization-date">
                March 2024 — May 2026
              </div>

              <div className="organization-info">
                <h3>Student Staff</h3>
                <h4>Pusat Pelatihan Bahasa, UKDW</h4>
                <p>
                  Prepared daily teaching materials and classroom setups
                  for regular sessions and examinations. Welcomed visitors,
                  coordinated with lecturers, and assisted with administrative
                  and communication tasks.
                </p>
              </div>

              <span className="organization-number">01</span>
            </article>

            {/* Work Experience 2 */}
            <article
              className="organization-item"
              style={{
                "--org-bg": `url(${import.meta.env.BASE_URL}assets/2.work_experience/gkjwatesselatan.png)`
              }}
            >
              <div className="organization-date">
                September 2025 — January 2026
              </div>

              <div className="organization-info">
                <h3>Web Developer Intern</h3>
                <h4>GKJ Wates Selatan, Wates, D.I. Yogyakarta</h4>
                <p>
                  Contributed to the development of a church website using
                  React.js, Vite, Express.js, and MySQL. Developed features
                  for authentication, data management, and administrative
                  interfaces, with a focus on usability and responsive design.
                </p>
              </div>

              <span className="organization-number">02</span>
            </article>

          </div>
        </section>




        {/* PROJECTS */}
        <section className="projects-section">
          <div className="section-label">03 — PROJECTS</div>

          {/* <div className="project-intro">
            <h2>
              projects
              perso<span>nal</span>
            </h2>
          </div> */}

          <div className="projects-grid">

            <WebApp />

            <WebDesign/>


            <Link
            to="/creativity"
            className="project-card project-small"
            >
            <div className="project-card-top">
                <span>03 - ARTS AND CREATIVITY</span>
                <span>↗</span>
            </div>

            <div className="project-visual arts-visual">
                <img
                src={`${import.meta.env.BASE_URL}/assets/song.png`}
                alt="Arts and Creativity Icon"
                className="project-icon"
                />
            </div>

            <h4>Arts & Creativity</h4>

            <p>
                Exploring musical creativity through choral performance,
                vocal direction, songwriting, and original compositions.
            </p>

            <div className="project-tech">
                Music · Choir · Composition
            </div>
            </Link>



          </div>
        </section>

        {/* ORGANIZATION */}

        {/* ORGANIZATION */}
        <section className="organization-section">
          <div className="section-label">
            04 — Organization
          </div>

          <div className="organization-list">

            {/* Organization 1 */}
            <article
              className="organization-item"
              style={{
                "--org-bg": `url(${import.meta.env.BASE_URL}assets/4.organization/duta-voice.jpg)`
              }}
            >
              <div className="organization-date">
                Feb 2025 — Feb 2026
              </div>

              <div className="organization-info">
                <h3>Vice President</h3>
                <h4>Duta Voice Student Choir · UKDW</h4>
                <p>
                  Supported leadership and internal coordination
                  of choir activities, while maintaining member
                  engagement and group cohesion.
                </p>
              </div>

              <span className="organization-number">01</span>
            </article>

            {/* Organization 2 */}
            <article
              className="organization-item"
              style={{
                "--org-bg": `url(${import.meta.env.BASE_URL}assets/4.organization/duta-voice2.JPG)`
              }}
            >
              <div className="organization-date">
                Mar 2023 — Feb 2025
              </div>

              <div className="organization-info">
                <h3>Head Tenor Coach</h3>
                <h4>Duta Voice Student Choir · UKDW</h4>
                <p>
                  Led sectional rehearsals for tenor singers,
                  refined vocal techniques and harmonies,
                  and provided vocal training for new members.
                </p>
              </div>

              <span className="organization-number">02</span>
            </article>

            {/* Organization 3 */}
            <article
              className="organization-item"
              style={{
                "--org-bg": `url(${import.meta.env.BASE_URL}assets/4.organization/salawaku.JPG)`
              }}
            >
              <div className="organization-date">
                Feb 2023 — Jan 2024
              </div>

              <div className="organization-info">
                <h3>Secretariat</h3>
                <h4>SALAWAKU Cultural Activity Unit · UKDW</h4>
                <p>
                  Maintained and organized inventory records
                  of equipment and cultural assets within
                  the organization.
                </p>
              </div>

              <span className="organization-number">03</span>
            </article>

          </div>
        </section>


        {/* EXPERIENCE */}
        <Experiences />




        
        {/* AWARDS */}
        <section className="awards-section">
          <div className="section-label">
            06 — Awards
          </div>

          <div className="awards-list">

            {/* Award 1 — IBCF */}
            <article
              className="award-item"
              style={{
                "--award-bg": `url(${import.meta.env.BASE_URL}assets/5.experiences/dv-ibcf/ibcf5.jpg)`
              }}
            >
              <div className="award-date">
                2025
              </div>

              <div className="award-info">
                <h3>5th International Bandung Choral Festival</h3>
                <h4>5thIBCF 2025 · International Choir Competition</h4>

                <p>
                  Competed in three categories: Mixed Category, achieving 2nd Place with a Gold Medal; Folklore Category, achieving 2nd Place with a Gold Medal; and Pop & Jazz Category, achieving 5th Place with a Gold Medal.
                </p>

                <div className="award-links">
                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/ibcf/ibcfmixed.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Mixed Category Certificate <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/ibcf/ibcffolk.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Folklore Category Certificate <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/ibcf/ibcfpopnjazz.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Pop & Jazz Category Certificate <span>↗</span>
                  </a>
                </div>
              </div>

              <span className="award-number">01</span>
            </article>

            {/* Award 2 — Festival Swara Saraswati II */}
            <article
              className="award-item"
              style={{
                "--award-bg": `url(${import.meta.env.BASE_URL}assets/5.experiences/dv-fss/fss3.jpg)`
              }}
            >
              <div className="award-date">
                2025
              </div>

              <div className="award-info">
                <h3>Festival Swara Saraswati II</h3>
                <h4>FSSII · National Choir Competition</h4>

                <p>
                  Competed in two categories, Mixed Category and Folklore Category, earning Gold Medals in both categories.
                </p>

                <div className="award-links">
                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/fss/fssmixed.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Mixed Category Certificate <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/fss/fssfolk.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Folklore Category Certificate <span>↗</span>
                  </a>
                </div>
              </div>

              <span className="award-number">02</span>
            </article>

            {/* Award 3 — Festival Swara Saraswati II */}
            <article
              className="award-item"
              style={{
                "--award-bg": `url(${import.meta.env.BASE_URL}assets/5.experiences/dv-sicc/sicc2.JPG)`
              }}
            >
              <div className="award-date">
                2024
              </div>

              <div className="award-info">
                <h3>3rd Soegijapranata International Choir Competition 2024</h3>
                <h4>3rdSICC · International Choir Competition</h4>

                <p>
                  Competed in two categories, Mixed Category and Folklore Category, earning Gold Medals in both categories.
                </p>

                <div className="award-links">
                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/sicc/siccmixed.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Mixed Category Certificate <span>↗</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}assets/6.awards/sicc/siccfolklore.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-link"
                  >
                    Folklore Category Certificate <span>↗</span>
                  </a>
                </div>
              </div>

              <span className="award-number">03</span>
            </article>

          </div>
        </section>




        
        
        {/* CERTIFICATION AND TRAINING */}
        <section className="certification-section">
          <div className="section-label">
            07 — Certification and Training
          </div>

          <div className="certification-list">

            {/* Certification 1 */}
            <article className="certification-item">
              <div className="certification-date">
                11 APR 2026
              </div>

              <div className="certification-info">
                <span className="certification-type">
                  CERTIFICATION
                </span>
                <h3>Information Technology Specialist in HTML and CSS</h3>
                <p>Certiport</p>
              </div>

              <a
                className="certification-link"
                href={`${import.meta.env.BASE_URL}assets/7.certificate/1.it-spesialist.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View HTML and CSS certificate"
              >
                VIEW CERTIFICATE <span>↗</span>
              </a>
            </article>

            {/* Training 1 */}
            <article className="certification-item">
              <div className="certification-date">
                15 DEC 2025
              </div>

              <div className="certification-info">
                <span className="certification-type">
                  TRAINING
                </span>
                <h3>SAP01 — SAP Overview</h3>
                <p>SAP Partner · edugate</p>
              </div>

              <a
                className="certification-link"
                href={`${import.meta.env.BASE_URL}assets/7.certificate/2.sap.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View SAP Overview certificate"
              >
                VIEW CERTIFICATE <span>↗</span>
              </a>
            </article>

            {/* Training 3 */}
            <article className="certification-item">
              <div className="certification-date">
                31 MAY 2024
              </div>

              <div className="certification-info">
                <span className="certification-type">
                  TRAINING
                </span>
                <h3>Java Foundations</h3>
                <p>Oracle Academy</p>
              </div>

              <a
                className="certification-link"
                href={`${import.meta.env.BASE_URL}assets/7.certificate/4.Foundations.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Java Foundations certificate"
              >
                VIEW CERTIFICATE <span>↗</span>
              </a>
            </article>

            {/* Training 2 */}
            <article className="certification-item">
              <div className="certification-date">
                15 MAY 2024
              </div>

              <div className="certification-info">
                <span className="certification-type">
                  TRAINING
                </span>
                <h3>Java Programming</h3>
                <p>Oracle Academy</p>
              </div>

              <a
                className="certification-link"
                href={`${import.meta.env.BASE_URL}assets/7.certificate/3.Programming.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Java Programming certificate"
              >
                VIEW CERTIFICATE <span>↗</span>
              </a>
            </article>

            

          </div>
        </section>





        {/* SKILLS */}
        <section className="skills-section">
          <div className="section-label">08 — MY SKILLS</div>

          <div className="skill-tags">
            <span className="skill-tag pink">web development</span>
            <span className="skill-tag blue">UI / UX design</span>
            <span className="skill-tag yellow">React</span>
            <span className="skill-tag green">JavaScript</span>
            <span className="skill-tag purple">Node.js</span>
            <span className="skill-tag orange">music</span>
            <span className="skill-tag pink">choir</span>
            <span className="skill-tag blue">songwriting</span>
          </div>

          <div className="skills-grid">
            <div className="skill-box pink-bg">
                <span>01</span>

              {/* <div> */}
                <h3>DEVELOPMENT</h3>

                <div className="skill-subsection">
                  <h6>Programming Languages</h6>
                  <p>JavaScript · HTML · CSS · PHP · Python · SQL · LilyPond</p>
                </div>

                <div className="skill-subsection">
                  <h6>Frameworks & Runtime</h6>
                  <p>React · Bootstrap · Node.js · Express</p>
                </div>

                <div className="skill-subsection">
                  <h6>Database</h6>
                  <p>MySQL</p>
                </div>
              {/* </div> */}
            </div>


            <div className="skill-box blue-bg">
              <span>02</span>
              <div>
                <h3>DESIGN</h3>

                <div className="skill-subsection">
                  <h4>UI / UX Design</h4>
                  <p>User Research · Goal Directed Design · User-Centered Design</p>
                </div>

                <div className="skill-subsection">
                  <h4>Interface Design</h4>
                  <p>Web Design · Layout · Typography</p>
                </div>

                <div className="skill-subsection">
                  <h4>Prototyping</h4>
                  <p>Wireframing · Interactive Prototypes · Figma</p>
                </div>
              </div>
            </div>


            <div className="skill-box yellow-bg">
              <span>03</span>
              <div>
                <h3>MUSIC</h3>

                <div className="skill-subsection">
                  <h4>Music Performance</h4>
                  <p>Choir · Vocal Performance · Music Production · Conducting</p>
                </div>

                <div className="skill-subsection">
                  <h4>Music Creation</h4>
                  <p>Songwriting · Composition · Arrangement</p>
                </div>

                <div className="skill-subsection">
                  <h4>Music Tools</h4>
                  <p>Musecore · LilyPond</p>
                </div>

                
              </div>
            </div>
          </div>

        </section>

        {/* CONTACT */}
        <section className="contact-section">
          <div className="section-label">09 — CONTACT</div>

          <h2>
            let's create
            <br />
            something
            <br />
            <span>together.</span>
          </h2>

          <div className="contact-links">
            <a href="mailto:marcellfurler2005@gmail.com" target="_blank">
              send me something :D (email)
            </a>

            <a href="https://wa.me/6281248890655" target="_blank">
              send me something :D (whatsapp)
            </a>

            <a href="https://github.com/marcellfurler" target="_blank">
              look my projects (github)
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="book-footer">
          <span>ell jimm</span>
          <span>© 2026</span>
          <span>BUILT WITH REACT</span>
        </footer>
      </div>
    </main>
  );
}

export default Home;