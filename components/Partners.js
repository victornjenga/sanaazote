import React from "react";
import Marquee from "react-fast-marquee";
// gradientColor="255, 255, 255"

function Partners() {
  return (
    <div id="partners" className="w-[90%] md:w-[80%] justify-center items-center mx-auto">
      {/* <TitleText title={<>Get started with just a few clicks</>} /> */}

      <h2 className="font-semibold text-center md:text-[54px] pb-4 text-[40px]">
        Our <span className="text-blue-600">Parners</span>
      </h2>
      <div>
        <Marquee gradientColor="null" direction="right" speed={70} delay={5}>
          <div className="mx-3 w-[80px] md:w-[140px] ">
            <img src="/gov.png" alt="" />
          </div>
          <div className="mx-3 w-[80px] md:w-[140px]">
            <img src="/kenya-wildlife-service.jpg" alt="" />
          </div>
          <div className="mx-3 w-[80px] md:w-[140px]">
            <img src="/equity.png" alt="" />
          </div>
          <div className="mx-3 w-[80px] md:w-[140px]">
            <img src="/expedia-logo.jpg" alt="" />
          </div>
          <div className="mx-3 w-[80px] md:w-[140px]">
            <img src="/youtube.png" alt="" />
          </div>
          <div className="mx-3 w-[80px] md:w-[140px]">
            <img src="/safaricom.png" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;
