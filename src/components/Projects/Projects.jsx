import React, { useEffect } from "react";
import {
  Card,
  Col,
  Container,
  NavLink,
  OverlayTrigger,
  Row,
  Tooltip,
  Button,
} from "react-bootstrap";
import "./projects.scss";
import { Fade } from "react-reveal";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
function Projects() {
  const netlifyTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      VISIT
    </Tooltip>
  );
  const gitHubTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );

  return (
    <>
      <section className="projects-section" id="projects">
        <Container>
          <Row>
            <Fade right>
              <div className="section-title">
                <h2>
                  <span>{"<>"} </span>Projects<span> {"</>"}</span>
                </h2>
              </div>
            </Fade>
          </Row>
          <Row>
            <Col xl={5}>
              <div className="project-lc">
                <img
                  src={require("../../assets/images/svg/project.svg").default}
                  alt="projects"
                />
                <div className="project-text">
                  <h3>You have a new Project</h3>
                  <p>Quick response, neat work, and on time.</p>
                  <Button variant="danger" href="#contact">
                    Contact Me <MdOutlineDoubleArrow />
                  </Button>
                </div>
              </div>
            </Col>
            <Col xl={7}>
              <div className="project-rc">
                <Carousel
                  swipeable
                  centerMode
                  infiniteLoop
                  useKeyboardArrows
                  centerSlidePercentage={60}
                  autoPlay
                >
                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/alkalidiah.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>alkalidiya</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/ibrahemomari/alkalidiya"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://alkhalidiya.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/craft.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>Craft Services</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/volcanoconiosis"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://craft-services.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/maqrumah.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>maqrumah jo</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/ibrahemomari/Maqrumah-jo"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://maqruma-jo.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/valorant.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>valorant (clone)</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/ibrahemomari/valorant-clone"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://valorantgame.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/o2art.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>o2 art</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/O2-developres"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://o2art.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      src={require("../../assets/images/ProjectsImg/royal.jpg")}
                    />
                    <Card.Body>
                      <Card.Title>royal knights</Card.Title>

                      <div className="card-btns">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={gitHubTooltip}
                        >
                          <a
                            href="https://github.com/ibrahemomari/Royal-Knights"
                            target="_blank"
                          >
                            <FaGithubSquare />
                          </a>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={netlifyTooltip}
                        >
                          <a href="https://royal-knights.netlify.app" target="_blank">
                            <AiOutlineLink />
                          </a>
                        </OverlayTrigger>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
