import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./contact.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
function Contact() {
  return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <Fade right>
              <div className="section-title">
                <h2>
                  <span>{"<>"} </span>Git in touch<span> {"</>"}</span>
                </h2>
              </div>
            </Fade>
          </Row>
          <Row>
            <Col xl={5} className="info-container">
              <div className="info-item">
                <IoMdMail />
                <a href="">+962-792914176</a>
              </div>
              <div className="info-item">
                <BsFillTelephoneFill />
                <a href="">ibrahem.omari96@gmail.com</a>
              </div>
              <div className="info-item">
                <AiFillLinkedin />
                <a href="">ibrahem-al-omari-5967a5198</a>
              </div>
            </Col>
            <Col xl={1}></Col>
            <Col xl={5} className="form-container">
              <Form>
                <Container>
                  <Row>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name" required />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Project" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
