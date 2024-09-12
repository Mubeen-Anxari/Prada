import React from "react";

import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
export default function Footer1() {
  const titles = [
    [
      {
        description: "Comapny",
      },
      {
        description: "About",
      },
      {
        description: "Features",
      },
      {
        description: "Works",
      },
      {
        description: "Careers",
      },
    ],
    [
      {
        description: "Comapny",
      },
      {
        description: "About",
      },
      {
        description: "Features",
      },
      {
        description: "Works",
      },
      {
        description: "Careers",
      },
    ],
    [
      {
        description: "Comapny",
      },
      {
        description: "About",
      },
      {
        description: "Features",
      },
      {
        description: "Works",
      },
      {
        description: "Careers",
      },
    ],
    [
      {
        description: "Comapny",
      },
      {
        description: "About",
      },
      {
        description: "Features",
      },
      {
        description: "Works",
      },
      {
        description: "Careers",
      },
    ],
  ];
  const images = [
    {
      image: "/images/1.png",
    },
    {
      image: "/images/2.png",
    },
    {
      image: "/images/3.png",
    },
    {
      image: "/images/4.png",
    },
    {
      image: "/images/5.png",
    },
  ];
  return (
    <div className="   ">
      <div className=" max-w-[1200px] m-auto p-4 mt-10 lg:flex    ">
        <div className="">
          <h1 className="font-bold text-2xl mt-2 text-whiteColor ">Ansari.Com</h1>
          <p className=" text-sm font-normal mt-3 text-redColor w-[248px] h-[66px]">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className=" flex  mt-6 gap-4  ">
            <Link
              className="  text-textinsta"
              href="https://www.instagram.com/mubeenansari1220/"
            >
              <FaSquareInstagram className="cursor-pointer " />
            </Link>
            <Link
              className="text-whiteColor"
              href="https://x.com/Mubeenansari96"
            >
              <FaTwitter className="cursor-pointer " />
            </Link>
            <Link
              className="text-textfb"
              href="https://www.facebook.com/Mubeenansari1220"
            >
              <FaFacebook className="cursor-pointer " />
            </Link>
            <Link
              className="text-whiteColor"
              href="https://www.tiktok.com/search?q=mubeen%20ansari%201220&t=1726123537412"
            >
              <AiFillTikTok className="cursor-pointer " />
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-2   grid grid-cols-2 lg:grid-cols-4 gap-10">
          {titles?.map((item, index) => {
            return (
              <div key={index} className=" ">
                {item?.map((subitem, subIndex) => {
                  return (
                    <div key={subIndex} className="flex  gap-2">
                      <h1 className="text-whiteColor ml-2 hover:underline font-bold">
                        {subitem?.description}
                      </h1>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className=" max-w-[1200px] m-auto   ">
        <div className=" flex flex-col items-center lg:flex lg:justify-between ">
          <div className="">
            <h1 className=" mt-4 font-bold text-whiteColor text-sm ">
              Shop.co © 2000-2023, All Rights Reserved
            </h1>
          </div>
          <div className=" flex mt-1">
            {images?.map((item) => {
              return (
                <div>
                  <Image
                    src={item?.image}
                    width={80}
                    height={10}
                    alt="pic"
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
