import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import arriv1 from "../Assets/arrival1.webp";
import arriv2 from "../Assets/arrival2.webp";
import arriv3 from "../Assets/arrival3.webp";
import arriv4 from "../Assets/arrival4.webp";

import Header from "./Title";

const Arrivals = () => {
  return (
    <div className="arrivals mt-5 mb-5">
      <div className="container">
        <Header title="Featured" />
        <h1 className="fs-3 fw-bold mt-0 mb-4 mb-lg-5 text-center text-md-start">
          New Arrivals
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
              className="mySwiper"
            >
              {[1, 2, 3]?.map((i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="arrival-image img-1">
                      <img className="img-fluid" src={arriv1} alt="arrivals" />
                    </div>
                  </SwiperSlide>
                );
              })}
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
                  className="mySwiper"
                >
                  {[1, 2, 3]?.map((i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="arrival-image img-2">
                          <img
                            className="img-fluid"
                            src={arriv2}
                            alt="arrivals"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              {/* three and four swiper */}
              <div className="three d-flex justify-content-between gap-3">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2700, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {[1, 2, 3]?.map((i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="arrival-image img-3">
                          <img
                            className="img-fluid"
                            src={arriv3}
                            alt="arrivals"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {[1, 2, 3]?.map((i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="arrival-image img-4">
                          <img
                            className="img-fluid"
                            src={arriv4}
                            alt="arrivals"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
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
