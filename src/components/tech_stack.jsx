import csharp from "../img/csharp.png";
import js from "../img/js.png";
import git from "../img/git.png";
import sql from "../img/sql.png";
import python from "../img/python.png";
import react from "../img/react.png";

const TechStack = () => {
  return (
    <div className="tech-div">
      <h1 className="tech-h1">Tech Stack</h1>
      <ul className="tech-ul">
        <li className="tech-li-items">
          <img className="tech-img" src={csharp} alt="C#" />
        </li>
        <li className="tech-li-items">
          <img className="tech-img" src={js} alt="Javascript" />
        </li>
        <li className="tech-li-items">
          <img className="tech-img" src={react} alt="React" />
        </li>
        <li className="tech-li-items">
          <img className="tech-img" src={python} alt="Python" />
        </li>
        <li className="tech-li-items">
          <img className="tech-img" src={sql} alt="Sql" />
        </li>
        <li className="tech-li-items">
          <img className="tech-img" src={git} alt="Git" />
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
