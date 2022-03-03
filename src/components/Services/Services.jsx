import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import "./services.scss";
import { BsBraces, BsCheckCircle } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
function Services() {
  return (
    <>
      <section className="services-section">
        <Container>
          <Fade top cascade>
            <Row>
              <Fade bottom>
                <div className="section-title">
                  <h2>
                    <span>{"<>"} </span>Services<span> {"</>"}</span>
                  </h2>
                </div>
              </Fade>
            </Row>
            <Row>
              <div className="service-title">
                <SiMaterialdesignicons />
                <span>Frontend Developer</span>
              </div>
            </Row>

            <Row>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Modern web page designs
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Attracting users to the site and easy to deal with
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Responsive designs to fit all devices
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                CCol ent-side scripts
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Server-side scripts
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                back-end server-side scripts
              </Col>
            </Row>
            <Row>
              <div className="service-title">
                <BsBraces />

                <span>Backend Developer</span>
              </div>
            </Row>
            <Row>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Web Development Languages.
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Database and Cache.
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Server.
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                API (REST & SOAP).
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Algorithms.
              </Col>
              <Col xl={4}>
                <span>
                  <BsCheckCircle />
                </span>
                Frameworks.
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
    </>
  );
}

export default Services;
