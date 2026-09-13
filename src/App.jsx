import { useEffect, useState } from "react";
import "./App.css";

import background from "./assets/hero.png";

import certificate1 from "./assets/certificates/certificate1.png";
import certificate2 from "./assets/certificates/certificate2.png";
import certificate3 from "./assets/certificates/certificate3.png";
import certificate4 from "./assets/certificates/certificate4.png";
import certificate5 from "./assets/certificates/certificate5.png";
import certificate6 from "./assets/certificates/certificate6.png";
import certificate7 from "./assets/certificates/certificate7.png";
import certificate8 from "./assets/certificates/certificate8.png";


function App() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const totalSlides = 7;


  /* 
     CERTIFICATES
   */

  const certificates = [

    {
      id: 1,
      title: "IB-Mate Recommendation",
      subtitle: "IB STARTDays · Group Leadership",
      image: certificate1,
      description:
        "Recommendation from Rotterdam Business School recognizing Celisha's role during the IB STARTDays and her work as a group leader and student coach."
    },

    {
      id: 2,
      title: "TikTok Reference Letter",
      subtitle: "Creator Manager Project Intern",
      image: certificate2,
      description:
        "Official offboarding reference from TikTok Logistics Netherlands for the Creator Manager Project Internship."
    },

    {
      id: 3,
      title: "Tokyo Metropolitan University",
      subtitle: "Exchange Recommendation Letter",
      image: certificate3,
      description:
        "Recommendation from Rotterdam Business School confirming the academic standards and readiness required for the Tokyo Metropolitan University exchange."
    },

    {
      id: 4,
      title: "O&C Hackathon",
      subtitle: "Certificate of Achievement · 2026",
      image: certificate4,
      description:
        "Certificate recognizing participation in the Organizations & Change 2026 Hackathon at Rotterdam University of Applied Sciences."
    },

    {
      id: 5,
      title: "Tokyo Metropolitan University",
      subtitle: "Academic Transcript",
      image: certificate5,
      description:
        "Academic transcript from Tokyo Metropolitan University covering the exchange semester."
    },

    {
      id: 6,
      title: "Propedeuse Bachelor",
      subtitle: "HBO Bachelor International Business",
      image: certificate6,
      description:
        "Certificate for the HBO Bachelor International Business Propedeuse issued by Hogeschool Rotterdam."
    },

    {
      id: 7,
      title: "Erasmus+ CAFE",
      subtitle: "Culture Against Food Waste for Europe",
      image: certificate7,
      description:
        "Youthpass certificate documenting participation in the Erasmus+ Youth Exchange Culture Against Food Waste for Europe in France."
    },

    {
      id: 8,
      title: "English Proficiency",
      subtitle: "Rotterdam Business School",
      image: certificate8,
      description:
        "Official confirmation from Rotterdam Business School regarding English-language proficiency and eligibility for the Tokyo Metropolitan University exchange."
    }

  ];


  /* =====================================================
     SLIDE NAVIGATION
  ===================================================== */

  const goToSlide = (index) => {

    if (index < 0 || index >= totalSlides) {
      return;
    }

    setCurrentSlide(index);
  };


  const nextSlide = () => {

    setCurrentSlide((previous) =>
      Math.min(
        previous + 1,
        totalSlides - 1
      )
    );

  };


  const previousSlide = () => {

    setCurrentSlide((previous) =>
      Math.max(
        previous - 1,
        0
      )
    );

  };


  /* =====================================================
     MOUSE WHEEL
  ===================================================== */

  useEffect(() => {

    let locked = false;

    const handleWheel = (event) => {

      if (selectedCertificate !== null) {
        return;
      }

      if (locked) {
        return;
      }

      locked = true;

      if (event.deltaY > 0) {
        nextSlide();
      }

      else if (event.deltaY < 0) {
        previousSlide();
      }

      setTimeout(() => {
        locked = false;
      }, 1100);

    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: true
      }
    );

    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel
      );

    };

  }, [selectedCertificate]);


  /* =====================================================
     KEYBOARD
  ===================================================== */

  useEffect(() => {

    const handleKeyboard = (event) => {

      if (selectedCertificate !== null) {

        if (event.key === "Escape") {
          setSelectedCertificate(null);
        }

        if (event.key === "ArrowRight") {
          setSelectedCertificate(
            (selectedCertificate + 1) %
            certificates.length
          );
        }

        if (event.key === "ArrowLeft") {
          setSelectedCertificate(
            (selectedCertificate -
              1 +
              certificates.length) %
            certificates.length
          );
        }

        return;
      }


      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowRight"
      ) {
        nextSlide();
      }


      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        previousSlide();
      }

    };


    window.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };

  }, [
    selectedCertificate,
    currentSlide
  ]);


  /* =====================================================
     OPEN CERTIFICATE
  ===================================================== */

  const openCertificate = (index) => {

    setSelectedCertificate(index);

  };


  const closeCertificate = () => {

    setSelectedCertificate(null);

  };


  const nextCertificate = () => {

    setSelectedCertificate(
      (selectedCertificate + 1) %
      certificates.length
    );

  };


  const previousCertificate = () => {

    setSelectedCertificate(
      (selectedCertificate -
        1 +
        certificates.length) %
      certificates.length
    );

  };


  return (

    <main className="portfolio">


      {/* =================================================
          WEBSITE
      ================================================= */}

      <div className="viewport">

        <div
          className="slide-track"
          style={{
            transform:
              `translateY(-${
                currentSlide * 100
              }vh)`
          }}
        >


          {/* =================================================
              HOME
          ================================================= */}

          <section className="slide home-slide">

            <img
              src={background}
              className="home-background"
              alt=""
            />

            <div className="home-overlay" />

            <div className="home-grid" />

            <div className="home-content">

              <p className="eyebrow">
                INTERNATIONAL BUSINESS
              </p>

              <h1>
                Celisha
                <br />
                <em>Wong.</em>
              </h1>

              <p className="home-description">
                International Business student
                specializing in Organization &
                Change, with an interest in strategy,
                innovation, marketing and global
                business.
              </p>

              <button
                className="gold-button"
                onClick={() => goToSlide(1)}
              >
                EXPLORE PORTFOLIO

                <span>
                  ↗
                </span>
              </button>

            </div>


            <div className="home-business-word">
              STRATEGY
            </div>


            <div className="home-location">

              ROTTERDAM
              <br />

              INTERNATIONAL BUSINESS

            </div>


            <div className="home-bottom-text">

              IDEAS
              <br />
              THAT TRAVEL FURTHER.

            </div>

          </section>


          {/* =================================================
              ABOUT
          ================================================= */}

          <section className="slide about-slide">

            <div className="slide-number">
              01
            </div>


            <div className="about-shape" />


            <div className="about-content">

              <p className="eyebrow">
                ABOUT ME
              </p>

              <h2>

                Business
                <br />

                with a
                <br />

                <em>human</em>
                perspective.

              </h2>


              <p className="large-description">

                International Business student
                specializing in Organization &
                Change. My interests sit at the
                intersection of business strategy,
                creativity, innovation and culture.

              </p>

            </div>


            <div className="about-side">

              <div className="about-line" />

              <p>
                STRATEGY
              </p>

              <p>
                CREATIVITY
              </p>

              <p>
                INNOVATION
              </p>

              <p>
                GLOBAL
              </p>

            </div>


            <div className="about-decoration">
              01
            </div>

          </section>


          {/* =================================================
              EXPERIENCE
          ================================================= */}

          <section className="slide experience-slide">

            <div className="slide-number">
              02
            </div>


            <div className="experience-content">

              <p className="eyebrow">
                EXPERIENCE
              </p>

              <h2>

                Learning
                <br />

                through
                <br />

                <em>doing.</em>

              </h2>


              <div className="timeline">


                {/* 1 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2026—27
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Content Operations Intern
                    </h3>

                    <p>
                      Heroes Dutch Comic Con
                      · Easyfairs
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2026—2027
                    </span>

                    <h4>
                      Content Operations Intern
                    </h4>

                    <p>
                      Coordinating content operations,
                      content planning, scheduling,
                      marketing communication and
                      campaign execution.
                    </p>

                    <div className="popup-tags">

                      <span>
                        CONTENT
                      </span>

                      <span>
                        MARKETING
                      </span>

                      <span>
                        EVENTS
                      </span>

                    </div>

                  </div>

                </div>


                {/* 2 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2026
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Creator Manager Intern
                    </h3>

                    <p>
                      TikTok Shop Netherlands
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2026
                    </span>

                    <h4>
                      TikTok Shop
                    </h4>

                    <p>
                      Supported creator onboarding,
                      content strategy, product selection,
                      policy compliance and campaign
                      execution.
                    </p>

                    <div className="popup-tags">

                      <span>
                        TIKTOK
                      </span>

                      <span>
                        CREATORS
                      </span>

                      <span>
                        STRATEGY
                      </span>

                    </div>

                  </div>

                </div>


                {/* 3 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2024—25
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Market Research Consultant
                    </h3>

                    <p>
                      Skoon · Rotterdam
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2024—2025
                    </span>

                    <h4>
                      Market Research
                    </h4>

                    <p>
                      Conducted international market
                      research, stakeholder analysis,
                      competitor research and strategic
                      recommendations.
                    </p>

                    <div className="popup-tags">

                      <span>
                        RESEARCH
                      </span>

                      <span>
                        ANALYSIS
                      </span>

                      <span>
                        STRATEGY
                      </span>

                    </div>

                  </div>

                </div>


                {/* 4 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2025—26
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Innovation Consultant
                    </h3>

                    <p>
                      Noria · Delft
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2025—2026
                    </span>

                    <h4>
                      Innovation Consultant
                    </h4>

                    <p>
                      Conducted user research,
                      customer profiling, Design Thinking,
                      Lean Business Model Canvas work
                      and professional client pitching.
                    </p>

                    <div className="popup-tags">

                      <span>
                        INNOVATION
                      </span>

                      <span>
                        DESIGN THINKING
                      </span>

                      <span>
                        RESEARCH
                      </span>

                    </div>

                  </div>

                </div>


                {/* 5 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2018—26
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Customer Experience Assistant
                    </h3>

                    <p>
                      Cut & Dyl / Studio kawal
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2018—2026
                    </span>

                    <h4>
                      Customer Experience
                    </h4>

                    <p>
                      Customer support, appointment
                      management, online promotion,
                      daily operations and accountancy.
                    </p>

                    <div className="popup-tags">

                      <span>
                        OPERATIONS
                      </span>

                      <span>
                        CUSTOMER
                      </span>

                      <span>
                        CONTENT
                      </span>

                    </div>

                  </div>

                </div>


                {/* 6 */}

                <div className="timeline-item">

                  <div className="timeline-year">
                    2024—25
                  </div>

                  <div className="timeline-dot" />

                  <div className="timeline-info">

                    <h3>
                      Student Mentor — IB-Mate
                    </h3>

                    <p>
                      Rotterdam Business School
                    </p>

                  </div>


                  <div className="experience-popup">

                    <span>
                      2024—2025
                    </span>

                    <h4>
                      Student Mentor
                    </h4>

                    <p>
                      Mentored first-year students,
                      organized events and provided
                      academic support activities.
                    </p>

                    <div className="popup-tags">

                      <span>
                        LEADERSHIP
                      </span>

                      <span>
                        MENTORING
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="experience-circle">
              EXPERIENCE
            </div>

          </section>


          {/* =================================================
              PROJECTS
          ================================================= */}

          <section className="slide projects-slide">

            <div className="slide-number">
              03
            </div>


            <div className="projects-content">

              <p className="eyebrow">
                PROJECTS
              </p>

              <h2>

                Ideas into
                <br />

                <em>action.</em>

              </h2>


              <div className="project-grid">


                <article className="project-card">

                  <div className="project-top">

                    <span>
                      01
                    </span>

                    <span>
                      PERSONAL PROJECT
                    </span>

                  </div>


                  <h3>
                    TikTok
                    <br />
                    Portfolio
                  </h3>


                  <p className="project-handle">
                    @lishalowes
                  </p>


                  <p className="project-description">

                    Built a Gen Z community around
                    Korean media through short-form
                    content, trends and storytelling.

                  </p>


                  <div className="project-stats">

                    <div>

                      <strong>
                        2K+
                      </strong>

                      <span>
                        FOLLOWERS
                      </span>

                    </div>


                    <div>

                      <strong>
                        429K+
                      </strong>

                      <span>
                        LIKES
                      </span>

                    </div>


                    <div>

                      <strong>
                        20K+
                      </strong>

                      <span>
                        VIRAL VIEWS
                      </span>

                    </div>

                  </div>

                </article>


                <article className="project-card">

                  <div className="project-top">

                    <span>
                      02
                    </span>

                    <span>
                      INTERNATIONAL
                    </span>

                  </div>


                  <h3>

                    Culture Against
                    <br />

                    Food Waste

                  </h3>


                  <p className="project-handle">
                    Erasmus+ · CAFE
                  </p>


                  <p className="project-description">

                    International youth exchange
                    focused on food waste, sustainability,
                    intercultural collaboration and
                    non-formal learning.

                  </p>


                  <div className="project-countries">

                    <span>
                      FRANCE
                    </span>

                    <span>
                      TURKEY
                    </span>

                    <span>
                      CYPRUS
                    </span>

                    <span>
                      NETHERLANDS
                    </span>

                  </div>

                </article>


                <article className="project-card">

                  <div className="project-top">

                    <span>
                      03
                    </span>

                    <span>
                      COLLABORATION
                    </span>

                  </div>


                  <h3>

                    HOK at
                    <br />

                    gamescom

                  </h3>


                  <p className="project-handle">
                    TMU × Tencent
                  </p>


                  <p className="project-description">

                    Created promotional content
                    connected to HOK at gamescom
                    Cologne.

                  </p>


                  <div className="project-countries">

                    <span>
                      CONTENT
                    </span>

                    <span>
                      GAMING
                    </span>

                    <span>
                      MARKETING
                    </span>

                  </div>

                </article>

              </div>

            </div>

          </section>


          {/* =================================================
              EDUCATION
          ================================================= */}

          <section className="slide education-slide">

            <div className="slide-number">
              04
            </div>


            <div className="education-content">

              <p className="eyebrow">
                EDUCATION
              </p>

              <h2>

                Building the
                <br />

                <em>foundation.</em>

              </h2>


              <div className="education-layout">


                <div className="education-column">


                  <div className="education-item">

                    <span>
                      2023—PRESENT
                    </span>

                    <h3>
                      Bachelor of
                      <br />
                      International Business
                    </h3>

                    <p>
                      Rotterdam Business School
                    </p>

                    <small>
                      Organization & Change
                    </small>

                  </div>


                  <div className="education-item">

                    <span>
                      2025—2026
                    </span>

                    <h3>
                      Exchange Student
                    </h3>

                    <p>
                      Tokyo Metropolitan University
                    </p>

                    <small>
                      Japan · 6 months
                    </small>

                  </div>


                  <div className="education-item">

                    <span>
                      2018—2023
                    </span>

                    <h3>
                      Middelbare School
                    </h3>

                    <p>
                      Lentiz Reviuslyceum
                    </p>

                  </div>

                </div>


                <div className="skills-column">

                  <p className="mini-heading">
                    SKILLS
                  </p>

                  <ul>

                    <li>
                      Client interaction &
                      communication
                    </li>

                    <li>
                      Social media content creation
                    </li>

                    <li>
                      TikTok & Canva
                    </li>

                    <li>
                      Market research &
                      business analysis
                    </li>

                    <li>
                      Dutch — C2
                    </li>

                    <li>
                      English — C1
                    </li>

                  </ul>


                  <p className="mini-heading certifications-title">
                    CERTIFICATIONS
                  </p>

                  <ul>

                    <li>
                      Erasmus+ Diploma
                    </li>

                    <li>
                      O&C Hackathon Certificate
                    </li>

                    <li>
                      Propedeuse Diploma
                    </li>

                    <li>
                      HAVO Diploma
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              RECOGNITION
          ================================================= */}

          <section className="slide recognition-slide">

            <div className="slide-number">
              05
            </div>


            <div className="recognition-content">

              <p className="eyebrow">
                RECOGNITION & ACHIEVEMENTS
              </p>


              <h2>

                More than
                <br />

                <em>experience.</em>

              </h2>


              <div className="recognition-grid">


                {certificates.map(
                  (certificate, index) => (

                    <button
                      key={certificate.id}
                      className="recognition-item"
                      onClick={() =>
                        openCertificate(index)
                      }
                    >

                      <div className="recognition-top">

                        <span>
                          {String(
                            certificate.id
                          ).padStart(2, "0")}
                        </span>

                        <span className="recognition-arrow">
                          ↗
                        </span>

                      </div>


                      <h3>
                        {certificate.title}
                      </h3>


                      <p>
                        {certificate.subtitle}
                      </p>


                      <div className="view-document">
                        VIEW DOCUMENT
                      </div>

                    </button>

                  )
                )}

              </div>


              <p className="references">
                Click any document to view the
                original certificate or reference.
              </p>

            </div>

          </section>


          {/* =================================================
              CONTACT
          ================================================= */}

          <section className="slide contact-slide">

            <div className="contact-background" />


            <div className="contact-content">

              <p className="eyebrow">
                CONTACT
              </p>


              <h2>

                Let's create
                <br />

                something
                <br />

                <em>meaningful.</em>

              </h2>


              <div className="contact-details">

                <a href="mailto:Celisha.lm.wong@gmail.com">
                  Celisha.lm.wong@gmail.com ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/celisha-wong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://www.tiktok.com/@lishalovesorv"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok · @lishalovesorv ↗
                </a>

              </div>

            </div>


            <div className="contact-footer">

              <span>
                CELISHA WONG
              </span>

              <span>
                07 / 07
              </span>

            </div>

          </section>


        </div>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="navbar">

        <button
          className="logo"
          onClick={() => goToSlide(0)}
        >
          CW
        </button>


        <div className="nav-links">

          <button
            className={
              currentSlide === 0
                ? "active"
                : ""
            }
            onClick={() => goToSlide(0)}
          >
            HOME
          </button>

          <button
            className={
              currentSlide === 1
                ? "active"
                : ""
            }
            onClick={() => goToSlide(1)}
          >
            ABOUT
          </button>

          <button
            className={
              currentSlide === 2
                ? "active"
                : ""
            }
            onClick={() => goToSlide(2)}
          >
            EXPERIENCE
          </button>

          <button
            className={
              currentSlide === 3
                ? "active"
                : ""
            }
            onClick={() => goToSlide(3)}
          >
            PROJECTS
          </button>

          <button
            className={
              currentSlide === 4
                ? "active"
                : ""
            }
            onClick={() => goToSlide(4)}
          >
            EDUCATION
          </button>

          <button
            className={
              currentSlide === 5
                ? "active"
                : ""
            }
            onClick={() => goToSlide(5)}
          >
            RECOGNITION
          </button>

          <button
            className={
              currentSlide === 6
                ? "active"
                : ""
            }
            onClick={() => goToSlide(6)}
          >
            CONTACT
          </button>

        </div>

      </nav>


      {/* =================================================
          SLIDE COUNTER
      ================================================= */}

      <div className="slide-counter">

        <span>
          0{currentSlide + 1}
        </span>

        <div className="counter-track">

          <div
            className="counter-progress"
            style={{
              width:
                `${
                  ((currentSlide + 1) /
                    totalSlides) *
                  100
                }%`
            }}
          />

        </div>

        <span>
          0{totalSlides}
        </span>

      </div>


      {/* =================================================
          ARROWS
      ================================================= */}

      <div className="slide-arrows">

        <button
          onClick={previousSlide}
          disabled={
            currentSlide === 0
          }
        >
          ↑
        </button>

        <button
          onClick={nextSlide}
          disabled={
            currentSlide ===
            totalSlides - 1
          }
        >
          ↓
        </button>

      </div>


      {/* =================================================
          SCROLL MESSAGE
      ================================================= */}

      {currentSlide <
        totalSlides - 1 && (

        <div className="scroll-message">

          SCROLL TO EXPLORE

          <span>
            ↓
          </span>

        </div>

      )}


      {/* =================================================
          CERTIFICATE PORTAL
      ================================================= */}

      {selectedCertificate !== null && (

        <div
          className="certificate-portal"
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeCertificate();
            }

          }}
        >


          {/* Portal header */}

          <div className="portal-header">

            <button
              className="portal-back"
              onClick={closeCertificate}
            >
              ← BACK
            </button>


            <div className="portal-title">

              <span>
                CERTIFICATE PORTAL
              </span>

              <strong>
                {
                  String(
                    selectedCertificate + 1
                  ).padStart(2, "0")
                }
                {" "}
                /
                {" "}
                08
              </strong>

            </div>

          </div>


          {/* Certificate viewer */}

          <div className="certificate-viewer">


            <button
              className="certificate-nav previous"
              onClick={previousCertificate}
              aria-label="Previous document"
            >
              ←
            </button>


            <div className="certificate-container">

              <img
                src={
                  certificates[
                    selectedCertificate
                  ].image
                }
                alt={
                  certificates[
                    selectedCertificate
                  ].title
                }
                className="certificate-image"
              />

            </div>


            <button
              className="certificate-nav next"
              onClick={nextCertificate}
              aria-label="Next document"
            >
              →
            </button>


          </div>


          {/* Certificate information */}

          <div className="certificate-information">

            <div>

              <span>
                {
                  certificates[
                    selectedCertificate
                  ].subtitle
                }
              </span>

              <h2>
                {
                  certificates[
                    selectedCertificate
                  ].title
                }
              </h2>

            </div>


            <p>
              {
                certificates[
                  selectedCertificate
                ].description
              }
            </p>

          </div>


          <div className="portal-hint">

            USE ← → TO NAVIGATE
            <span>·</span>
            ESC TO CLOSE

          </div>


        </div>

      )}

    </main>
  );
}

export default App;