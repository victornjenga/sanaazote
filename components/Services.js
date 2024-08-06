import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaNetworkWired,
  FaHouseDamage,
} from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { TbDatabaseImport, TbNetwork } from "react-icons/tb";
import { SiWeblate } from "react-icons/si";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/style";
import { fadeIn, staggerContainer } from "../utils/motion";
import { MdMilitaryTech } from "react-icons/md";
import { GrTechnology, GrShieldSecurity, GrNetwork } from "react-icons/gr";
import { GiSatelliteCommunication } from "react-icons/gi";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSecurityScan,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import Link from "next/link";
const Services = () => {
  return (
    <div className=" justify-center   items-center  my-4">
      <div className="flex flex-col text-center py-5">
        <h2 className="font-bold md:text-[54px] py-4 text-[40px] ">
          Our{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-600  to-purple-600">
            Services
          </span>{" "}
        </h2>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center  items-center space-y-5 mx-4 ">
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <TbDatabaseImport className="text-5xl " />
            <h2 className="font-semibold text-2xl">TV & FILM PRODUCTION</h2>
            <p className="">
              We are prominently engaged in the dynamic realm of television and
              film production
            </p>
            <Link
              href="/Datacenter"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <AiOutlineSecurityScan className="text-5xl text-red-600" />
            <h2 className="font-semibold text-2xl">FILMING FIXERS</h2>
            <p className="">
              We specialize in professional film fixing services for various
              production needs.
            </p>
            <Link
              href="/Physicalsecurity"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <TbNetwork className="text-5xl" />
            <h2 className="font-semibold text-2xl">AUDIO PRODUCTION</h2>
            <p className="">
              We engage in the production of diverse and high-quality audio
              content.
            </p>
            <Link
              href="/Enterprise"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <GiSatelliteCommunication className="text-5xl text-red-600" />
            <h2 className="font-semibold text-2xl">TESTIMONIALS VIDEOS</h2>
            <p className="">
              We produce content showcasing authentic testimonials and real-life
              experiences.
            </p>
            <Link
              href="/Unified"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <FaNetworkWired className="text-5xl " />
            <h2 className="font-semibold text-2xl">COOPRRATE VIDOES</h2>
            <p className="">
              We specialize in producing corporate videos for business and
              marketing purposes
            </p>
            <Link
              href="/Network"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <AiOutlineCloudDownload className="text-5xl text-red-600" />
            <h2 className="font-semibold text-2xl">LIVE TRANSMISSION</h2>
            <p className="">
              We offer live streaming services for real-time, engaging online
              broadcasts
            </p>
            <Link
              href="/Cloudsolutions"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <MdMilitaryTech className="text-5xl" />
            <h2 className="font-semibold text-2xl">DOCUMENTARIES</h2>
            <p className="">
              We create compelling documentaries exploring various subjects and
              social issues
            </p>
            <Link
              href="/techsecurity"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="justify-center text-center  mx-5 hover:scale-105 duration-300 ease-out py-5 h-[300px]  w-[300px] max-w-sm  rounded-lg  dark:bg-black/30 shadow-md px-3 md:w-[350px] space-y-2 items-center flex flex-col"
          >
            <FaHouseDamage className="text-5xl text-red-600" />
            <h2 className="font-semibold text-2xl">LOCATION SERVICES</h2>
            <p className="">
              We provide top-notch location services for diverse film and
              television productions.
            </p>
            <Link
              href="/smartbuilding"
              className="text-xl text-purple-600 cursor-pointer"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
