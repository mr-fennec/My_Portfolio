import React from "react";
import kake from "../assets/portfolio/kake.PNG";
import calmness from "../assets/portfolio/calmness.jpg";
import ipaddress from "../assets/portfolio/ipaddress.png";
import delivery from "../assets/portfolio/delivery.png";
import targetLocation from "../assets/portfolio/targetlocation.jpg";
import WeatherApp from "../assets/portfolio/weatherApp.png";
import thesis from "../assets/portfolio/thesis.png";

const Portfolio: React.FC = () => {// Portfolio component displaying recent projects with details and links
  const portfolios = [
    {
      id: 1,
      src: thesis,
      title: "ML Chronic Disease Prediction",
      desc: "MSc thesis: longitudinal ML framework on the TILDA dataset predicting chronic disease onset in older Irish adults. Preprocessed ~41M data points across 6 datasets. Pooled multi-wave XGBoost achieved 0.718 AUC — 22% gain over the single-wave baseline. SHAP identified medication use, pain & self-rated health as top predictors.",
      tech: ["Python", "XGBoost", "scikit-learn", "SHAP", "Pandas", "NumPy"],
      month: "2025–2026",
      link: "https://github.com/mr-fennec/ml_pred_chronic_disease",
      repo: "https://github.com/mr-fennec/MSc_Thesis_ML_AI",
      isMSc: true,
    },
    {
      id: 2,
      src: kake,
      title: "Kake Dessert Delivery",
      desc: "Full-stack Firebase web app built end-to-end for a real dessert startup — real-time Firestore DB, private routing, role-based auth, and a complete ordering system.",
      tech: ["React", "TypeScript", "Firebase", "Firestore"],
      month: "Jan 2023",
      link: "https://kake-project.web.app/",
      repo: "https://github.com/mr-fennec/KakeDessertDelivery-FYP",
      isFYP: true,
    },
    {
      id: 3,
      src: WeatherApp,
      title: "NT Weather Web App",
      desc: "Live weather forecasting with location-based lookup, 5-day forecasts and real-time temperature, humidity & wind speed via OpenWeatherMap API.",
      tech: ["React", "Vite", "TypeScript", "OpenWeatherMap API"],
      month: "Mar 2024",
      link: "https://mr-fennec.github.io/NT-Weather-WebApp/",
      repo: "https://github.com/mr-fennec/NT-Weather-WebApp",
    },
    {
      id: 4,
      src: calmness,
      title: "Calmness Web App",
      desc: "Mental wellness web application with guided exercises and mood tracking.",
      tech: ["React", "JavaScript", "CSS3"],
      month: "Sep 2022",
      repo: "https://github.com/mr-fennec/Calmness_web_app",
    },
    {
      id: 5,
      src: ipaddress,
      title: "IP Address Tracker",
      desc: "Tracks and maps any IP address using the IPify API and Leaflet.js map rendering.",
      tech: ["JavaScript", "Leaflet.js", "IPify API"],
      month: "Jun 2022",
      repo: "https://github.com/mr-fennec/TrackIPAddress",
    },
    {
      id: 6,
      src: delivery,
      title: "Delivery App",
      desc: "Mobile-first delivery management interface with order tracking and status updates.",
      tech: ["React", "Node.js", "CSS3"],
      month: "Aug 2022",
      repo: "https://github.com/mr-fennec/Delivery_app",
    },
    {
      id: 7,
      src: targetLocation,
      title: "Target Internet",
      desc: "Location-aware targeting app using browser geolocation and mapping APIs.",
      tech: ["JavaScript", "HTML5", "Geolocation API"],
      month: "Oct 2022",
      repo: "https://github.com/mr-fennec/TargetInternet",
    },
  ];

  const cardStyle: React.CSSProperties = {
    background: "#111118",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "border-color 0.2s, transform 0.2s",
  };

  return (
    <div
      // @ts-ignore
      name="portfolio"
      className="w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-4 sm:px-6 max-w-screen-lg mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
          style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: "#6c63ff",
              display: "inline-block",
            }}
          />
          Portfolio
        </span>

        <h2
          className="text-white font-bold mb-3"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Recent work
        </h2>
        <p
          style={{
            color: "#7a7a90",
            marginBottom: "2.5rem",
            fontSize: "0.95rem",
          }}
        >
          Projects from university, personal experiments, and professional
          research.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolios.map(
            ({
              id,
              src,
              title,
              desc,
              tech,
              month,
              link,
              repo,
              isFYP,
              isMSc,
            }) => (
              <div
                key={id}
                style={cardStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.14)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: 160,
                    overflow: "hidden",
                    position: "relative",
                    background: "#18181f",
                    flexShrink: 0,
                  }}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="48"
                        height="48"
                        fill="none"
                        stroke="#6c63ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  )}
                  {/* Badges */}
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      display: "flex",
                      gap: 4,
                    }}
                  >
                    {isFYP && (
                      <span
                        style={{
                          background: "#6c63ff",
                          color: "#fff",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.55rem",
                          borderRadius: 4,
                          letterSpacing: "0.06em",
                        }}
                      >
                        FYP
                      </span>
                    )}
                    {isMSc && (
                      <span
                        style={{
                          background: "#00d4aa",
                          color: "#0a0a0f",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.55rem",
                          borderRadius: 4,
                          letterSpacing: "0.06em",
                        }}
                      >
                        MSc Thesis
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "1.25rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                      gap: 8,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#f0f0f5",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {title}
                    </p>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#4a4a60",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {month}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#7a7a90",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: "1rem",
                    }}
                  >
                    {desc}
                  </p>

                  {/* Tech badges */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.3rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          color: "#6c63ff",
                          background: "rgba(108,99,255,0.12)",
                          padding: "0.18rem 0.55rem",
                          borderRadius: 4,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {link && (
                      <button
                        onClick={() => window.open(link, "_blank")}
                        style={{
                          flex: 1,
                          padding: "0.5rem",
                          borderRadius: 6,
                          background: "#6c63ff",
                          color: "#fff",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          border: "none",
                          cursor: "pointer",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity =
                            "0.85";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = "1";
                        }}
                      >
                        {id === 1 ? "Code" : "Demo"}
                      </button>
                    )}
                    <button
                      onClick={() => window.open(repo, "_blank")}
                      style={{
                        flex: 1,
                        padding: "0.5rem",
                        borderRadius: 6,
                        background: "transparent",
                        color: "#7a7a90",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.14)",
                        cursor: "pointer",
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#f0f0f5";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#7a7a90";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.14)";
                      }}
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
