"use client";
import {
  FiAlignRight,
  FiXCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { FcAbout, FcHome, FcBusinessContact, FcBiotech,  FcWorkflow ,FcPicture,FcPortraitMode} from "react-icons/fc";
import { GrTechnology, GrShieldSecurity, GrNetwork } from "react-icons/gr";
import { GiSatelliteCommunication } from "react-icons/gi";
import { Link as LinkScroll } from "react-scroll";
import { useRouter } from "next/router";
import { IoCall } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { MdLiveHelp } from "react-icons/md";

import { FaPeopleGroup } from "react-icons/fa6";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSecurityScan,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

// import civrot from "../public/assets/civrot.png";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState();
  const [isMenu, setisMenu] = useState(false);
  const [open, setOpen] = useState();
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className="fixed w-full z-10 -300 bg-gray-100 dark:bg-gray-950 ">
      <div className="hidden md:flex h-[80px] justify-around items-center px-8  bg-gray-100 dark:bg-gray-950 ">
        <div className="cursor-pointer">
          <Link href="/">
            <img className="h-[50px]" src="/logo1.png" alt="/" />
          </Link>
        </div>
        <div className="hidden space-x-10  md:flex ">
          <Link href="/">
            <p className="text-xl cursor-pointer font-medium hover:text-orange-600">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-xl cursor-pointer font-medium hover:text-orange-600">
              About
            </p>
          </Link>
          <Link href="/projects">
            <p className="text-xl cursor-pointer font-medium hover:text-orange-600">
              Projects
            </p>
          </Link>
          {/* <h2 onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className="text-xl cursor-pointer font-medium pr-2">
                  Destinations
                </p>
                <FiChevronDown className="text-2xl hover:rotate-180" />
              </div>
            </Link>

            <ul className={boxClassSubMenu.join(" ")}>
              <div className="space-y-2 text-left flex flex-col pb-4  justify-center pl-4 my-2 bg-black/60  ">
                <li>
                  <Link href="/">Mombasa</Link>
                </li>
                <li>
                  <Link href="/">Diani</Link>
                </li>
                <li>
                  <Link href="/">Lamu</Link>
                </li>
                <li>
                  <Link href="/">Masai Mara</Link>
                </li>
              </div>
            </ul>
          </h2> */}
          <Link href="/contact">
            <p className="text-xl cursor-pointer font-medium hover:text-orange-600">
              Contact
            </p>
          </Link>
          <Link href="/gallery">
            <p className="text-xl cursor-pointer font-medium hover:text-orange-600">
              Gallery
            </p>
          </Link>
          <ThemeSwitch />
        </div>
      </div>

      <div className=" md:hidden flex top-0 mt-0  text-center  h-[70px] items-center bg-gray-100 dark:bg-gray-950 z-10 w-full fixed justify-between px-4  md:justify-around space-x-10">
        <div className="">
          <a href="/">
            <img className="h-[40px]" src="/logo1.png" alt="/" />
          </a>
        </div>

        <div className="md:hidden flex items-center justify-center space-x-10">
          <ThemeSwitch />

          <AiOutlineMenu
            className="cursor-pointer text-2xl md:hidden"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      {open && (
        <div className="bg-gray-100 dark:bg-gray-950 md:hidden top-0 h-full px-5 w-[80%] b-0 fixed  duration-300 z-10">
          <div className="flex py-5 items-center justify-between">
            <div onClick={() => setOpen(false)} className="">
              <a href="/">
                <img className="h-[50px] " src="/logo1.png" alt="/" />
              </a>
            </div>
            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-3xl cursor-pointer   p-1  font-bold "
            />
          </div>
          <div className="overflow-auto sites h-[90vh]">
            <div className="mx-1 text-lg border-b border-gray-600 border-solid ">
              <p className="py-5">Creating visually stunning and emotionally resonant films that leave a lasting impact</p>
            </div>
            <div className="justify-center items-center block">
              <ul className="block space-y-4 pt-5">
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm hover:text-orange-600 flex space-x-2 text-lg items-center "
                >
                  <FcHome />
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm hover:text-orange-600 flex space-x-2 text-lg items-center "
                >
                  <FcAbout />
                  <Link href="/about">About</Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm  hover:text-orange-600 flex space-x-2 text-lg items-center"
                >
                  <FcBusinessContact />
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm  hover:text-orange-600 flex space-x-2 text-lg items-center"
                >
                   <FcWorkflow />
                  <Link href="/projects">Projects</Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm  hover:text-orange-600 flex space-x-2 text-lg items-center"
                >
                   <FcPicture />
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="font-sm  hover:text-orange-600 flex space-x-2 text-lg items-center"
                >
                   <FcPortraitMode />
                  <Link href="/founder">Founder</Link>
                </li>
              </ul>
            </div>
            <h2 className="pt-5 text-xl   text-orange-600">Lets Connect</h2>
            <div className="flex space-x-2 py-2">
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
                  <FaFacebookF />
                </div>
              </a>{" "}
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
                  <FaTwitter />
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
          nn    >
                <div className="shadow-lg w-10 h-10 justify-center items-center flex shadow-gray-400 rounded-full ">
                  <FaInstagram />
                </div>
              </a>
            </div>
            <div className="mt-5 mb-10">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}

      {router.pathname === "/" && (
        <nav className="fixed lg:hidden bottom-0 bg-gray-100 dark:bg-gray-950 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
          <div className="bg-white sm:px-3">
            <ul className="flex w-full justify-between items-center text-black-500">
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "about"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("feature");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "feature"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Services
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("partners");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "partners"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <FaPeopleGroup className="text-2xl"/>
                Partners
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "testimoni"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Testimonial
              </LinkScroll>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
