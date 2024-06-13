import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Blog() {
  return (
    <div className=" flex mt-2  lg:flex gap-2  ">
        <div className=" flex max-w-[1600px] sm:flex-row md:flex-row  md:w-full  lg:flex-col  gap-2">
          <Link
            className=" bg-primaryColor w-[170px] h-[170px] p-2 rounded-xl"
            href="/Blog/1"
          >
            <Image
              src="/T-shirt.png"
              width={150}
              height={20}
              alt="pic"
            ></Image>
          </Link>
          <Link
            className=" bg-primaryColor w-[170px] h-[170px] p-2 rounded-xl"
            href="/Blog/1"
          >
            <Image
              src="/T-shirt.png"
              width={150}
              height={150}
              alt="pic"
            ></Image>
          </Link>
          <Link
            className=" bg-primaryColor w-[170px] h-[170px] p-2 rounded-xl"
            href="/Blog/1"
          >
            <Image
              src="/T-shirt.png"
              width={150}
              height={150}
              alt="pic"
            ></Image>
          </Link>
        </div>
     
    </div>
  );
}
