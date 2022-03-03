import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./qualification.scss";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Fade } from "react-reveal";
// import { Parallax } from "react-scroll-parallax";

function Qualification() {
  return (
    <>
      {/* <Parallax translateY={[-20, 40]} id="qualification-prlx"> */}
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
              <Fade top cascade>
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
                    <span className="qualification-rounder"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div className="qualification-subdata">
                    <h4 className="qualification-data-title">
                      BA in Computer Sicence
                    </h4>
                    <span className="qualification-subtitle">
                      Al Albayt University
                    </span>
                    <div className="qualification-calender">
                      Sep 2016 - Mar 2021
                    </div>
                  </div>
                  <div className="qualification-path">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                    <span className="qualification-rounder"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div className="qualification-subdata">
                    <h4 className="qualification-data-title">
                      High school (science)
                    </h4>
                    <span className="qualification-subtitle">
                      Salman Al Farsi High School
                    </span>
                    <div className="qualification-calender">
                      Sep 2015 - Jun 2016
                    </div>
                  </div>
                  {/* <div className="qualification-path">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                    <span className="qualification-rounder"></span>
                  </div> */}
                </div>
              </Fade>
            </Col>

            <Col xl={6} className="work-container">
              <Fade top cascade>
                <div className="qualification-title">
                  <h2>
                    <MdWork />
                    <span> Work</span>
                  </h2>
                </div>

                <div className="qualification-data">
                  <div className="qualification-subdata">
                    <h4 className="qualification-data-title">FREELANCING</h4>
                    <span className="qualification-subtitle">
                      Self Employed
                    </span>
                    <div className="qualification-calender">
                      Feb 2021 - Present
                    </div>
                  </div>
                  <div className="qualification-path">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                    <span className="qualification-rounder"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div className="qualification-subdata">
                    <h4 className="qualification-data-title">
                      FULL STACK JS DEVELOPER - ( TRAINEE )
                    </h4>
                    <span className="qualification-subtitle">LTUC - ASAC</span>
                    <div className="qualification-calender">
                      Apr 2021 - Oct 2021
                    </div>
                  </div>
                  {/* <div className="qualification-path">
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                    <span className="qualification-rounder"></span>
                  </div> */}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>

        <video src={require("./earth.mp4")} muted autoPlay loop></video>
      </section>
      {/* </Parallax> */}
    </>
  );
}

export default Qualification;
