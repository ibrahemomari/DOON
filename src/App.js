import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./Widgets/ParallaxImage";
import ParallaxRocket from "./Widgets/ParallaxRocket";
import Skills from "./components/Skills/Skill";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Marker from "./Widgets/Marker";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />
        <ParallaxImage />
        <ParallaxRocket />
        <About />
        <Skills />
        <Qualification />
        <Marker/>
        <Services/>
        <Projects/>
        <Contact/>
        <section className="x"></section>
      </ParallaxProvider>
    </>
  );
}

export default App;
