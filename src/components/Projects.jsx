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
import nest2 from "../img/projects/nestjs/2.png";
import nest3 from "../img/projects/nestjs/3.png";
import nest4 from "../img/projects/nestjs/4.png";
import nest5 from "../img/projects/nestjs/5.png";
import nest6 from "../img/projects/nestjs/6.png";
import nest7 from "../img/projects/nestjs/7.png";
import nest8 from "../img/projects/nestjs/8.png";
import nest10 from "../img/projects/nestjs/10.png";
import nest11 from "../img/projects/nestjs/11.png";
import nest13 from "../img/projects/nestjs/mongo1.png";
import nest14 from "../img/projects/nestjs/mongo2.png";
import nest15 from "../img/projects/nestjs/mongo3.png";
import nest16 from "../img/projects/nestjs/mongo4.png";
import bank1 from "../img/projects/banktree/bank-1.png";
import bank2 from "../img/projects/banktree/bank-2.png";
import bank3 from "../img/projects/banktree/bank-3.png";
import bank4 from "../img/projects/banktree/bank-4.png";
import bank5 from "../img/projects/banktree/bank-5.png";
import bank6 from "../img/projects/banktree/bank-6.png";
import bank7 from "../img/projects/banktree/bank-7.png";
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

            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar",
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
            <img src={bank1} style={imgStyle} />
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

            <Chip
              icon={<GitHubIcon color="white" />}
              clickable
              onClick={() =>
                window.open(
                  "https://github.com/ulasaylar",
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
          <SwiperSlide>
            <img src={nest13} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest14} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest15} style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nest16} style={imgStyle} />
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

export default App;
