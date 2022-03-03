import React from "react";
import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

function Marker() {
  return (
    <>
      <div className="marker-container">
        <Container>
          <Row>
          <Parallax  scale={[0.01, 1, 'easeInQuad']} >
              <div className="line l1"></div>
            </Parallax>
          <Parallax  scale={[0.05, 1, 'easeInQuad']} rotate={[5,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.1, 1, "easeInQuad"]} rotate={[10,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.2, 1, "easeInQuad"]} rotate={[15,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.3, 1, "easeInQuad"]} rotate={[20,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.4, 1, "easeInQuad"]} rotate={[25,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.5, 1, "easeInQuad"]} rotate={[30,0]}>
              <div className="line l1"></div>
            </Parallax>
            <Parallax scale={[0.6, 1, "easeInQuad"]} rotate={[35,0]}>
              <div className="line l3"></div>
            </Parallax>
            <Parallax scale={[0.7, 1, "easeInQuad"]} rotate={[40,0]}>
              <div className="line l3"></div>
            </Parallax>
            <Parallax scale={[0.8, 1, "easeInQuad"]} rotate={[45,0]}> 
              <div className="line l3"></div>
            </Parallax>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Marker;
