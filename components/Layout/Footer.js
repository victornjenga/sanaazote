import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center w-full items-center  py-6">
      <div className=" flex flex-col w-[80%] justify-center md:grid grid-cols-4">
        <div className=" px-3  justify-center  items-center w-full flex md:block flex-col my-3">
          <Link href="/">
            <img className="h-[80px]" src="/logo1.png" alt="/" />
          </Link>
          <p>All in one place for all your filming needs</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Links</p>
          <p className="hover:text-orange-600"><Link href="/">Home</Link></p>
          <p className="hover:text-orange-600">
            <Link href="/projects">Projects</Link>
          </p>
          <p className="hover:text-orange-600"> <Link href="/about">About Us</Link></p>
          <p className="hover:text-orange-600"><Link href="/">Services</Link></p>
          <p className="hover:text-orange-600"><Link href="/contact">Contact</Link></p>
          <p className="hover:text-orange-600"><Link href="/gallery">Gallery</Link></p>
          <p className="hover:text-orange-600"><Link href="/founder">Founder</Link></p>

        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Top Services</p>
          <p>Tv & Film production</p>
          <p className="">Audio Production</p>
          <p>Co-oporete Videos</p>
          <p>Live Transmission</p>
          <p>Documentaries</p>
        </div>
        <div className="flex flex-col  my-3">
          <p className="text-xl font-bold">Contact Us Here</p>
          <p className="">
            <span className="text-lg font-bold">Sales:</span> 0721600430
          </p>
          <p className="">
            <span className="text-lg font-bold">Email:</span> sanaazotetv@gmail.com
          </p>
          <p className="">
            <span className="text-lg font-bold">Shop Location: </span>Ngong Hills, Nairobi,
            Kenya
          </p>
        </div>
      </div>

      <p className="py-4 px-3 text-center mx-10  flex justify-center">
        Copyright © {new Date().getFullYear()} Sanaa Zote, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
