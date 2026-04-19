import EmployerCard from "../Components/helpers/EmployerCard";
import Service from "../Components/helpers/Service";
import Services from "../Components/Services";
import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaSackDollar } from "react-icons/fa6";
import { VscGift } from "react-icons/vsc";
import shoping from "../Assets/shoping.png";
import emp2 from "../Assets/emp4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const About = () => {
  return (
    <div className="about mt-5 mb-5 ">
      <div className="container">
        <h3 className="fw-bold fs-6 mb-0 text-black">
          <span className="text-muted">Home</span> / About
        </h3>

        <div className="row mt-5 mb-lg-5 pb-lg-5 d-flex align-items-center text-center text-lg-start">
          <div className="col-12 col-lg-6">
            <div className="pe-0 pe-lg-5">
              <h1 className=" fw-bold text-capitalize mb-4 ">our story</h1>
              <p className="desc fs-6 lh-base text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                deserunt,veniam nemo reprehenderit molestias maxime labore quis
                adipisci necessitatibus mollitia consectetu aliquam officia
                fugiat, voluptas et in voluptatibus blanditiis!
                <p className=" mt-3">
                  maxime labore quis adipisci necessitatibus mollitia consectetu
                  aliquam officia fugiat, voluptas et in voluptatibus
                  blanditiis! aliquam officia fugiat, voluptas et in
                  voluptatibus blanditiis!
                </p>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image ">
              <img src={shoping} alt="shoping girls" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-3 pt-lg-5 pb-0 pb-lg-5 mb-lg-5">
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <Service
              bord="1.5px solid #aaa"
              anim="animate"
              icon={<FaStoreAlt />}
              title="10.5k"
              desc="Sallers active our site"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <Service
              bord="1.5px solid #aaa"
              anim="animate"
              icon={<FaDollarSign />}
              title="33k"
              desc="Monthly Product Sale"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0 mb-lg-3">
            <Service
              bord="1.5px solid #aaa"
              anim="animate"
              icon={<VscGift />}
              title="45.5k"
              desc="Customer active in our site"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-lg-3">
            <Service
              bord="1.5px solid #aaa"
              anim="animate"
              icon={<FaSackDollar />}
              title="25k"
              desc="Anual gross sale in our site"
            />
          </div>
        </div>

        <div className="row mt-4 mt-lg-5 pt-5 pb-0 pb-lg-5 mb-lg-5">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 1"
                title="H-I Developer"
                desc="Founder & Developer"
              />
            </SwiperSlide>

            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 2"
                title="H-I Developer"
                desc="Marketing & SEO"
              />
            </SwiperSlide>

            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 3"
                title="H-I Developer"
                desc="Website Designer"
              />
            </SwiperSlide>

            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 1"
                title="H-I Developer"
                desc="Founder & Developer"
              />
            </SwiperSlide>

            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 2"
                title="H-I Developer"
                desc="Marketing & SEO"
              />
            </SwiperSlide>

            <SwiperSlide className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <EmployerCard
                img={emp2}
                alt="employer 3"
                title="H-I Developer"
                desc="Website Designer"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="pb-0 pb-lg-4">
          <Services />
        </div>
      </div>
    </div>
  );
};
export default About;
