import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./intro.scss";
import { Circle } from "rc-progress";

function Intro(props) {
  useEffect(()=>{
    if (props.percentage>115) {
        const cols=document.querySelectorAll(".col");
        console.log(cols);
        cols.forEach((el,idx)=>{
            el.classList.add(`anmi-${idx}`);
        })
    }
  },[props.percentage])
  return (
    <>
      <section className="intro-section">
        <Container>
          <Row>
            <Col xs={2} className="col2-1 col"></Col>
            <Col xs={9} className="col"></Col>
            <Col xs={1}className="col"> </Col>
          </Row>
          <Row>
            <Col xs={12} className="col">
              <Circle
                percent={props.percentage / 1.2}
                strokeWidth="4"
                strokeColor="#D3D3D3"
              />
              <h1>Loading</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={7} className="col"></Col>
            <Col xs={3} className="col"></Col>
            <Col xs={2} className="col2-2 col"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Intro;
