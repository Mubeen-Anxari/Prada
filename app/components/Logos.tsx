import React from "react";
import Image from "next/image";
// const logos=[
//     {
//         image:"/logo1.png",
//     },
//     {
//         image:"/logo2.png",
//     },
//     {
//         image:"/logo3.png",
//     },
//     {
//         image:"/logo4.png",
//     },
//     {
//         image:"/logo5.png",
//     },
// ]
export default function Logos() {
  return (
    <div className=" bg-secondaryColor max-w-[1700px] hidden md:flex   min-h-[60px] gap-4 justify-between py-2  m-auto">
      <div className=" flex flex-1 flex-wrap  mx-[100px] justify-between">
        <Image src="/logo1.png" width={166} height={33} alt="pic"></Image>
        <Image src="/logo2.png" width={91} height={38} alt="pic"></Image>
        <Image src="/logo3.png" width={156} height={33} alt="pic"></Image>
        <Image src="/logo4.png" width={194} height={33} alt="pic"></Image>
        <Image src="/logo5.png" width={208} height={34} alt="pic"></Image>
      </div>
    </div>
  );
}
