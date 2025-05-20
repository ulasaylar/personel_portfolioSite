import "./css/App.css";
import "./css/nav.css";
import "./css/tech_stack.css";
import "./css/about_me.css";
import "./css/particles.css";
import "./css/comnav.css";
import "./css/projects.css";
import Nav from "./components/Nav.jsx";
import Tech_Stack from "./components/Tech_stack.jsx";
import About_me from "./components/About_me.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";
import CommunicationNav from "./components/CommunicationNav.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Nav />
      <CommunicationNav />
      <About_me />
      <Tech_Stack />
      <Projects />
    </div>
  );
}
