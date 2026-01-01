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
      img:"data:image/jpeg;base64,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",
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
      education: {
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
                  {console.log(p.contact)}

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
{ console.log(p)}
                  {p.education && (
                   
                    <div className="skills-list" style={{ marginTop: 12 }}>
                     <ul className="contact-list">
                      <li>Education: {p.education.college}</li>
                      <li>Branch: {p.education.branch}</li>
                      <li>Collage: {p.education.year}</li>
                    </ul>
                    </div>
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

