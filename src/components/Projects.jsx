import React from "react";
import Chip from "@mui/material/Chip";
import customerlogin from "../img/projects/customerlogin.png";
import adminlogin from "../img/projects/adminlogin.png";
import customerpanel from "../img/projects/customerpanel.png";
import adminpanel from "../img/projects/adminpanel.png";
import editcustomers from "../img/projects/editcustomers.png";
import discounts from "../img/projects/discounts.png";
import previews from "../img/projects/previews.png";
import products from "../img/projects/products.png";
import register from "../img/projects/register.png";
import orders from "../img/projects/orders.png";
import orderhistory from "../img/projects/orderhistory.png";
import detail from "../img/projects/detail.png";
import basket from "../img/projects/basket.png";
import mainsite from "../img/projects/mainsite.png";
import sql1 from "../img/projects/sql1.png";
import mysql from "../img/mysql.png";
import laravel from "../img/laravel.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import csharp from "../img/csharp.png";
import react from "../img/react.png";
import nest from "../img/nest.png";
import mongo from "../img/mongodb.png";
import js from "../img/js.png";
import sql from "../img/sql.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import nest2 from "../img/projects/nestjs/2.png";
import nest3 from "../img/projects/nestjs/3.png";
import nest4 from "../img/projects/nestjs/4.png";
import nest5 from "../img/projects/nestjs/5.png";
import nest6 from "../img/projects/nestjs/6.png";
import nest7 from "../img/projects/nestjs/7.png";
import nest8 from "../img/projects/nestjs/8.png";
import nest10 from "../img/projects/nestjs/10.png";
import nest11 from "../img/projects/nestjs/11.png";
import blogai1 from "../img/projects/nestjs/blogai1.png";
import blogai2 from "../img/projects/nestjs/blogai2.png";
import blogai3 from "../img/projects/nestjs/blogai3.png";
import bank1 from "../img/projects/banktree/bank-1.png";
import bank2 from "../img/projects/banktree/bank-2.png";
import bank3 from "../img/projects/banktree/bank-3.png";
import bank4 from "../img/projects/banktree/bank-4.png";
import bank5 from "../img/projects/banktree/bank-5.png";
import bank6 from "../img/projects/banktree/bank-6.png";
import bank7 from "../img/projects/banktree/bank-7.png";
import bank8 from "../img/projects/banktree/bank-8.png";
import bank9 from "../img/projects/banktree/bank-9.png";
import ekobul1 from "../img/projects/ekobul/ekobul1.png";
import ekobul2 from "../img/projects/ekobul/ekobul2.png";
import ekobul3 from "../img/projects/ekobul/ekobul3.png";
import ekobul4 from "../img/projects/ekobul/ekobul4.png";
import ekobul5 from "../img/projects/ekobul/ekobul5.png";
import ekobul6 from "../img/projects/ekobul/ekobul6.png";
import ekobul7 from "../img/projects/ekobul/ekobul7.png";
import ekobul8 from "../img/projects/ekobul/ekobul8.png";
import cine1 from "../img/projects/cinemaworld/cine1.png";
import cine2 from "../img/projects/cinemaworld/cine2.png";
import cine3 from "../img/projects/cinemaworld/cine3.png";
import cine4 from "../img/projects/cinemaworld/cine4.png";
import cine5 from "../img/projects/cinemaworld/cine5.png";
import cine6 from "../img/projects/cinemaworld/cine6.png";
import cine7 from "../img/projects/cinemaworld/cine7.png";
import cine8 from "../img/projects/cinemaworld/cine8.png";
import cine9 from "../img/projects/cinemaworld/cine9.png";
import cine10 from "../img/projects/cinemaworld/cine10.png";
import butce1 from "../img/projects/butcem/butce1.jpeg";
import butce2 from "../img/projects/butcem/butce2.jpeg";
import butce3 from "../img/projects/butcem/butce3.jpeg";
import butce4 from "../img/projects/butcem/butce4.jpeg";
import butce5 from "../img/projects/butcem/butce5.jpeg";
import butce6 from "../img/projects/butcem/butce6.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { autocompleteClasses } from "@mui/material";
import CustomCvChips from "./viewCv";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
        <CustomCvChips />
      </div>
      <div className="gradient-divider" style={{ marginTop: "4rem" }}></div>
      <div className="projects-title" id="projects-banner">
        PROJECTS
      </div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Mobile App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> My Budget <br></br>
            <span>Project Purpose :</span>
            <br></br> It was a great project for me to gain insights into mobile app development and improve my skills. Developed using React Native on the frontend and Laravel on the backend, I aimed to provide users with the simplest way to track their income and expenses.
            <br /><br />
            On the technical side, I built a robust architecture for data security:
            <br />
            I used MySQL for database management.
            <br />
            Implemented Laravel Sanctum and Personal Access Tokens for secure authentication.
            <br />
            Thanks to this structure, every user's financial transactions are stored privately and isolated within the database.
            <br /><br />
            I also successfully handled API integrations, Axios configuration, and dynamic theme management.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child spec-flex-column-resp">
              <img src={react} alt="React Native" className="projects-img" />
              <span className="projects-tech-text"> React Native</span>
              <img src={laravel} alt="Laravel" className="projects-img" />
              <span className="projects-tech-text"> Laravel</span>
              <img src={mysql} alt="MySQL" className="projects-img" />
              <span className="projects-tech-text"> MySQL</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>
            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar/ReactNative_BudgetPlannerApp",
                  "_blank"
                )
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
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">23/12/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={butce1} style={imgStyleMobil} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={butce2} style={imgStyleMobil} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={butce3} style={imgStyleMobil} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={butce4} style={imgStyleMobil} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={butce5} style={imgStyleMobil} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={butce6} style={imgStyleMobil} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> CinemaWorld <br></br>
            <span>Project Purpose :</span>
            <br></br> The purpose of this project was to develop a comprehensive and interactive web platform for cinema enthusiasts, utilizing the Laravel framework to ensure a robust, scalable, and maintainable application architecture. The platform is designed to offer a rich set of features, including user authentication, personalized movie tracking, social interaction through reviews, and a dedicated community forum.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child spec-flex-column-resp">
              <img src={laravel} alt="Nest.js" className="projects-img" />
              <span className="projects-tech-text"> Laravel</span>
              <img src={js} alt="Javascript" className="projects-img" />
              <span className="projects-tech-text"> Javascript</span>
              <img src={mysql} alt="MySQL" className="projects-img" />
              <span className="projects-tech-text"> MySQL</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>
            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar/CinemaWorld",
                  "_blank"
                )
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
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">19/12/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={cine1} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine2} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine3} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine4} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine5} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine6} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine7} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine8} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine9} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cine10} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> EkoBul <br></br>
            <span>Project Purpose :</span>
            <br></br> The purpose of this project is to develop a modern and interactive social networking platform designed for Izmir University of Economics students to connect in an anonymous and engaging way.
            <br /><br />
            The platform allows users to leave anonymous notes containing details such as date, time, and location, which other users can browse and respond to by sending connection requests.
            Each note owner can view the social media profiles of users who send requests and has the option to accept or decline them. Upon mutual approval, both users’ social media information becomes visible to each other under the “matched notes” section, creating a unique and meaningful connection experience.
            <br /><br />
            The system also includes features such as favoriting notes, rejecting requests (preventing access to the note owner’s information), and a filter system that enables users to search notes by specific date or location when the number of notes increases.
            Overall, the platform aims to provide a safe, intuitive, and fun environment for students to meet, interact, and form new connections based on shared experiences or interests.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child">
              <img src={nest} alt="Nest.js" className="projects-img" />
              <span className="projects-tech-text"> Nest.js</span>
              <img src={mysql} alt="MySQL" className="projects-img" />
              <span className="projects-tech-text"> MySQL</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>

            <Chip
              icon={<OpenInNewIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://ekobul.com.tr",
                  "_blank"
                )
              }
              size="small"
              label="Live"
              sx={{
                color: "white",
                width: 100,
                fontSize: 16,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#b18c1562",
                  color: "white",
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.7)",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
              variant="filled"
            />
          </div>
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">17/10/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={ekobul1} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul2} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul3} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul4} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul5} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul6} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul7} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ekobul8} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> Blog AI - Customer Site <br></br>
            <span>Project Purpose :</span>
            <br></br> This project represents the user-facing side of the Blog AI platform, designed with React to help customers effortlessly generate AI-driven blog content. It integrates seamlessly with the existing NestJS + MongoDB backend, utilizing the JWT-based authentication system implemented in the admin dashboard project to ensure secure and reliable access.
            <br /><br />
            Users can subscribe to monthly packages, which determine their usage limits and feature access. Within the platform, users can enter specific topic titles and keywords, from which the AI engine analyzes and generates complete, contextually rich blog articles.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child spec-flex-column-resp">
              <img src={nest} alt="Nest.js" className="projects-img" />
              <span className="projects-tech-text"> Nest.js</span>
              <img src={react} alt="React" className="projects-img" />
              <span className="projects-tech-text"> React</span>
              <img src={mongo} alt="MongoDB" className="projects-img" />
              <span className="projects-tech-text"> MongoDB</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>

          </div>
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">08/09/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={blogai1} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blogai2} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blogai3} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> BankTree <br></br>
            <span>Project Purpose :</span>
            <br></br> BankTree is a project I developed entirely on my own during my internship at Tigon Project.
            The application provides a seamless way for users to access all their IBANs through a single,
            unified link, simplifying personal finance management and improving accessibility.
            Built with Laravel and PHP, Banktree not only delivers a practical solution but also played a major role in my professional growth.
            Throughout the development process, I significantly improved my skills in backend development, authentication flows,
            and secure data handling, while also gaining a deeper understanding of building robust web applications.
            With its clean structure and user-friendly design, Banktree demonstrates both the technical value it offers
            and the hands-on experience it gave me in creating real-world applications.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child">
              <img src={laravel} alt="Laravel" className="projects-img" />
              <span className="projects-tech-text"> Laravel</span>
              <img src={mysql} alt="MySQL" className="projects-img" />
              <span className="projects-tech-text"> MySQL</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>


          </div>
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">29/08/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={bank9} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank3} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank2} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank4} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank5} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank6} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank7} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank8} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bank1} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> Blog AI - Admin Dashboard Site <br></br>
            <span>Project Purpose :</span>
            <br></br> This project showcases a full-featured admin dashboard
            that I developed using NestJS and MongoDB.
            The system supports both JWT-based authentication for API access
            and session-cookie-based login for admin users, ensuring flexible
            and secure access control.
            The dashboard is designed to allow administrators to manage customers,
            control subscription packages, and monitor data activity through a clean and responsive interface. With a modular and scalable backend architecture, it serves as the central management tool of the system,
            enabling smooth administration and easy future expansion.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child">
              <img src={nest} alt="Nest.js" className="projects-img" />
              <span className="projects-tech-text"> Nest.js</span>
              <img src={mongo} alt="MongoDB" className="projects-img" />
              <span className="projects-tech-text"> MongoDB</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>

          </div>
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">21/07/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={nest2} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest3} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest4} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest5} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest6} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest7} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest8} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest10} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest11} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
        .swiper {
          padding-bottom: 50px !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 10 !important;
          width: 70px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-pagination {
          bottom: 5px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 2rem;
          height: 2rem;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #fe7743;
        }
      `}
        </style>

      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Desktop App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> E-Commerce Management Panel <br></br>
            <span>Project Purpose :</span>
            <br></br> The purpose of this project is to create a dedicated
            management panel for an e-commerce system, allowing both customers
            and administrators to easily perform operations through the system.
            The system is developed using C# and works dynamically with a SQL
            Server database connection.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child">
              <img src={csharp} alt="C#" className="projects-img" />
              <span className="projects-tech-text">C#</span>
              <img src={sql} alt="SQL Server" className="projects-img" />
              <span className="projects-tech-text">SQL</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>

            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar/e_CommercePanel",
                  "_blank"
                )
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
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">04/05/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={customerlogin} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adminlogin} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={customerpanel} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adminpanel} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={editcustomers} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={discounts} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={previews} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={register} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={orders} alt="Slide 2" style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={orderhistory} alt="Slide 2" style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sql1} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
  .swiper {
    padding-bottom: 50px !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10 !important;
    width: 70px !important;
    height: 40px !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .swiper-pagination {
    bottom: 5px !important;
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 0.7;
    width: 2rem;
    height: 2rem;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fe7743;
  }
`}</style>
      </div>

      <div className="gradient-divider"></div>

      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
            <span className="projects-header-text">Website App</span>
            <br></br>
            <span>Project Name :</span>
            <br></br> E-Commerce Site <br></br>
            <span>Project Purpose :</span>
            <br></br> The purpose of this project is to develop a user-friendly
            and visually appealing e-commerce website where users can browse,
            and purchase various fashion and lifestyle products. The platform
            aims to provide a seamless shopping experience with product details
            and pricing information.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="projects-tech">
          <span className="tech">Tools & Frameworks</span>
          <div className="tech-children-cont-spec">
            <div className="tech-children-cont-child">
              <img src={react} alt="React" className="projects-img" />
              <span className="projects-tech-text"> React</span>
              <img src={js} alt="JavaScript" className="projects-img" />
              <span className="projects-tech-text"> JavaScript</span>
            </div>

            <div
              className="responsive-project-chip"
            >
            </div>

            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar/react_shoppingSite",
                  "_blank"
                )
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
          <div className="tech-date-cont">
            <span className="span-date">Date :</span> <span className="span-date-num">24/03/25</span>
          </div>
        </div>
      </div>
      <div
        className="responsive-project-swiper-cont"
        style={{
          width: "50vw",
          margin: "50px auto",
          position: "relative",
        }}
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={mainsite} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={detail} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={basket} style={imgStyle} />
          </SwiperSlide>
        </Swiper>
        <style>{`
  .swiper {
    padding-bottom: 50px !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10 !important;
    width: 70px !important;
    height: 40px !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .swiper-pagination {
    bottom: 5px !important;
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 0.7;
    width: 2rem;
    height: 2rem;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fe7743;
  }
`}</style>

      </div>
    </>
  );
}

const imgStyle = {
  width: "80%",
  height: "auto",
  borderRadius: "3rem",
  margin: "0 auto",
  display: "block",
};
const imgStyleMobil = {
  width: "22%",
  height: "420px",
  borderRadius: "3rem",
  margin: "0 auto",
  display: "block",
};

export default App;
