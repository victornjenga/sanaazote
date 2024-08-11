// pages/index.js

import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import styles from "../styles/style";
import Partners from "../components/Partners";
import Pics from "../components/Pics";
import axios from "axios";
import { BASE_URL } from "../utils";

const Gallary = ({products}) => {
    console.log(products)
  // Define the JSON data within the component
  const videos = [
    { url: "https://youtu.be/90pYaWVhpXw?si=hYVr9ByKTMm0simS", title: "Netflix and Chill" },
    { url: "https://youtu.be/zUTUA0TKvfQ?si=XTgnZZU7fzqnyfmM", title: "Man U FA Cup Finals" },
    { url: "https://youtu.be/WW9SoVpVZSI?si=9whf8llGl6gdXSbV", title: "Billionare" }
  ];

  return (
    <div className={`${styles.paddings} relative pt-20 z-1 mx-auto w-[100%] md:w-[85%]`}>
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="font-bold md:text-[54px] py-4 text-[40px]">
          Our{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-600  to-orange-900">
            Gallery
          </span>
        </h2>
        <p className=" font-normal sm:text-[20px] text-[16px]  ">
        This page serves as a visual journey, offering visitors a glimpse into the diverse range of works we feature. 
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Pics key={product._id} product={product} />
      ))}
      </div>
      <Partners />

    </div>
  );
};

export default Gallary;

export const getServerSideProps = async ({ query: { category } }) => {
    let response = await axios.get(`${BASE_URL}/api/products/pics`);
  
    if (category) {
      response = await axios.get(`${BASE_URL}/api/discover/${category}`);
    }
    return {
      props: { products: response.data },
    };
  };