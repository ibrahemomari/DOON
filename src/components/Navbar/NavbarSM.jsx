import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./navbarSM.scss";
import {
  AiOutlineAppstore,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { SiOpslevel } from "react-icons/si";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function NavbarSM() {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar fixed="bottom" className="navbar-sm ">
        <div className="toggle-btn-container">
          <button onClick={showMenuHandler}>
            {
              showMenu?<IoClose/>:<AiOutlineAppstore />
            }
            
            
          </button>
        </div>
        <div className="nv-body">
          <Container className={showMenu?"show":""}>
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <label htmlFor="list">
                  <div className="line"></div>
                  <span>I.H.O</span>
                </label>
              </Col>
              <Col xs={4}></Col>
            </Row>
            <Row>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#about">
                  <BiUser />
                  <br />
                  About
                </a>
              </Col>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#skills">
                  <GiSkills />
                  <br />
                  Skills
                </a>{" "}
              </Col>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#qualification">
                  <SiOpslevel />
                  <br />
                  Qualification
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#services">
                  <MdOutlineHomeRepairService />
                  <br />
                  Services
                </a>
              </Col>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#projects">
                  <AiOutlineFundProjectionScreen />
                  <br />
                  Projects
                </a>
              </Col>
              <Col xs={4}>
                <a className="btn btn-dark btn-sm" href="#contact">
                  <IoArrowRedoOutline />
                  <br />
                  Contact
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarSM;
