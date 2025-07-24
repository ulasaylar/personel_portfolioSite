import Avatar from "@mui/material/Avatar";
import icon from "../img/icon.jpg";
import ShinyText from "./ShinyText";
import CurvedText from "./CurvedText";
import TextAnimation from "./TextAnimation";

const About_me = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-left-cont">
        <Avatar
          alt="Ulaş Aylar"
          src={icon}
          sx={{
            width: 200,
            height: 200,
            bgcolor: "#e8e8e8",
            border: "4px solid #FE7743",
          }}
          imgProps={{
            style: { transform: "scale(1.07)" },
          }}
        />
      </div>
      <div className="about-me-right-cont">
        <TextAnimation></TextAnimation>
        <CurvedText 
          marqueeText="Thank you for visiting my website!"
          speed={1}
          curveAmount={0}
          direction="left"
          interactive={true}
          className="custom-text-style"/>
        <br></br>
        <ShinyText
          text="This is a portfolio site that I’ve designed and built entirely myself."
          disabled={false}
          speed={3}
          className="shiny-text-spec"
        />
        <br></br>

        <ShinyText
          text="I’m currently studying Computer Programming at İzmir
          University of Economics."
          disabled={false}
          speed={3}
          className="shiny-text-spec"
        />
        <br></br>

        <ShinyText
          text="Here, you’ll find some of the
          projects I’ve worked on."
          disabled={false}
          speed={3}
          className="shiny-text-spec"
        />
        <br></br>
        <ShinyText
          text="Feel free to explore my work, and
          don’t hesitate to reach out if you’d like to collaborate or just have
          a chat!"
          disabled={false}
          speed={3}
          className="shiny-text-spec"
        />
      </div>
    </div>
  );
};

export default About_me;
