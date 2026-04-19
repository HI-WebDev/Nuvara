import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import image1 from "../Assets/parfum.jpg";
import image2 from "../Assets/ps5.jpg";
import image3 from "../Assets/psp.png";
import image4 from "../Assets/pc.jpg";
import image5 from "../Assets/ip15.webp";
import Arrivals from "../Components/Arrivals";
import Browse from "../Components/Browse";
import FlashSales from "../Components/FlashSales";
import OurProducts from "../Components/OurProducts";
import Services from "../Components/Services";
import SwiperImage from "../Components/SwiperImage";
import ThisMonth from "../Components/ThisMonth";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
// import { Pagination } from 'swiper/modules';

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleClick1 = () => {
    setActive1(!active1);
  };
  const handleClick2 = () => {
    setActive2(!active2);
  };

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block col-lg-3">
              <div className="aside pt-5 d-flex flex-column">
                <span
                  className="mb-3 fw-bold d-flex align-items-center position-relative"
                  onClick={handleClick1}
                >
                  Woman’s Fashion
                  {active1 ? (
                    <FontAwesomeIcon
                      className="angle position-absolute ms-2"
                      icon={faAngleRight}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="angle position-absolute "
                      icon={faAngleDown}
                    />
                  )}
                </span>
                <span
                  className="mb-3 fw-bold d-flex align-items-center position-relative"
                  onClick={handleClick2}
                >
                  Men’s Fashion
                  {active2 ? (
                    <FontAwesomeIcon
                      className="angle position-absolute ms-2"
                      icon={faAngleRight}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="angle position-absolute "
                      icon={faAngleDown}
                    />
                  )}
                </span>
                <span className="mb-3 fw-bold">Electronics</span>
                <span className="mb-3 fw-bold">Home & Lifestyle</span>
                <span className="mb-3 fw-bold">Medicine</span>
                <span className="mb-3 fw-bold">Sports & Outdoor</span>
                <span className="mb-3 fw-bold">Baby’s & Toys</span>
                <span className="mb-3 fw-bold">Groceries & Pets</span>
                <span className=" fw-bold">Health & Beauty</span>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="image pt-5">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {images?.map((img, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <img className="img-fluid" src={img} alt="hero" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlashSales />
      <Browse />
      <ThisMonth />
      <SwiperImage />
      <OurProducts />
      <Arrivals />
      <Services />
    </>
  );
};

export default Home;
