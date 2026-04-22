import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import Service from "./Service";

const Services = () => {
  const services = [
    {
      icon: <LiaShippingFastSolid />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: <TfiHeadphoneAlt />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <AiOutlineSafetyCertificate />,
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 15 days",
    },
  ];

  return (
    <div className="services mt-5 mb-5">
      <div className="container">
        <div className="row m-auto d-flex justify-content-center justify-content-lg-start">
          {services?.map((item, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <Service icon={item.icon} title={item.title} desc={item.desc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
