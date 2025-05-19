import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import github from "../img/github.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function CommunicationNav() {
  return (
    <div className="main-cont">
      <div className="chip-cont">
        <div className="chip-items">
          <Chip
            icon={<LinkedInIcon color="white" />}
            clickable
            onClick={() =>
              window.open("https://www.linkedin.com/in/ulasaylar/", "_blank")
            }
            label="LinkedIn"
            size="small"
            sx={{
              color: "white",
              width: 100,
              fontSize: 16,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                boxShadow: "0 0 8px rgba(25, 118, 210, 0.7)",
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
            variant="filled"
          />
        </div>
        <div className="chip-items">
          <Chip
            icon={<GitHubIcon color="white" />}
            clickable
            onClick={() =>
              window.open("https://github.com/ulasaylar", "_blank")
            }
            size="small"
            label="GitHub"
            sx={{
              color: "white",
              width: 100,
              fontSize: 16,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#4d4d4d",
                color: "white",
                boxShadow: "0 0 8px rgba(25, 118, 210, 0.7)",
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
            variant="filled"
          />
        </div>
        <div className="chip-items">
          <Chip
            icon={<InstagramIcon color="white" />}
            clickable
            onClick={() =>
              window.open("https://www.instagram.com/ulasaylar", "_blank")
            }
            label="Instagram"
            size="small"
            sx={{
              color: "white",
              width: 120,
              fontSize: 16,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
                boxShadow: "0 0 8px rgba(25, 118, 210, 0.7)",
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}

export default CommunicationNav;
