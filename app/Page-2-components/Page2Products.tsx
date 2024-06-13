import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
const images = [
  {
    image: "/sleeveless2.png",
  },
  {
    image: "/sleeveless2.png",
  },
  {
    image: "/sleeveless2.png",
  },
  {
    image: "/sleeveless2.png",
  },
  
  
 
 
];
export default function Page2Products() {
  return (
   <div>
     <div className=" grid  md:grid-cols-2 mt-20 lg:grid-cols-3  xl:grid-cols-4 max-w-[1600px] gap-4">
      {images?.map((item) => {
        return (
          <Card radius="lg" className="border-none  w-full  md:w-[295px] ">
            <div className="flex flex-col bg-primaryColor rounded-md ">
              <Image
                className=" ml-10 "
                src={item?.image}
                width={200}
                height={200}
                alt="pic"
              ></Image>
            </div>
            <p className=" mt-2 text-xs  ml-4 font-bold ">
              T-SHIRT WITH TAPE DETAILS
            </p>
            <div className=" flex ml-4 gap-2 mt-2">
            <Image src="/stars.png" width={104} height={20} alt="pic"></Image>
            <p className=" text-sm font-normal w-[33px] h-[19px]">4.5/5</p>
            </div>{" "}
            <h1 className=" font-bold text-lg ml-4">$120</h1>
          </Card>
        );
      })}
    </div>
    <hr className="  mt-24 text-primaryColor" />
   </div>
  );
}
