import React from "react";
import ul from "../assets/UL.jpeg";
import mu from "../assets/MU.jpg";
import riversdale from "../assets/riversdale.jpg";

const Education: React.FC = () => { // Academic background component
  const degrees = [
    {
      id: 1,
      period: "2024 – 2026",
      degree: "MSc in Artificial Intelligence",
      school: "University of Limerick",
      grade: "First Class Honours · QCA: 3.83 · Thesis: A1 (30 credits)",
      detail:
        "Route: Artificial Intelligence with Modern Machine Learning\nThesis/dissertation: Predicting chronic disease onset in older adults using longitudinal ML on the TILDA dataset. Pooled multi-wave XGBoost achieved 0.718 AUC — a 22% improvement over the single-wave baseline.\nRelevant modules: Machine Learning Applications, Deep Learning, Machine Vision, Artificial Intelligence and Machine Learning, Data Analytics, and AI and Data Science Ecosystems",
      accent: "#00d4aa",
      img: ul,
    },
    {
      id: 2,
      period: "2019 – 2023",
      degree: "BSc (Hons) Computer Science & Software Engineering",
      school: "Maynooth University",
      grade: "2:1 — FYP: 82%",
      detail:
        "Final year project: Kake Dessert Delivery — full stack Firebase web application for a real startup client.",
      accent: "#6c63ff",
      img: mu,
    },
    {
      id: 3,
      period: "2013 – 2019",
      degree: "Leaving Certificate",
      school: "Riversdale (Rath dara) Community College",
      grade: null,
      detail: null,
      accent: "#4a4a60",
      img: riversdale,
    },
  ];

  const extras = [
    {
      label: "Voluntary work",
      items: [
        "BITCI Coordinator & Volunteer (2025)",
        "Jigsaw Mental Health Mentor (2017)",
        "Sports Leadership & Relief Ireland",
      ],
    },
    {
      label: "Awards",
      items: ["Football", "Academic awards", "Youth club — 10+ total"],
    },
  ];

  const certs = [
    {
      name: "Technical certs",
      issuer: "O'Reilly Media",
      year: "—",
      url: "https://www.credly.com/users/abder-h/badges/credly",
    },
    {
      name: "Microsoft Learn",
      issuer: "Microsoft",
      year: "—",
      url: "https://learn.microsoft.com/en-us/users/abderahmanhaouit-0116/",
    },
    { name: "First Aid (FAR)", issuer: "WIN", year: "2024" },
    { name: "PSA License", issuer: "ICSE", year: "2023" },
    { name: "Front-End Development", issuer: "Brainnest", year: "2022" },
    { name: "Sports Coach", issuer: "Fingal County Council", year: "2018" },
    { name: "Peer Educator", issuer: "Jigsaw Mental Health", year: "2017" },
  ];

  return (
    <div
      // @ts-ignore
      name="education"
      className="w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-4 sm:px-6 max-w-screen-lg mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
          style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
        >
          <span style={{ width: 20, height: 1, background: "#6c63ff", display: "inline-block" }} />
          Education
        </span>

        <h2
          className="text-white font-bold mb-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Academic background
        </h2>

        {/* Degrees */}
        <div className="flex flex-col gap-4 mb-12">
          {degrees.map(({ id, period, degree, school, grade, detail, accent, img }) => (
            <div
              key={id}
              style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "1.25rem" }}
            >
              <div className="flex items-start gap-4">
                {/* School logo */}
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 8, overflow: "hidden",
                    flexShrink: 0, border: `1px solid ${accent}44`, background: accent + "11",
                  }}
                >
                  {img ? (
                    <img src={img} alt={school} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                      🏫
                    </div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#f0f0f5",
                      textAlign: "left",
                    }}
                  >
                    {degree}
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "#7a7a90", marginTop: 2, textAlign: "left" }}>
                    {school}
                  </p>
                  <p style={{ fontSize: "0.75rem", fontWeight: 500, marginTop: 4, textAlign: "left" }}>
                    <span style={{ color: "#4a4a60" }}>{period}</span>
                    {grade && (
                      <>
                        <span style={{ color: "#4a4a60" }}>  ·  </span>
                        <span style={{ color: accent, fontWeight: 600 }}>{grade}</span>
                      </>
                    )}
                  </p>
                  {detail && (
                    <div style={{ fontSize: "0.82rem", color: "#7a7a90", lineHeight: 1.6, marginTop: "0.6rem", textAlign: "left" }}>
                      {detail.split("\n").map((item) => (
                        <div key={item}>
                          <span style={{ color: "#6c63ff" }}>• </span>{item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certs & extras */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p style={{ color: "#4a4a60", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Certifications
            </p>
            <div className="flex flex-col gap-2">
              {certs.map(({ name, issuer, year, url }) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "0.65rem 1rem",
                    background: "#111118",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.07)",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ minWidth: 0, textAlign: "left" }}>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: "#f0f0f5",
                          textDecoration: "underline",
                          textAlign: "left",
                        }}
                      >
                        {name}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "#f0f0f5", textAlign: "left" }}>
                        {name}
                      </p>
                    )}
                    <p style={{ fontSize: "0.72rem", color: "#4a4a60", marginTop: 2, textAlign: "left" }}>
                      {issuer}
                    </p>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#4a4a60", fontWeight: 500, flexShrink: 0 }}>
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {extras.map(({ label, items }) => (
              <div key={label}>
                <p style={{ color: "#4a4a60", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {label}
                </p>
                <div style={{ background: "#111118", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", padding: "0.8rem 1rem" }}>
                  {items.map((item) => (
                    <p key={item} style={{ fontSize: "0.83rem", color: "#7a7a90", lineHeight: 1.7, textAlign: "left" }}>
                      · {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
