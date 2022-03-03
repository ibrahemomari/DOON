import React from "react";
import { Container } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

function ParallaxRocket() {
  return (
    <Parallax
      translateY={[0, -500]}
      speed={-5}
      rotate={[-100, 100]}
      style={{ position: "absolute", width: "100%" ,left:"0",top:"85em",}}
    >
      {/* <Container className="para-rocket-container"> */}
       <img
        src={require("../assets/images/rocket.gif")}
        alt=""
        className="rocket-img"
      />
       
      {/* </Container> */}
    </Parallax>
  );
}

export default ParallaxRocket;
