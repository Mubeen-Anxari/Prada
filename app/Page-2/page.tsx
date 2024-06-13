import React from "react";
import Blog from "../Blog/page";
import Image from "next/image";
import ProductsRatingFaQs from "../components/Products-RatingFaQs";
import Page2Products from "../Page-2-components/Page2Products";
import Page2Text from "../Page-2-components/Page2Text";
import Page2Cards from "../Page-2-components/Page2Cards";
import Page2Footer from "../Page-2-components/Page2Footer";
import Link from "next/link";
import Footer1 from "../components/Footer1";
export default function Page() {
  return (
    <div>
      <div className=" max-w-[1300px]   m-auto lg:flex  mt-10  gap-4     ">
        <div className=" lg:flex">
          <Blog  />
          <div className=" w-full md:w-[517px] ml-2 ">
        <Link  href="/Blog/1">
                <Image
                className=" bg-primaryColor  p-10 rounded-xl"
                  src="/T-shirt.png"
                  width={517}
                  height={517}
                  alt="pic"
                ></Image>
          </Link>
      </div>
        </div>
        <div className=" mt-4">
          <h1 className=" text-5xl font-bold  "> One Life Graphic T-shirt</h1>
          <div className=" flex gap-2 mt-2    ">
            <Image
              className=" mt-2"
              src="/stars.png"
              width={100}
              height={4}
              alt="pic"
            ></Image>
            <p className=" mt-1 font-normal text-base text-secondaryColor">
              4.5/5
            </p>
          </div>
          <div className=" flex gap-4 mt-2">
            <h1 className=" text-secondaryColor text-3xl font-bold">$260</h1>
            <h1 className=" text-primaryColor text-3xl font-bold">$300</h1>
            <h1 className=" w-12 p-1 rounded-full text-whiteColor bg-[#FF3333]">
              -40%
            </h1>
          </div>
          <div className=" text mt-4 sm:w-full">
            <p className=" text-textColor text-sm">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <hr className="text-[#F0F0F0] mt-4" />
          <h1 className="text-textColor text-normal mt-4">Select Color</h1>
          <div className=" flex  sm:flex-row gap-2 ">
            <div className="  h-[20px] w-[20px]  bg-[#FF3333] rounded-full"></div>
            <div className=" h-[20px] w-[20px]  bg-[#FFC633] rounded-full"></div>
            <div className=" h-[20px] w-[20px]  bg-[#01AB31] rounded-full"></div>
          </div>
          <hr className="text-[#F0F0F0] mt-4" />
          <h1 className="text-textColor text-normal mt-4">Choose Size</h1>
          <div className=" flex sm:flex-row gap-2 sm:w-full mt-2">
            <button className="bg-[#F0F0F0] text-textColor w-20 p-1 rounded-full">
              Small{" "}
            </button>
            <button className="bg-[#F0F0F0] text-textColor w-20 p-1 rounded-full">
              Medium{" "}
            </button>
            <button className="bg-secondaryColor text-[#F0F0F0] w-20 p-1 rounded-full">
              Large{" "}
            </button>
            <button className="bg-[#F0F0F0] text-textColor w-20 p-1 rounded-full">
              X-Large{" "}
            </button>
          </div>
          <hr className="text-[#F0F0F0] mt-4" />
          <div className=" flex gap-4 sm:flex-row ">
            <div className=" flex justify-between mt-2 bg-[#F0F0F0]  w-36 rounded-full p-2 ">
              <h1>-</h1>
              <h1>1</h1>
              <h1>+</h1>
            </div>
            <button className="w-full md:w-[300px] p-2 rounded-full mt-2 text-whiteColor  bg-secondaryColor">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ProductsRatingFaQs />
      <Page2Cards/>
      <Page2Text />
      <Page2Products />
      <Page2Footer/>
      <Footer1/>
    </div>
  );
}
