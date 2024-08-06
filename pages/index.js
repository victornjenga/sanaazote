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
    <div>
      <SeoHead title="Sanaa Zote TV" />
      <Hero />
      <About />
      <div className="relative">

      <Services />
      
      <Partners />

      <Pricing />
      <div className="gradient-03 z-0" />
      </div>

      {/* <Footer /> */}
      </div>
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
