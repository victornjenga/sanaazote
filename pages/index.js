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
export default function Home() {
  // console.log(products);

  return (
    <>
      <SeoHead title="Safwa Safaris" />
      <Hero />
      <About />
      <Services />
      {/* <Feature /> */}
      {/* <div
        id="places"
        className="flex justify-center items-center w-full my-3 md:mt-4"
      >
        <h2 className="text-lg  md:text-xl  py-2 pl-3 font-semibold">
          FEATURED DESTINATIONS
        </h2>
      </div>
      <div className="flex  mb-4 flex-wrap mx-2  w-full">
        {products.map((product) => (
          <Places key={product._id} product={product} />
        ))}
      </div> */}
      <Partners />
      <Pricing />

      {/* <Footer /> */}
    </>
  );
}

// export const getServerSideProps = async ({ query: { category } }) => {
//   let response = await axios.get(`${BASE_URL}/api/products`);

//   if (category) {
//     response = await axios.get(`${BASE_URL}/api/discover/${category}`);
//   }
//   return {
//     props: { products: response.data },
//   };
// };
