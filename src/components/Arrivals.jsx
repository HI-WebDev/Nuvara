import Header from "./helpers/Title";
import arriv1 from "../Assets/arriv1.png";
import arriv2 from "../Assets/arriv2.png";
import arriv3 from "../Assets/arriv3.png";
import arriv4 from "../Assets/arriv4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import autoplay
import { Autoplay } from "swiper/modules";

const Arrivals = () => {
  return (
    <div className="arrivals mt-5 mb-5">
      <div className="container">
        <Header title="Featured" />
        <h1 className="fs-3 fw-bold mt-0 mb-4 mb-lg-5 text-center text-md-start">
          New Arrival
        </h1>
        <div className="row">
          <div className="col-12 col-md-6 mb-2 mb-lg-0">
            {/* first swiper */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay]}
              className="mySwiper img-fluid"
            >
              <SwiperSlide>
                <div className="image">
                  <img className="img-fluid" src={arriv1} alt="arriv1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img className="img-fluid" src={arriv1} alt="arriv1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <img className="img-fluid" src={arriv1} alt="arriv1" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-12 col-md-6">
            <div className="image d-flex flex-column">
              {/* second swiper */}
              <div className="second">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2600, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper img-fluid"
                >
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv2} alt="arriv2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv2} alt="arriv2" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv2} alt="arriv2" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* three and four swiper */}
              <div className="three d-flex justify-content-between mt-2 mt-lg-3">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2700, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper img-fluid"
                >
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv3} alt="arriv3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv3} alt="arriv3" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv3} alt="arriv3" />
                    </div>
                  </SwiperSlide>
                </Swiper>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper img-fluid"
                >
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv4} alt="arriv4" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv4} alt="arriv4" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="img-fluid">
                      <img className="img-fluid" src={arriv4} alt="arriv4" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Arrivals;
