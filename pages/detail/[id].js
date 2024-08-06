import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { urlFor, client } from "../../utils/client";
import Image from "next/image";
// import imageUrl from '@sanity/image-url'
import axios from "axios";
import { BASE_URL } from "../../utils";
import { useStateContext } from "../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import Link from "next/link";

import Places from "../../components/Places";
import useAuthStore from "../../store/authStore";
import { CurrencyContext } from "../../context/CurrencyProvider";

function ProductDetails({ siteDetails, sites }) {
  const [site, setSite] = useState(siteDetails);

  // const { image, name, description, price,specs }=siteDetails
  // console.log(sites);

  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { decQty, incQty, qty, onAdd, size } = useStateContext();
  const { userProfile } = useAuthStore();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const { exchangeRate, selectedCurrency, setSelectedCurrency } =
    useContext(CurrencyContext);

  const convertCurrency = (price) => {
    // Convert the price to the selected currency using the exchange rate from the API
    if (exchangeRate[selectedCurrency]) {
      return (price * exchangeRate[selectedCurrency]).toFixed(0);
    } else {
      return "N/A";
    }
  };

  const handleLike = async (like) => {
    if (userProfile) {
      const res = await axios.put(`${BASE_URL}/api/like`, {
        userId: userProfile._id,
        siteId: site._id,
        like,
      });
      setSite({ ...site, likes: res.data.likes });
    }
  };

  return (
    <div className="w-full md:w-[90%] pt-16 md:pt-20  mb-8 ">
      <style>
        {`#p-wrap {
          white-space: pre-line;
        }`}
      </style>
      <div className="w-full p-2 md:p-8  h-full  justify-center  pt-10 md:pt-48 rounded">
        <h3 className="font-semibold md:hidden text-3xl">{site.name}</h3>
        <div className="flex flex-col  md:px-8 w-full justify-center  items-center pb-8 xl:flex-row">
          <div className="block space-x-3 md:flex  w-full ">
            <div className="block md:w-1/2">
              <img
                className=" w-full"
                src={urlFor(site.image && site.image[index]).url()}
                alt={site.name}
              />
              <div className="flex gap-2 mt-2 sites overflow-x-scroll w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {site.image?.map((item, i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className={
                      i === index ? "small-image selected-image" : "small-image"
                    }
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 ">
              <h3 className=" hidden md:flex py-3 text-center text-4xl">
                {site.name}
              </h3>
              <div className="flex space-x-2   items-center py-3">
                {/* <div className="bg-red-600 hidden md:flex h-full p-2">
                  <TbMessageCircle2Filled className=" text-xl md:text-2xl text-white  " />
                </div> */}
              </div>

              <div className="border border-gray-600 justify-center items-center flex flex-col w-full p-4">
                <p className="py-2 text-blue-600 text-3xl font-medium">
                  Ksh {site.price}
                </p>

                {/* <div className="space-x-2 flex">
                  <h3>Quantity:</h3>
                  <p className="flex space-x-3 items-center  ">
                    <span
                      onClick={decQty}
                      className="bg-slate-800  px-2 py-1 cursor-pointer  text-xl font-bold"
                    >
                      <AiOutlineMinus className="text-white" />
                    </span>
                    <span className="text-2xl font-semibold">{qty}</span>
                    <span
                      onClick={incQty}
                      className="bg-slate-800  px-2 py-1 cursor-pointer text-xl font-bold"
                    >
                      <AiOutlinePlus className="text-white" />
                    </span>
                  </p>
                </div> */}

                <div className=" flex  mt-4  ">
                  <Link href="/checkout">
                    <button
                      type="button"
                      onClick={() => onAdd(site, qty)}
                      className="px-10 py-2  bg-blue-600 border cursor-pointer text-gray-100 font-semibold  hover:scale-105 duration-300"
                    >
                      Book Now
                    </button>
                  </Link>

                  {/* <Link href="/checkout">
                  <button
                    onClick={() => onAdd(site, qty)}
                    type="button"
                    className="px-3 py-2  bg-yellow-600 border cursor-pointer text-white font-semibold  hover:scale-105 duration-300"
                  >
                    Buy Now
                  </button>
                </Link> */}
                </div>
              </div>
              <div className="w-full block md:flex justify-center md:justify-around gap-4 i">
                <di>
                  <h2 className="text-xl  py-2 pl-3 font-semibold">
                    Inclusions
                  </h2>
                  <p id="p-wrap">{site.inclusion}</p>
                </di>
                <div>
                  <h2 className="text-xl  py-2 pl-3 font-semibold">
                    Exclusions
                  </h2>

                  <p id="p-wrap">{site.exclusion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 pl-2  md:pl-8 py-3">
          <div>
            <div className="">
              <h2 className="text-xl  py-2 pl-3 font-semibold">Description</h2>
            </div>
            <p className="sm:text-lg" id="p-wrap">
              {site.description}
            </p>
          </div>
          {/* <div className="flex flex-col md:items-center">
            <div className="">
              <h2 className="text-xl  py-2 pl-3 font-semibold">Features</h2>
            </div>
            <p className="sm:text-lg font-medium" id="p-wrap">
              {site.specs}
            </p>
          </div> */}
        </div>
      </div>

      <div className="py-4">
        <div className="">
          <h2 className="text-xl py-2 pl-3 font-semibold">
            Related Destinations
          </h2>
        </div>

        <div className="marquee">
          <div className="flex   flex-wrap  w-full">
            {sites.map((product) => (
              <Places key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex fixed bottom-0 w-full md:hidden">
        <button
          type="button"
          onClick={() => onAdd(site, qty)}
          className="px-3 py-2 bg-slate-700 cursor-pointer text-white font-semibold  w-[50%]"
        >
          ADD TO CART
        </button>
        <button
          onClick={() => onAdd(site, qty)}
          type="button"
          className="px-3 py-2  bg-blue-500  cursor-pointer text-white font-semibold  w-[50%]"
        >
          <Link href="/checkout"> BUY NOW </Link>
        </button>
      </div> */}
    </div>
  );
}

export default ProductDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
  let response = await axios.get(`${BASE_URL}/api/products`);
  return {
    props: { siteDetails: data, sites: response.data },
  };
};
