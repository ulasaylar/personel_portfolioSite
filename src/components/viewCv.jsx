import * as React from "react";

import {
    Box,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

import { useNavigate } from "react-router-dom";

export default function CvButtons() {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleDownload = (fileName) => {
        const link = document.createElement("a");

        link.href = `/${fileName}`;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        handleCloseMenu();
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
            }}
        >
            <Button
                variant="outlined"
                startIcon={<FileOpenRoundedIcon />}
                onClick={() => navigate("/cv")}
                sx={buttonStyle}
            >
                View CV
            </Button>
            <React.Fragment>
                <Button
                    variant="contained"
                    startIcon={<DownloadRoundedIcon />}
                    onClick={handleOpenMenu}
                    sx={downloadButtonStyle}
                >
                    Download CV
                </Button>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    PaperProps={{
                        sx: {
                            mt: 1,
                            borderRadius: "16px",
                            minWidth: 220,
                            background: "#1e1e1e",
                            color: "white",
                            border: "1px solid #333",
                            backdropFilter: "blur(10px)",
                            "& .MuiMenuItem-root": {
                                py: 1.5,
                                borderRadius: "10px",
                                mx: 1,
                                my: 0.5,
                                transition: "0.2s ease",
                                "&:hover": {
                                    backgroundColor: "#c07218",
                                },
                            },
                        },
                    }}
                >
                    <MenuItem
                        onClick={() =>
                            handleDownload("ulasaylar_cv_2.pdf")
                        }
                    >
                        <ListItemIcon>
                            <DownloadRoundedIcon
                                sx={{ color: "white", fontSize: "2rem" }}
                            />
                        </ListItemIcon>

                        <ListItemText
                            primary="Download English CV"
                            primaryTypographyProps={{
                                fontSize: "1.5rem",
                                fontWeight: 500,
                            }}
                        />
                    </MenuItem>

                    <MenuItem
                        onClick={() =>
                            handleDownload("ulasaylar_cv_tr_2.pdf")
                        }
                    >
                        <ListItemIcon>
                            <DownloadRoundedIcon
                                sx={{ color: "white", fontSize: "2rem" }}
                            />
                        </ListItemIcon>

                        <ListItemText
                            primary="Türkçe CV İndir"
                            primaryTypographyProps={{
                                fontSize: "1.5rem",
                                fontWeight: 500,
                            }}
                        />
                    </MenuItem>
                </Menu>
            </React.Fragment>
        </Box>
    );
}

const buttonStyle = {
    height: "4rem",
    px: 2,
    borderRadius: "16px",
    fontSize: "2rem",
    fontWeight: 600,
    textTransform: "none",
    color: "white",
    border: "2px solid #c07218ff",
    transition: "all 0.25s ease",
    "&:hover": {
        backgroundColor: "#c07218ff",
        color: "white",
        transform: "scale(1.05)",
        cursor: "pointer",
    },
};

const downloadButtonStyle = {
    height: "4rem",
    px: 2,
    borderRadius: "16px",
    fontSize: "2rem",
    fontWeight: 600,
    textTransform: "none",
    background: "#c07218",
    transition: "all 0.25s ease",
    "&:hover": {
        backgroundColor: "#c07218ff",
        color: "white",
        transform: "scale(1.05)",
        cursor: "pointer",
    },
};