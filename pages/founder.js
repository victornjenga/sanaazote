"use client";

import { motion } from "framer-motion";
import { RiFocus2Fill } from "react-icons/ri";
import { GrMicrofocus } from "react-icons/gr";
import styles from "../styles/style";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const Founder = () => (
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
        <h1 className="text-5xl md:text-6xl py-5 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-orange-600 to-orange-900">
        David Kinyanjui
        </h1>
        <p className="justify-center">
        The entrepreneur who has used local artists to produce programmes that appeal to local audiences. Kinyanjui is associated with the production of reality TV shows, documentaries and advertisement for corporates
        </p>
        <div className="my-6 ">
      <a className="animate-bounce " href="https://www.standardmedia.co.ke/amp/article/2000148104/from-rags-to-riches-the-tv-way">
        <button className="py-2 px-3  animate-bounce text-gray-200 bg-blue-600 rounded-xl text-xl">
          Read Full Bio
        </button>
      </a>
    </div>
        
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/David.jpeg"
          alt="about"
          className="w-[100%] h-[90%] object-contain"
        />
      </motion.div>
      <p className="italic md:hidden">(David Kinyanjui at his Sanaa Zote Production Ltd studios along Ngong road during an interview)</p>
    </motion.div>
    
  </section>
);

export default Founder;
