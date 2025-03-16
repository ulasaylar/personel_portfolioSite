import "./css/App.css";
import "./css/nav.css";
import "./css/tech_stack.css";
import "./css/about_me.css";
import Nav from "./components/nav.jsx";
import TechStack from "./components/tech_stack.jsx";
import About_me from "./components/about_me.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <About_me />
      <TechStack />
    </>
  );
}
