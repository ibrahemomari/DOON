import React, { useEffect } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Bounce, Fade, Zoom } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import "./skills.scss";
const skillsArr = [
  {
    skillName: "HTML5",
    percentage: 95,
  },
  {
    skillName: "CSS3",
    percentage: 95,
  },
  {
    skillName: "JAVASCRIPT",
    percentage: 92,
  },
  {
    skillName: "BOOTSTRAP",
    percentage: 95,
  },
  {
    skillName: "JQUERY",
    percentage: 85,
  },
  {
    skillName: "SASS/SCSS",
    percentage: 90,
  },
  {
    skillName: "REACT.JS",
    percentage: 90,
  },
  {
    skillName: "NODE.JS",
    percentage: 85,
  },
  {
    skillName: "POSTGRESQL",
    percentage: 85,
  },
  {
    skillName: "MONGO DB",
    percentage: 90,
  },
  {
    skillName: "OOP",
    percentage: 85,
  },
  {
    skillName: "DATA STRUCTURE",
    percentage: 80,
  },
  {
    skillName: "GIT",
    percentage: 90,
  },
  {
    skillName: "GITHUB",
    percentage: 92,
  },
  {
    skillName: "AWS",
    percentage: 60,
  },
];
function Skill() {
  return (
    <>
      <Parallax translateY={[-47.5, -50]} speed={-5}>
        <section className="skills-section" id="skills">
          <Container>
            <Row>
              <Fade right>
                <div className="section-title">
                  <h2>
                    <span>{"<>"} </span>Skills<span> {"</>"}</span>
                  </h2>
                </div>
              </Fade>
            </Row>
            <Row className="skills-item-container">
              {skillsArr.map((el, idx) => {
                return (
                  <>
                    <Col xl={4}>
                      <Zoom right cascade>
                        <span id={`skillName${idx}`}>{el.skillName}</span>
                        <ProgressBar
                          id={`ProgressBar${idx}`}
                          variant="danger"
                          now={el.percentage}
                          striped
                          label={`${el.percentage}%`}
                        />
                      </Zoom>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </section>
      </Parallax>
    </>
  );
}

export default Skill;
