import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./contact.scss";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlineDoubleArrow } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s09lgwv",
        "template_t6kzlup",
        form.current,
        "N7lrtmeCy27_cX_dx"
      )
      .then(
        (result) => {
          console.log(result.text);
          return Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You For Participate",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="contact-section" id="contact">
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
          <Fade top cascade>
            <Row>
              <Col xl={5} className="info-container">
                <div className="info-item">
                  <FaWhatsapp />
                  <span>Send on whatsapp </span>
                  <a
                    href="https://wa.me/962792914176?text=Hi, Mr.IBRAHEM "
                    target="_blank"
                  >
                    +962-792914176
                  </a>
                </div>
                <div className="info-item">
                  <IoMdMail />
                  <span>Email</span>
                  <a href="mailto:ibrahem.omari96@gmail.com" target="_blank">
                    ibrahem.omari96@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <AiFillLinkedin />
                  <span>LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/ibrahem-al-omari-5967a5198/"
                    target="_blank"
                  >
                    ibrahem-al-omari-5967a5198
                  </a>
                </div>
              </Col>
              <Col xl={1}></Col>
              <Col xl={5} className="form-container">
                <Form ref={form} onSubmit={sendEmail}>
                  <Container>
                    <Row>
                      <Col xl={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            required
                            name="user_name"
                          />
                        </Form.Group>
                      </Col>
                      <Col xl={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xl={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Project"
                            name="user_project"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                          name="message"
                          required
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Button variant="danger" type="submit">
                          Send Message <MdOutlineDoubleArrow />
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
    </>
  );
}

export default Contact;
