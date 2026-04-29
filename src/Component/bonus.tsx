import { useState } from "react";
import "../App.css";

const pathwayData = [
  {
    header: "Bonus Program",
    items: [{ title: "Startup Accelerator" }, { title: "Tech Soft Skills" }],
  },
];

const BonusPathway = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="main-container">
      <div className="career-pathway-container">
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

export default BonusPathway;
