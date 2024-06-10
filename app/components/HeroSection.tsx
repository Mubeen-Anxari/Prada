import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="max-w-[1600px] flex flex-col-reverse  md:flex-row  bg-primaryColor mt-10  m-auto">
      <div className="flex flex-1  flex-col justify-center   p-4  ">
        <h1 className=" font-bold w-[500px] text-left text-6xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className=" text-left text-xs mt-4 md:w-[400px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className=" mt-8  text-center bg-secondaryColor rounded-full text-whiteColor p-2 w-[150px]">
          Shop Now
        </button>
        <div className=" flex gap-6 mt-10    text-left">
          <div className=" flex flex-col text-bold">
            <h1 className="text-4xl">200+</h1>
            <p className="text-xs">International Brands</p>
          </div>
          <div className=" flex flex-col text-bold">
            <h1 className=" text-4xl">2000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div className=" flex flex-col text-bold">
            <h1 className=" text-4xl">30,000+</h1>
            <p className="text-xs font-bold">Happy Customers</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          className=" rounded-3xl flex-1 bg-fixed bg-contain"
          src="/couple.jpeg"
          width={800}
          height={800}
          alt="pic"
        ></Image>
      </div>
    </div>
  );
}
