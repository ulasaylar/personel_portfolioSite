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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import csharp from "../img/csharp.png";
import react from "../img/react.png";
import js from "../img/js.png";
import sql from "../img/sql.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { autocompleteClasses } from "@mui/material";

function App() {
  return (
    <>
      <div className="gradient-divider"></div>
      <div className="projects-title" id="projects-banner">
        PROJECTS
      </div>
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
          <span className="tech">🚀 Tech Stack :</span>
          <img src={csharp} alt="C#" />
          <span className="projects-tech-text">C# ,</span>
          <img src={sql} alt="SQL Server" />
          <span className="projects-tech-text">SQL</span>
          <div
            className="responsive-project-chip"
            style={{ marginLeft: "31rem" }}
          >
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
          <span className="tech">🚀 Tech Stack :</span>
          <img src={react} alt="React" />
          <span className="projects-tech-text"> React ,</span>
          <img src={js} alt="JavaScript" />
          <span className="projects-tech-text"> JavaScript</span>
          <div
            className="responsive-project-chip"
            style={{ marginLeft: "23rem" }}
          >
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
