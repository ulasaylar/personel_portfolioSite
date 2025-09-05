import * as React from 'react';
import Chip from '@mui/material/Chip';
import FileOpenIcon from '@mui/icons-material/FileOpen';

export default function CustomCvChips() {
    const handleClick = () => {
        const pdfUrl = "/ulas_cv2.pdf";
        const faviconUrl = "/PDF_ico.ico";
        const newWindow = window.open();
        if (newWindow) {
            newWindow.document.title = "Ulaş Aylar - CV";

            const link = newWindow.document.createElement("link");
            link.rel = "icon";
            link.href = faviconUrl;
            newWindow.document.head.appendChild(link);

            const iframe = newWindow.document.createElement("iframe");
            iframe.src = pdfUrl;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.border = "none";
            newWindow.document.body.style.margin = "0";
            newWindow.document.body.appendChild(iframe);
        }
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