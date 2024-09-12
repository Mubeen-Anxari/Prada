import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import React from "react";
const images = [
  {
    image: "/images/web1.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
  {
    image: "/images/web2.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
  {
    image: "/images/web3.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
];
export default function Projects() {
  return (
    <div className="mt-10     max-w-[1600px] m-auto gap-20">
   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {images.map((item,index)=>{
        return(
            <div key={index} className=" flex flex-col bg-redColor p-4 rounded-xl">
            <Image src={item.image} height={500} width={500} alt="pic"></Image>
            <h1 className=" text-blacklColor  pt-2 text-2xl">{item.title}</h1>
            <p className=" text-whiteColor">  {item.description}</p>
        </div>
        )
    })}
   </div>
    </div>
  );
}
