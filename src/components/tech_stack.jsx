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
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img
              id="csharp-img"
              className="tech-img"
              src={csharp}
              alt="C#"
              title="C#"
            />
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img
              id="js-img"
              className="tech-img"
              src={js}
              alt="Javascript"
              title="Javascript"
            />
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img className="tech-img" src={react} alt="React" title="React" />
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img
              className="tech-img"
              src={python}
              alt="Python"
              title="Python"
            />
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img
              id="sql-img"
              className="tech-img"
              src={sql}
              alt="Sql"
              title="Sql"
            />
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <img className="tech-img" src={git} alt="Git" title="Git" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TechStack;
