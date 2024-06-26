import React from "react";

import Image from "next/image";

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
    <div className=" bg-primaryColor  ">
      <div className=" max-w-[1200px] m-auto p-4 mt-10 lg:flex    ">
        <div className="">
          <h1 className="font-bold text-2xl mt-2 ">SHOP.CO</h1>
          <p className=" text-sm font-normal text-textColor w-[248px] h-[66px]">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className=" flex gap-2">
            <Image src="/logos/1.png" width={28} height={28} alt="pic"></Image>
            <Image src="/logos/2.png" width={28} height={28} alt="pic"></Image>
            <Image src="/logos/3.png" width={28} height={28} alt="pic"></Image>
            <Image src="/logos/4.png" width={28} height={28} alt="pic"></Image>
          </div>
        </div>
        <div className="flex-1 mt-2   grid grid-cols-2 lg:grid-cols-4 gap-10">
          {titles?.map((item, index) => {
            return (
              <div key={index} className=" ">
                {item?.map((subitem, subIndex) => {
                  return (
                    <div key={subIndex} className="flex  gap-2">
                      <h1 className="text-white hover:underline font-bold">
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
      <hr className=" max-w-[1200px] m-auto text-whiteColor mt-4 pt-4" />
      <div className=" max-w-[1200px] m-auto   ">
        <div className=" flex flex-col items-center lg:flex lg:justify-between ">
          <div className="">
            <h1 className=" mt-4 font-bold text-sm text-secondaryColor">
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
