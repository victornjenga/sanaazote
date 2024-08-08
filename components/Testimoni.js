import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Lukas Behnken",
      image: "/1.jpeg",
      date: "November 16, 2014",
      country: "Kenya",
      rating: "4.5",
      testimoni:
        "David Kinyanjui is a fantastic producer being able to make a number of things happen at very short notice while arranging long term plans. I am a Los Angeles, Hollywood Producer and I had the honor of working with David at two different times in Kenya over the last year. He is dedicated, passionate about producing and making films, especially passionate about the message and purpose of the film. He knew people in each category of work we needed. ",
    },
    {
      name: "Sirucha Brutus",
      image: "/2.jpeg",
      date: "May 24, 2013",
      country: "Kenya",
      rating: "4.5",
      testimoni: "Sanna Zote provide the best sound quality so far. But they go further; they have made a name in entertainment programmes and movies for TV.I have no doubt, they are the best among equals. ",
    },
    {
      name: "Bernard Mwenda",
      image: "/3.jpeg",
      date: "February 29, 2012",
      country: "Kenya",
      rating: "5.0",
      testimoni:
        "Sanaa is a great out fit to work with. They have done a number of short films which have been very popular in Kenya. Very original and REAL work which identifies with the common Kenyan citizen.",
    },
    {
      name: "Clare Kemp",
      image: "/4.jpeg",
      date: "October 19, 2011",
      country: "Kenya",
      rating: "5.0",
      testimoni:
        "Always attending to the details, David provides quality sound engineer services both on location shoots and for conference work.He is self motivated, and also a good team player. ",
    },
    {
      name: "Benjamin Odiwuor",
      image: "/5.jpeg",
      date: "October 13, 2011",
      country: "Kenya",
      rating: "5.0",
      testimoni:
        "He is Diligent, Committed and a Very good sound-man who speaks his mind",
    },
    {
      name: "David Sanders",
      image: "/6.jpeg",
      date: "February 23, 2011",
      country: "Kenya",
      rating: "4.4",
      testimoni:
        "We are currently working with David on a drama format. He is a great connector with what's happening at street level, how people think, what people value and how to tell their story. David is invaluable in his ability to contextualize a story so that it is both entertaining and relevant. In addition his audio visual skills are a great asset in ensuring consistency of format quality.",
    },
    {
      name: "Penny Shales",
      image: "/7.jpeg",
      date: "February 16, 2011",
      country: "Kenya",
      rating: "4.8",
      testimoni:
        "David is an excellent sound recordist who takes great pains and infinite pleasure in capturing really high quality sound. We worked together in often very difficult physical conditions but he never allowed his standards to drop. He is also a very good teacher and is generous with his time when training members of the sound department.",
    },
    {
      name: "Irene Mukonyoro",
      image: "/8.jpeg",
      date: "February 16, 2011",
      country: "Kenya",
      rating: "4.9",
      testimoni:
        "Had the pleasure of working with David at Mediae for like 4 years, he started as a trainee but by the second season he was doing the mixing with no difficulties. He is a great guy to work with and does a good job.",
    },
    {
      name: "Jim Bishop",
      image: "/9.jpeg",
      date: "February 8, 2011",
      country: "Kenya",
      rating: "4.9",
      testimoni:
        "David is an excellent sound recordist always giving a top quality product. He is easy to get along with and a pleasure to work with",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    className="rounded-full"
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.date},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <img src="/assets/Icon/stars.svg" className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 text-black dark:text-white-500 transition-all  cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <FaLongArrowAltLeft
              className="text-2xl dark:text-gray-100 "
            />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 text-black dark:text-white-500 transition-all  cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <FaLongArrowAltRight  
              className="text-2xl dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
