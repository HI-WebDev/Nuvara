import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import EmployerCard from "../components/EmployerCard";
import Services from "../components/Services";
import Service from "../components/Service";

import { VscGift } from "react-icons/vsc";
import { FaStoreAlt } from "react-icons/fa";
import { FaDollarSign, FaSackDollar } from "react-icons/fa6";

import shoping from "../Assets/about.webp";
import emp1 from "../Assets/emp1.webp";
import emp2 from "../Assets/emp2.webp";

const About = () => {
  const teamData = [
    {
      id: 1,
      img: emp1,
      alt: "Founder",
      title: "Hi Webinator",
      desc: "Founder & CEO",
    },
    {
      id: 2,
      img: emp2,
      alt: "Marketing Lead",
      title: "Hi Webinator",
      desc: "Head of Marketing",
    },
    {
      id: 3,
      img: emp1,
      alt: "Designer",
      title: "Hi Webinator",
      desc: "Lead UI/UX Designer",
    },
    {
      id: 4,
      img: emp2,
      alt: "Engineer",
      title: "Hi Webinator",
      desc: "Senior Frontend Engineer",
    },
    {
      id: 5,
      img: emp1,
      alt: "Backend Developer",
      title: "Hi Webinator",
      desc: "Backend Engineer",
    },
  ];

  return (
    <div className="about mt-3 mt-lg-5 mb-5">
      <div className="container">
        {/* <h3 className="fw-bold fs-6 mb-0 text-black">
          <span className="text-muted">Home</span> / About
        </h3> */}

        <div className="row mt-4 mt-lg-5 mb-lg-5 pb-lg-5 d-flex align-items-center text-center text-lg-start">
          <div className="col-12 col-lg-6">
            <div className="story pe-0 pe-lg-5">
              <h1 className="story-title fw-bold text-capitalize mb-3 mb-lg-4">
                our story
              </h1>
              <p className="story-desc fs-6 lh-base text-justify">
                Nuvara was created with a simple vision: to bring the world’s
                best products into one seamless shopping experience. From
                everyday essentials to unique finds, we curate items that
                combine quality, style, and value—so you don’t have to search
                everywhere.
                <br /> <br />
                As a global store, Nuvara connects customers with trusted
                suppliers across different markets, ensuring a diverse selection
                that fits every lifestyle. Whether you're upgrading your home,
                refreshing your wardrobe, or discovering something new, we aim
                to make shopping easy, reliable, and enjoyable. <br />
         
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="image">
              <img src={shoping} alt="shoping girls" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* <div className="row mt-5 pt-3 pt-lg-5 pb-0 pb-lg-5 mb-lg-5">
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
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide
                key={member.id}
                className="d-flex justify-content-center"
              >
                <EmployerCard
                  img={member.img}
                  alt={member.alt}
                  title={member.title}
                  desc={member.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Services /> */}
      </div>
    </div>
  );
};
export default About;
