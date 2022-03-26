import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { ImRocket } from "react-icons/im";
import "./widget.style.scss";
function ParallaxImage() {
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
      <Parallax translateY={[0, -500]} speed={+5} id="imgParax">
        <Container className="para-Image-container">
        <Container className="clouds"></Container>
        </Container>
        
        {
          <Container className="scroll-down-container" id="scrollBtnCont">
            <Row>
              <Button variant="dark" href="#about">
                <ImRocket />
                SCROLL DOWN
                <ImRocket />
              </Button>
            </Row>
          </Container>
        }
      </Parallax>
    </>
  );
}

export default ParallaxImage;
