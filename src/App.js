import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./Widgets/ParallaxImage";
import ParallaxRocket from "./Widgets/ParallaxRocket";
import Skills from "./components/Skills/Skill";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Marker from "./Widgets/Marker";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import { useEffect, useState } from "react";
import ReactPageScroller from "react-page-scroller";
import NavbarSM from "./components/Navbar/NavbarSM";
function App() {
  const [percentage, setPercentage] = useState(0);
  const [enter, setEnter] = useState(
    localStorage.getItem("intro") === "true" ? true : false
  );
  const percentageHandler = (time) => {
    console.log(time);
    setPercentage(time);
    setTimeout(() => {
      time < 135 ? percentageHandler(time + 1) : showHandler(true);
    }, 100);
  };
  const showHandler = (value) => {
    localStorage.setItem("intro", value);
    setEnter(value);
  };
  useEffect(() => {
    if (
      localStorage.getItem("intro") === "false" ||
      localStorage.getItem("intro") === null
    ) {
      percentageHandler(1);
    }
  }, []);
  return (
    <>
      {enter === false ? (
        <Intro percentage={percentage} />
      ) : (
        <ParallaxProvider>
          <Container className="app-container">
          <NavbarSM/>
            <Row>
              <Col xl={1}>
                <Navbar />
              </Col>
              <Col xl={11}>
                <Home />
                <About />

                <Skills />

                <Qualification />

                <Marker />

                <Services />

                <Projects />

                <Contact />

                <ParallaxRocket />
                <Footer />
                {/* <section className="x"></section> */}
              </Col>
            </Row>
          </Container>
        </ParallaxProvider>
      )}
    </>
  );
}

export default App;
