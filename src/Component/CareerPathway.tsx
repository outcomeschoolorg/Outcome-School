import { useState } from "react";
import "../App.css";

const startData = [
  { header: "Apply + Choose Pathway" },
  { header: "Submit Prework" },
];

const pathwayData = [
  {
    header: "AI Engineering Pathway",
    items: [
      { title: "Python Foundation" },
      { title: "ML Fundamentals" },
      { title: "Deep Learning" },
      { title: "LLMs & Production" },
      { title: "AI Engineer", type: "final" },
    ],
  },
  {
    header: "UI/UX Design & Product Management Pathway",
    items: [
      { title: "UX/UI Bootcamp" },
      { title: "PM Fundamentals" },
      { title: "Product Management" },
      { title: "Product Strategy" },
      { title: "Product Manager/Product Designer", type: "final" },
    ],
  },
  {
    header: "Cybersecurity Pathway",
    items: [
      { title: "IT & Security" },
      { title: "Network Basics" },
      { title: "Python" },
      { title: "Ethical Hacking" },
      { title: "Cybersecurity Engineer", type: "final" },
    ],
  },
  {
    header: "Software Engineering Pathway",
    items: [
      { title: "HTML/CSS/JS" },
      { title: "Frontend Dev" },
      { title: "Backend Dev" },
      { title: "Production Eng" },
      { title: "Software Engineer", type: "final" },
    ],
  },
  {
    header: "Game Development Pathway",
    items: [
      { title: "Game Foundation" },
      { title: "Programming" },
      { title: "Advanced Dev" },
      { title: "Studio Ready" },
      { title: "Game Developer", type: "final" },
    ],
  },
  {
    header: "Robotics Engineering Pathway",
    items: [
      { title: "Math & Physics" },
      { title: "Python & C++" },
      { title: "Mechatronics" },
      { title: "Control Systems" },
      { title: "AI Perception" },
      { title: "Product Eng" },
      { title: "Robotics Engineer", type: "final" },
    ],
  },
];

const CareerPathway = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="main-container">
      <div className="career-pathway-container">
        {/* --- Start Timeline --- */}
        <div className="start-timeline-row">
          {startData.map((start, index) => (
            <div key={index} className="start-timeline-item">
              <div className="timeline-content">
                <strong className="item-text">{start.header}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="career-wrapper">
          <div className="right-content">
            {pathwayData.map((pathway, index) => (
              <div key={index} className="pathway-row">
                <div className="CareerPathway-header-container">
                  <h1
                    className="CareerPathway-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    {pathway.header}
                    <span
                      style={{
                        marginLeft: 12,
                        fontSize: 14,
                        color: "#7C33FF",
                      }}
                    >
                      {openIndex === index ? "▲" : "▼"}
                    </span>
                  </h1>
                  {openIndex === index && (
                    <div className="CareerPathway-timeline-container">
                      <div className="CareerPathway-timeline">
                        {pathway.items.map((item, i) => (
                          <div
                            key={i}
                            className="timeline-item"
                            style={
                              {
                                "--animation-delay": `${i * 0.2}s`,
                              } as React.CSSProperties
                            }
                          >
                            <div className="timeline-content">
                              <strong className="item-text">
                                {item.title}
                              </strong>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathway;
