import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./navbar.scss";
function Navbar() {
  const linksHandler = () => {
    let links = document.querySelectorAll(".link");
    links.forEach((el) => {
      el.addEventListener("click", () => {
        links.forEach((el) => {
          el.classList.remove("active");
        });
        el.classList.add("active");
      });
    });
  };
  useEffect(() => {
    linksHandler();
  }, []);

  return (
    <>
      <Container className="list-container">
        <Row>
          <div className="nav-list">
            <label htmlFor="list"><div className="line"></div><span>I.H.O</span></label>
            <ul id="list">
              <li>
                <a href="#about" className="link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#qualification" className="link">
                  Qualification
                </a>
              </li>
              <li>
                <a href="#services" className="link">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;
