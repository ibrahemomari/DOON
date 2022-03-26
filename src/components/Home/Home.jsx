import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./home.scss";
import Particles from "react-tsparticles";
import ParticlesOptions from "../../Widgets/ParticlesOptions";
import Typed from "react-typed";
function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [cursTop, setCursTop] = useState(0);
  const [cursLeft, setCursLeft] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchStart, setGlitchStart] = useState(false);
  const startScrollY = () => {
    // console.log(window.scrollY);
    setScrollY(window.scrollY);
    window.scrollY > 350 ? setShowCursor(false) : setShowCursor(true);
    window.scrollY < 30 ? setGlitchStart(false) : setGlitchStart(true);
  };

  useEffect(() => {
    startScrollY();
    window.addEventListener("scroll", startScrollY);
  }, []);

  const test = () => {
    document.onmousemove = (event) => {
      setCursLeft(event.pageX);
      setCursTop(event.pageY);
    };
  };
  useEffect(() => {
    test();
    window.addEventListener("mousemove", test);
  }, []);

  return (
    <>
      <section
        className="section home-section"
        id="homeSection"
        style={{
          filter: `hue-rotate(${scrollY}deg) grayscale(${scrollY}%)`,
        }}
      >
        <div className="shapes-container">
          <img
            src={require("../../assets/images/svg/space1.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space2.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space3.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space4.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space1.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space2.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space3.svg").default}
            alt="svgs"
          />
          <img
            src={require("../../assets/images/svg/space4.svg").default}
            alt="svgs"
          />
        </div>
        <Particles id="tsparticles" options={ParticlesOptions} />
        <Container>
          <Row>
            <video
              src={require("../../assets/videos/particles_Trim.mp4")}
              muted
              autoPlay
              loop
            ></video>
            <h2>
              <span>{"<>"}</span>Ibrahem AL-Omari<span>{"</>"}</span>
            </h2>

            {glitchStart && (
              <>
                <h2>
                  <span>{"<>"}</span>Ibrahem AL-Omari<span>{"</>"}</span>
                </h2>
                <h2>
                  <span>{"<>"}</span>Ibrahem AL-Omari<span>{"</>"}</span>
                </h2>
              </>
            )}
          </Row>
          <div className="home-typed-container">
            <Typed
              strings={["| 22 - 11 - 1996", "| JORDANIAN", "| 00962"]}
              typeSpeed={90}
              backSpeed={10}
              loop
            ></Typed>
          </div>
        </Container>
        {showCursor && (
          <div
            className="curs"
            style={{ top: `${cursTop - 30}px`, left: `${cursLeft - 150}px` }}
          ></div>
        )}
        {/* <div className="background">
          <div
            className="mounts"
            style={{ transform: `translateY(-${scrollY}px)` }}
          >
            <div
              className="clouds1"
              style={{ transform: `translateY(-${scrollY}px)` }}
            ></div>
            <div
              className="clouds2"
              style={{ transform: `translateY(-${scrollY}px)` }}
            ></div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Home;
