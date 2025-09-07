import React from 'react'
import "../css/App.css";
import "../css/nav.css";
import "../css/tech_stack.css";
import "../css/about_me.css";
import "../css/particles.css";
import "../css/comnav.css";
import "../css/projects.css";
import "../css/responsive.css";
import Nav from "../components/Nav.jsx";
import Tech_Stack from "../components/Tech_stack.jsx";
import About_me from "../components/About_me.jsx";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import CommunicationNav from "../components/CommunicationNav.jsx";
import Projects from "../components/Projects.jsx";
import { BrowserRouter, Routes, Route, } from "react-router";

function CvPage() {
    return (
        <div style={{ margin: 0, padding: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
            <iframe
                src="/ulas_cv3.pdf"
                title="Ulaş Aylar - CV"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    display: "block",
                }}
            />
        </div>
    );
}

function HomePage() {
    return (
        <>
            <ParticlesBackground />
            <Nav />
            <CommunicationNav />
            <About_me />
            <Tech_Stack />
            <Projects />
        </>
    );
}

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cv" element={<CvPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router