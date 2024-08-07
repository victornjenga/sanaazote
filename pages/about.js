"use client";

import { motion } from "framer-motion";
import { RiFocus2Fill } from "react-icons/ri";
import { GrMicrofocus } from "react-icons/gr";
import styles from "../styles/style";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings} px-4 relative pt-16 md:pt-40 z-1 mx-auto w-[100%] md:w-[90%]`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <h1 className="text-5xl md:text-6xl py-5 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-600  to-blue-800">
          Who We Are?
        </h1>
        <p className="justify-center">
        Sanaa Zote is a premier filming company dedicated to bringing stories to life through the art of visual storytelling. With a team of passionate and creative professionals, we specialize in a wide range of filming services including weddings, corporate events, documentaries, promotional videos, music videos, and more. Our commitment to excellence and innovation ensures that every project we undertake is crafted with precision and heart, delivering exceptional results that exceed our clients' expectations.


        </p>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
            <div
              className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] shadow-lg dark:bg-[#323F5D]`}
            >
              <RiFocus2Fill className="text-4xl text-orange-600" />
            </div>
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] dark:text-gray-100">
              OUR MISSION AND OBJECTIVES
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[18px] dark:text-gray-100  leading-[32.4px]">
            Our mission at Sanaa Zote is to capture and convey the essence of each story we tell, creating visually stunning and emotionally resonant films that leave a lasting impact.
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
            <div
              className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] shadow-lg dark:bg-[#323F5D]`}
            >
              <GrMicrofocus className="text-orange-600 text-4xl" />
            </div>
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] dark:text-gray-100">
              Customer Satisfaction
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[18px] dark:text-gray-100  leading-[32.4px]">
            Our vision is to be the leading filming company renowned for our artistic excellence and storytelling prowess. We aim to inspire and connect people through the power of film, pushing the boundaries of creativity and innovation in the industry.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/assets/Illustration2.png"
          alt="about"
          className="w-[100%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
