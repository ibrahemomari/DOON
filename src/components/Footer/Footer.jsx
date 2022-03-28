import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";
function Footer() {
  return (
    <>
      <Parallax translateY={[-100, 100]}>
        <section className="footer">
          <Container>
            <Row>
              <Col xl={6}>
                <div className="social-container">
                  <h3 className="list-title">Follow Me : </h3>
                  <ul>
                    <li>
                      <a href="">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <AiFillFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <AiFillTwitterCircle />
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="quote">
                  “Learn as if you will live forever, live like you will die
                  tomorrow.”
                  <br /> <span> — Mahatma Gandhi —</span>
                </p>
              </Col>
              <Col xl={6}></Col>
            </Row>
          </Container>
          <div className="rocket-div">
            <div class="rocket">
              <div class="rocket-body">
                <div class="body"></div>
                <div class="fin fin-left"></div>
                <div class="fin fin-right"></div>
                <div class="window"></div>
              </div>
              <div class="exhaust-flame"></div>
              <ul class="exhaust-fumes">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="star">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="footer-name">
            <Parallax translateY={[80, -50]} translateX={[100, -100]}>
              <h2>
                ibrahem <br />
                alomari
              </h2>
            </Parallax>
          </div>
          <div className="footer-copyright">
            <p>
              &copy;2022 <span> I.H.O</span>
            </p>
          </div>
        </section>
      </Parallax>
    </>
  );
}

export default Footer;
