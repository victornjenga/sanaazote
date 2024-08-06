"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} pt-8 mx-auto w-[95%]`}>
    {/* <div className="gradient-02 z-0" /> */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| WHO WE ARE" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center "
      >
        SanaaZoteTV is an initiative launched by Sanaa Zote Productions, based
        in Nairobi, Kenya. Established in 2010, Sanaa Zote Productions
        represents the forefront of African storytelling in the contemporary
        era. We take pride in being a comprehensive film and television
        production service provider, boasting over two decades of industry
        expertise. Our extensive portfolio includes successful projects not only
        in Kenya but also across the expansive territories of East and Central
        Africa.
      </motion.p>
      {/* <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg" 
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
      {/* <AiOutlineArrowDown className="text-7xl"/> */}
    </motion.div>
  </section>
);

export default About;
