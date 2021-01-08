import React from "react";
import OurService from "./OurService";
import "./ServiceSection.css";
import serviceImg1 from "../../assets/illustrations/mywebdev.png";
import serviceImg2 from "../../assets/illustrations/mymobile.jpg";
import serviceImg3 from "../../assets/illustrations/mysettings.jpg";

const ServiceSection = () => {
  return (
    <div className="serviceSection">
      <p>Best Quality Software</p>
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          company needs"
        imgUrl={serviceImg1}
      />
      <OurService
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={serviceImg2}
        isReversed
      />
      <OurService
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company"
        imgUrl={serviceImg3}
      />
    </div>
  );
};

export default ServiceSection;
