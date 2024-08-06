"use client";

import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const backgroundImageUrl = 'url("/hero.jpg")';
const backgroundImageUrl2 = 'url("/diani.jpg")';
  return (
    <div id='about' className="w-full  flex pt-20 md:pt-20 ">
      <div className="w-[100%] ">
    <Swiper
    // install Swiper modules
    autoplay={{ delay: 3000 }}
    modules={[Autoplay, Pagination, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log("slide change")}
  >
        <SwiperSlide >
        <div
      className="bg-cover bg-center h-[400px] md:h-[420px] flex flex-col w-full items-center justify-center"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      {" "}
      <div className="absolute inset-0 h-[400px] md:h-[420px]  bg-black opacity-50"></div>
      <section
        className={`${styles.paddings}   mx-auto z-10 w-[95%] items-center justify-center `}
      >
        {/* Your content goes here */}
        <h1 className="text-5xl md:text-7xl py-5 text-transparent z-10 text-center font-extrabold bg-clip-text bg-gradient-to-r from-orange-600  to-orange-700">
          <span className="light:text-black text-gray-100">
           We are the African {""}
          </span>
          Story Telling Maestro
        </h1>
        <p className="text-gray-100 text-2xl z-10 text-center ">
        Offering diverse expertise and services.
        </p>
        <div className="text-center mt-4">
          <button className="bg-blue-800 rounded-xl px-3 py-2 text-gray-100 text-xl  ">
            <Link href="/contact"> Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
        </SwiperSlide>
        <SwiperSlide >
        <div
      className="bg-cover bg-center h-[400px] md:h-[420px] flex flex-col w-full items-center justify-center"
      style={{ backgroundImage: backgroundImageUrl2 }}
    >
      {" "}
      <div className="absolute inset-0 h-[400px] md:h-[420px]  bg-black opacity-50"></div>
      <section
        className={`${styles.paddings}   mx-auto z-10 w-[95%] items-center justify-center `}
      >
        {/* Your content goes here */}
        <h1 className="text-5xl md:text-7xl py-5 text-transparent z-10 text-center font-extrabold bg-clip-text bg-gradient-to-r from-orange-600  to-orange-700">
          <span className="light:text-black text-gray-100">
          We are a Comprehensive 
          </span>{" "}
          Media Partner
        </h1>
        <p className="text-gray-100 text-2xl z-10 text-center ">
          Reliable ,Affordable and Distictive.
        </p>
        <div className="text-center mt-4">
          <button className="bg-blue-800 rounded-xl px-3 py-2 text-gray-100 text-xl  ">
            <Link href="/contact"> Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
        </SwiperSlide>

   
    </Swiper>
    </div>
    </div>

  );
};

export default About;
