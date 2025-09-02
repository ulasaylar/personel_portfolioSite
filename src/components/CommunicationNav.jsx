import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import github from "../img/github.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function CommunicationNav() {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  return (
    <div className="main-cont" style={{ flexDirection: "column" }}>
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
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <LightTooltip title="ulasaylar@gmail.com">
          <Button
            variant="outlined"
            startIcon={<MailOutlineIcon />}
            onClick={() => (window.location.href = "mailto:ulasaylar@gmail.com")}
            sx={{
              textTransform: "none",
              fontSize: "1.4rem",
              border: "2px solid #17d3c3ff",
              borderRadius: "1rem",
              color: "#17d3c3ff",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          >
            Send Mail
          </Button>
        </LightTooltip>
      </div>
    </div>
  );
}

export default CommunicationNav;
