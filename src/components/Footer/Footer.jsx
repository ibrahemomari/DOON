import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./footer.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
function Footer() {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <div className="social-container">
              <h3 className="list-title">Follow Me :</h3>
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
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
