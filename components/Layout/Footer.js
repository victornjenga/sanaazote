import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center w-full items-center  py-6">
      <div className=" flex flex-col w-[80%] justify-center md:grid grid-cols-4">
        <div className=" px-3 my-3">
          <Link href="/">
            <img className="h-[80px]" src="/logo.png" alt="/" />
          </Link>
          <p>All in one place for all your travel needs</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Customer Services</p>
          <p className="">Privacy Policy</p>
          <p>
            {" "}
            <Link href="/terms-conditions">Terms and Condtions</Link>{" "}
          </p>
          <p>About Us</p>
          <p>Customer Services</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Top Destinations</p>
          <p className="">Diani</p>
          <p>Mombasa</p>
          <p>Masai Mara</p>
          <p>Kisumu</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Call Us Here</p>
          <p className="">
            <span className="text-lg font-bold">Sales:</span> 0747100101
          </p>
          <p className="">
            <span className="text-lg font-bold">Email:</span> info@safwasafaris.com
          </p>
          <p className="">
            <span className="text-lg font-bold">Shop Location: </span>Nairobi,
            Kenya
          </p>
        </div>
      </div>

      <p className="py-4 px-3 text-center mx-10  flex justify-center">
        Copyright © {new Date().getFullYear()} Safwa Safaris, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
