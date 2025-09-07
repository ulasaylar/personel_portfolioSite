import * as React from 'react';
import Chip from '@mui/material/Chip';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useNavigate } from 'react-router-dom';

export default function CustomCvChips() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cv");
    };

    return (
        <Chip
            label="View my CV"
            onClick={handleClick}
            icon={<FileOpenIcon color='white' fontSize='35px' />}
            sx={{
                fontSize: "2rem",
                height: "4rem",
                paddingX: 2,
                color: "#fff",
                transition: "all 0.3s ease",
                border: "2px solid #c07218ff",
                "&:hover": {
                    backgroundColor: "#c07218ff",
                    color: "white",
                    transform: "scale(1.05)",
                    cursor: "pointer",
                },
            }}
        />
    );
}
