import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./about.scss";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import RocketSvg from "../../assets/images/svg/rocket-ship-svgrepo-com.svg";
import { Parallax } from "react-scroll-parallax";
function About() {
  return (
    <>
      <Parallax translateY={[-50, -50]} speed={5}>
        <section className="about-section" id="about">
          <Container>
            <Row>
              <Fade left>
                <div className="section-title">
                  <h2>
                    <span>{"<>"} </span>About<span> {"</>"}</span>
                  </h2>
                </div>
              </Fade>
              <Fade left>
                <div className="section-subtitle">
                  <p>
                    <Typed
                      strings={[
                        "An ambitious and self-motivatedweb developer with considerabletechnical skills who possess theself-discipline and ability to workwith a minimum of supervision. Ableto play a key role in websitedevelopment to ensure maximumaccessibility, user experience, andusability. A quick learner who canabsorb new ideas and cancommunicate clearly and effectively.",
                      ]}
                      typeSpeed={5}
                    />
                  </p>
                </div>
              </Fade>
            </Row>
            <Row>
              <Col>
                <Fade>
                  <div className="about-info">
                    <div className="about-info-title">01+</div>
                    <span className="about-info-name">Years experience</span>
                  </div>
                </Fade>
              </Col>
              <Col>
                <Fade>
                  <div className="about-info">
                    <div className="about-info-title">5+</div>
                    <span className="about-info-name">Completed project</span>
                  </div>
                </Fade>
              </Col>
              <Col>
                <Fade>
                  <div className="about-info">
                    <div className="about-info-title">04+</div>
                    <span className="about-info-name">Completed worked</span>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
      </Parallax>
    </>
  );
}

export default About;
