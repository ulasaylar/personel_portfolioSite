import csharp from "../img/csharp.png";
import js from "../img/js.png";
import git from "../img/git.png";
import sql from "../img/sql.png";
import python from "../img/python.png";
import react from "../img/react.png";
import php from "../img/php.png";
import java from "../img/java.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}));

const TechStack = () => {
  return (
    <div className="tech-div">
      <h1 className="tech-h1">Tech Stack</h1>
      <ul className="tech-ul">
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="C#">
              <img id="csharp-img" className="tech-img" src={csharp} alt="C#" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Javascript">
              <img id="js-img" className="tech-img" src={js} alt="Javascript" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="React">
              <img className="tech-img" src={react} alt="React" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Python">
              <img className="tech-img" src={python} alt="Python" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Java">
              <img className="tech-img" src={java} alt="Java" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Php">
              <img className="tech-img" src={php} alt="Php" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Sql">
              <img id="sql-img" className="tech-img" src={sql} alt="Sql" />
            </LightTooltip>
          </li>
        </div>
        <div className="tech-li-container">
          <li className="tech-li-items">
            <LightTooltip title="Git">
              <img className="tech-img" src={git} alt="Git" />
            </LightTooltip>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TechStack;
