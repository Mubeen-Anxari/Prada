import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Blog() {
  return (
    <div className=" flex gap-2">
        <div className=" flex max-w-[1600px] sm:flex-row md:flex-row   lg:flex-col  gap-2">
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
      <div className=" w-full md:w-[517px] ">
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
  );
}
