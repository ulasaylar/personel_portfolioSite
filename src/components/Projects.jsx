import React from "react";
import customerlogin from "../img/projects/customerlogin.png";
import adminlogin from "../img/projects/adminlogin.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <div className="projects-desc-cont-parent">
        <div className="projects-desc-cont">
          <p>
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
      <div
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
            <img src={customerlogin} alt="Slide 1" style={imgStyle} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={adminlogin} alt="Slide 2" style={imgStyle} />
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
