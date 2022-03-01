import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./Widgets/ParallaxImage";
import ParallaxRocket from "./Widgets/ParallaxRocket";
import Skills from "./components/Skills/Skill";
import Qualification from "./components/Qualification/Qualification";
function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />
        <ParallaxImage />
        <ParallaxRocket />
        <About />
        <Skills />
        <Qualification/>
        <section className="x"></section>
      </ParallaxProvider>
    </>
  );
}

export default App;
