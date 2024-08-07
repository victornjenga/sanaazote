import "../styles/tailwind.css";
import "../styles/slick.css";
import { CurrencyProvider } from "../context/CurrencyProvider";
import { StateContext } from "../context/StateContext";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Layout/Footer";
import whatsapp from "/public/whatsapp.png";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <CurrencyProvider>
        <div className="w-full overflow-hidden bg-gray-950 text-white ">
          <StateContext>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <div className="bottom-10 fixed z-10 cursor-pointer right-4 ">
                  <a
                    href="https://wa.me/+254721600430?text=Hello,+There"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="py-2 w-[100px] h-auto"
                      src="/whatsapp.png" 
                      alt="/"
                    />
                  </a>
                </div>
          </StateContext>
        </div>
       
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default MyApp;
