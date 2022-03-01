import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { ImRocket } from "react-icons/im";
import "./widget.style.scss";
function ParallaxImage() {
  return (
    <>
      <Parallax translateY={[-40, -100]} speed={-5}>
        <Container className="para-Image-container"></Container>
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
