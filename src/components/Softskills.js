import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { softSkills } from "../Data/Softskills"; // import full softSkills array from softSkills.js
import Slider from "react-slick";

export default function SoftSkillsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container className="mt-5" data-aos="fade-up">
      <h2 className="text-center mb-4">Soft Skills & Career Readiness</h2>
      <p className="text-center mb-5" style={{ maxWidth: "700px", margin: "auto" }}>
        Prepare students for job interviews, placements, and real-world professional environments.
      </p>
      <Slider {...settings}>
        {softSkills.map((skill, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <div
              style={{
                position: "relative",
                padding: "40px 20px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, rgba(0,123,255,0.1), rgba(0,123,255,0.05))",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#007BFF1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.title}
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <h5 style={{ fontWeight: "600", color: "#007BFF", marginBottom: "10px" }}>
                {skill.title}
              </h5>
              <p style={{ color: "#555", fontSize: "0.95rem" }}>{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}