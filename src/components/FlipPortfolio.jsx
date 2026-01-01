// src/FlipPortfolio.jsx
import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
// import "./FlipbookRoyal.css";

export default function FlipPortfolio() {
  const bookRef = useRef(null);
  const [page, setPage] = useState(0);

  const pages = [
    {
      type: "cover",
      title: "Vikas Solanki",
      subtitle: "Data science with Python",
      coverNote: "Portfolio",
      coverImg: "", // optional image url
    },
    {
      title: "About",
      body:
        "Hi —I’m an aspiring AI Engineer with a strong interest in building intelligent systems that solve real-world problems. I enjoy working at the intersection of machine learning, data, and software engineering, turning ideas into practical AI-powered applications."
    },
    {
      title: "Project — Calculator",
      project: {
        img: "data:image/jpeg;base64,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",
        desc: "MERN + Stable Diffusion integration. Image prompts, history, downloads, server-side generation.",
      },
    },
    {
      title: "Project — calcultor",
      project: {
        img: "data:image/jpeg;base64,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",
        desc: "AI Chat Boot, manual offsets, Built with Python , ML ,DL and Firebase."
      },
    },
    {
      title: "Skills",
      bullets: ["python","C","C++"],
    },
    {
      title: "Contact",
      contact: {
        email: "vikassolanki964466@gmail.com",
        phone: "91-9644665129",
        linkedin: "linkedin.com/in/yourprofile",
      },
    },
    {
      title: "education",
      contact: {
        college:"sushila devi bansal college",
        branch:"CSE-AIML",
        year:2023-2027,
      },
    },
    {
      type: "back-cover",
      title: "Thank you",
      subtitle: "Let's build something together",
    },
  ];

  function nextPage() {
    bookRef.current && bookRef.current.flipNext();
  }
  function prevPage() {
    bookRef.current && bookRef.current.flipPrev();
  }
  function onFlip(e) {
    setPage(e.data);
  }

  return (
    <div className="book-wrap">
      <div className="flipbook">
        <div className="" aria-hidden />
        <HTMLFlipBook
          width={680}
          height={740}
          size="stretch"
          minWidth={400}
          maxWidth={1200}
          maxHeight={1000}
          showCover={true}
          drawShadow={true}
          mobileScrollSupport={true}
          ref={bookRef}
          onFlip={onFlip}
          className="react-flipbook"
        >
          {pages.map((p, i) => {
            // cover
            if (p.type === "cover") {
              return (
                <div key={i} className="book-page book-cover">
                  <div className="bookmark" aria-hidden />
                  <div className="cover-title">{p.title}</div>
                  <div className="cover-sub">{p.subtitle}</div>
                  <div style={{ height: 18 }} />
                  <div className="decor-line" />
                  <div style={{ marginTop: 16, color: "#d7c8a8" }}>
                    {p.coverNote}
                  </div>
                </div>
              );
            }

            // back-cover
            if (p.type === "back-cover") {
              return (
                <div key={i} className="book-page book-back">
                  <div className="page-inner">
                    <h2 className="page-title">{p.title}</h2>
                    <div className="page-text">{p.subtitle}</div>
                    <div style={{ height: 18 }} />
                    <div className="decor-line" />
                    <div style={{ marginTop: 14, color: "#cfc1a0" }}>
                      © {new Date().getFullYear()} Faizan Razvi
                    </div>
                  </div>
                </div>
              );
            }

            // normal page
            return (
              <div key={i} className="book-page">
                <div className="page-inner">
                  <h3 className="page-title">{p.title}</h3>
                  <div className="decor-line" />
                  {p.body && <div className="page-text">{p.body}</div>}

                  {p.project && (
                    <div style={{ marginTop: 18 }}>
                      <div className="project-card">
                        <img
                          className="project-img"
                          src={p.project.img}
                          alt={p.title}
                        />
                        <div className="project-meta">
                          <h3>{p.title}</h3>
                          <p>{p.project.desc}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {p.bullets && (
                    <div className="skills-list" style={{ marginTop: 12 }}>
                      {p.bullets.map((b, idx) => (
                        <div key={idx} className="skill-badge">
                          {b}
                        </div>
                      ))}
                    </div>
                  )}

                  {p.contact && (
                    <ul className="contact-list">
                      <li>Email: {p.contact.email}</li>
                      <li>Phone: {p.contact.phone}</li>
                      <li>LinkedIn: {p.contact.linkedin}</li>
                    </ul>
                  )}

                  <div className="page-counter">Page {i + 1} / {pages.length}</div>
                </div>
              </div>
            );
          })}
        </HTMLFlipBook>
      </div>

     
    </div>
  );
}

