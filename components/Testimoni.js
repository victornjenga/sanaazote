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
      name: "Robert",
      image: "/victor.jpeg",
      city: "Eldoret",
      country: "Kenya",
      rating: "4.5",
      testimoni:
        "Sanaa Zote is exceptional! We hired them to film our corporate event, and they exceeded our expectations.",
    },
    {
      name: "iezh Ian",
      image: "/assets/people-3.png",
      city: "Kisumu",
      country: "Kenya",
      rating: "4.5",
      testimoni: "The crew was easy to work with and very accommodating to our needs. Highly recommend their services",
    },
    {
      name: "Veronica Njeri",
      image: "/njeri.jpeg",
      city: "Nakuru",
      country: "Kenya",
      rating: "4.5",
      testimoni:
        "The team was passionate and dedicated, and their expertise showed in every frame.",
    },
    {
      name: "Hamza",
      image: "/man.jpg",
      city: "Turkana",
      country: "Kenya",
      rating: "4.5",
      testimoni:
        "We couldn't be happier with the promotional video Sanaa Zote created for our new product launch.",
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
                      {listTestimonis.city},{listTestimonis.country}
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
              className="text-2xl text-gray-100 "
            />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 text-black dark:text-white-500 transition-all  cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <FaLongArrowAltRight  
              className="text-2xl text-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
