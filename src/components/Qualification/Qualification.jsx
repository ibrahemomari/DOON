import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./qualification.scss";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Fade } from "react-reveal";
import { Parallax } from "react-scroll-parallax";

function Qualification() {
  return (
    <>
          <Parallax translateY={[-20, 40]} id="qualification-prlx">
      <section className="qualification-section">
        <Container>
            <Row>
              <Fade right>
                <div className="section-title">
                  <h2>
                    <span>{"<>"} </span>Qualification<span> {"</>"}</span>
                  </h2>
                </div>
              </Fade>
            </Row>
            <Row>
              <Col xl={6} className="education-container">
                <div className="qualification-title">
                  <h2>
                    <FaGraduationCap />
                    <span> Education</span>
                  </h2>
                </div>
                <div className="qualification-data">
                  <div className="qualification-subdata">
                    <h4 className="qualification-data-title">
                      certificate in Advance Software Development
                    </h4>
                    <span className="qualification-subtitle">
                      LTUC / ASAC / Code Fellows
                    </span>
                    <div className="qualification-calender">
                      Apr 2021 - Oct 2021
                    </div>
                  </div>
                  <div className="qualification-path">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="work-container">
                <div className="qualification-title">
                  <h2>
                    <MdWork />
                    <span> Work</span>
                  </h2>
                </div>
              </Col>
            </Row>
        </Container>

        <video src={require("./earth.mp4")} muted autoPlay loop></video>
      </section>
          </Parallax>
    </>
  );
}

export default Qualification;
