import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import axios from "axios";
import { BASE_URL } from "../utils";
import Places from "../components/Places";
import Footer from "../components/Layout/Footer";
import Partners from "../components/Partners";
import About from "../components/About";
import Services from "../components/Services";
import styles from "../styles/style";
import { urlFor } from "../utils/client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

export default function Home({ products }) {
  console.log(products);

  return (
    <div>
      <SeoHead title="Sanaa Zote TV" />

      <div id="about" className="w-full flex pt-20 md:pt-20">
        <div className="w-[100%]">
          <Swiper
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((product) => (
              
              <SwiperSlide key={product._id}>
                <div
                  className="bg-cover bg-center h-[400px] md:h-[420px] flex flex-col w-full items-center justify-center"
                  style={{
                    backgroundImage: `(${urlFor(product.image && product.image[0])})`,
                  }}
                >
                  <div className="absolute inset-0 h-[400px] md:h-[420px] bg-black opacity-50"></div>
                  <section
                    className={`${styles.paddings} mx-auto z-10 w-[95%] items-center justify-center`}
                  >
                    <h1 className="text-5xl md:text-7xl py-5 text-transparent z-10 text-center font-extrabold bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
                      {product.name}
                    </h1>
                    <p className="text-gray-100 text-2xl z-10 text-center">
                      {product.description}
                    </p>
                  </section>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <About />
      <div className="relative">
        <Services />
        <Partners />
        <Pricing />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ query: { category } }) => {
  let response = await axios.get(`${BASE_URL}/api/products/sliders`);

  if (category) {
    response = await axios.get(`${BASE_URL}/api/discover/${category}`);
  }
  return {
    props: { products: response.data },
  };
};
