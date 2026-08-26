import React from "react";

const About: React.FC = () => {// Skills grouped by category 
  const skills = [
    {
      group: "Front-end",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
        "Bootstrap",
        "Tailwind CSS",
        "Web Components",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      group: "Back-end",
      items: ["Java", "Spring Boot", "Python", "Node.js", "REST API", "JWT", "Pytest", "FastAPI TestClient"],
    },
    {
      group: "Data & AI",
      items: [
        "Machine Learning",
        "XGBoost",
        "scikit-learn",
        "Pandas",
        "TILDA",
        "TensorFlow",
        "PyTorch",
        "Logistic Regression",
        "Multi-layer Perceptron",
        "Random Forest",
        "SHAP",
        "Feature Engineering",
        "Hyperparameter Tuning",
        "Jupyter Notebook",
      ],
    },
    {
      group: "Tools & Cloud",
      items: [
        "Azure DevOps",
        "Firebase",
        "GitHub Actions",
        "PostgreSQL",
        "Snowflake",
        "Kubernetes",
        "Docker",
        "Databricks",
        "CI/CD",
      ],
    },
  ];

  return (
    <div
      // @ts-ignore
      name="about"
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
          About
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
          A bit about me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bio */}
          <div style={{ color: "#7a7a90", fontSize: "1rem", lineHeight: 1.8 }}>
            <p>
              I hold a{" "}
              <span style={{ color: "#f0f0f5", fontWeight: 500 }}>
                2:1 Honours BSc in Computer Science & Software Engineering
              </span>{" "}
              from Maynooth University, where I earned 82% on my Final Year
              Project. I'm currently working as a{" "}
              <span style={{ color: "#f0f0f5", fontWeight: 500 }}>
                Software Engineer at Northern Trust
              </span>{" "}
              on a rotational development programme spanning Asset
              Servicing [Transfer Agency] and [Capital Markets], and NTAM Tech [GenAI Research] — including
              helping ship the teams first live AI-driven app (investor call transcription
              tool).
            </p>
            <br />
            <p>
              Alongside work, I'm graduating this January with an{" "}
              <span style={{ color: "#f0f0f5", fontWeight: 500 }}>
                MSc in Artificial Intelligence (1:1) from the University of
                Limerick
              </span>{" "}
              (2024–2026). My thesis applies longitudinal machine learning to
              the Irish Longitudinal Study of Ageing (TILDA) dataset to predict
              chronic disease onset in older Irish adults — achieving a 22% AUC
              improvement over the single-wave baseline with XGBoost, with a
              predicted thesis grade of 75%+.
            </p>
            <br />
            <p>
              I'm drawn to problems where engineering and real-world impact to
              our day-to-day lives meet — particularly in health and well-being.
              Outside tech, I've visited 15+ countries and stay active through
              football and fitness.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-5">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#4a4a60",
                    marginBottom: "0.6rem",
                  }}
                >
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "#18181f",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#7a7a90",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        padding: "0.28rem 0.75rem",
                        borderRadius: 999,
                        transition: "border-color 0.2s, color 0.2s",
                        cursor: "default",
                      }}
                    >
                      {item}
                    </span>
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

export default About;