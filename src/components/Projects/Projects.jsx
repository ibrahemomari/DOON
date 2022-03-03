import React from "react";
import {
  Card,
  Col,
  Container,
  NavLink,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import "./projects.scss";
import { Fade } from "react-reveal";
import { SiNetlify } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

function Projects() {
  const netlifyTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Netlify
    </Tooltip>
  );
  const gitHubTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );
  return (
    <>
      <Parallax translateY={(-20, 20)} scale={[2, 0]}>
        <Row>
          <Fade right>
            <div className="section-title">
              <h2>
                <span>{"<>"} </span>Projects<span> {"</>"}</span>
              </h2>
            </div>
          </Fade>
        </Row>
        <section className="projects-section">
          <Container>
            <Row>
              <Col xl={5}>
                <Card>
                  <Card.Title>O2 Art</Card.Title>
                  <Card.Text>Jul-2021</Card.Text>
                  <Card.Body>
                    <h1>O2 Art</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://o2art.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/O2-developres"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={7}>
                <Card>
                  <Card.Title>Craft Services</Card.Title>
                  <Card.Text>Oct - 2021</Card.Text>
                  <Card.Body>
                    <h1>Craft Services</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://craft-services.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/volcanoconiosis"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={4}>
                <Card>
                  <Card.Title>Maqruma-JO</Card.Title>
                  <Card.Text>Dec - 2020</Card.Text>
                  <Card.Body>
                    <h1>Maqruma-JO</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://maqruma-jo.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/ibrahemomari/Maqrumah-jo"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card>
                  <Card.Title>Valorant</Card.Title>
                  <Card.Text>Oct - 2021</Card.Text>
                  <Card.Body>
                    <h1>Valorant</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://valorantgame.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/ibrahemomari/valorant-clone"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card>
                  <Card.Title>Royal Knights</Card.Title>
                  <Card.Text>Jun - 2022</Card.Text>
                  <Card.Body>
                    <h1>Royal Knights</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://royal-knights.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/ibrahemomari/Royal-Knights"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={12}>
                <Card>
                  <Card.Title>Alkhalidiya</Card.Title>
                  <Card.Text>Feb - 2022</Card.Text>
                  <Card.Body>
                    <h1>Alkhalidiya</h1>
                    <div className="deploy-container">
                      <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={netlifyTooltip}
                      >
                        <NavLink
                          href="https://alkhalidiya.netlify.app/"
                          target="_blank"
                        >
                          <SiNetlify />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                    <div className="gitHub-container">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={gitHubTooltip}
                      >
                        <NavLink
                          href="https://github.com/ibrahemomari/alkalidiya"
                          target="_blank"
                        >
                          <FaGithubSquare />
                        </NavLink>
                      </OverlayTrigger>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </section>
      </Parallax>

    </>
  );
}

export default Projects;
