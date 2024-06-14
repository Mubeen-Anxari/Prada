import React from "react";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Card, CardBody, } from "@nextui-org/react";
import Footer3 from "@/app/NestedComponents2/Footer";
import Footer1 from "@/app/components/Footer1";

const blogsData = [
  {
    id: "1",
    image: "/T-shirt.png",
  },
  {
    id: "2",
    image: "/sleeveless.png",
  },
  {
    id: "3",
    image: "/sleeveless2.png",
  },
];
export default function Id({ params }: { params: { id: string } }) {
  const showData = blogsData?.filter((item) => {
    return item?.id === params.id;
  });
  return (
    <div className=" max-w-[1200px] m-auto mt-10 ">
      <h1 className=" text-4xl font-bold">Your Cart</h1>
      <div className=" mt-2">
        {showData?.map((item) => {
          return (
           <div className=" grid grid-cols-2 sm:grid-cols-1   lg:grid-cols-2 gap-4 ">
             <div className=" flex flex-col gap-2 m-2 "  >
              <Card
                isBlurred
                className="border-primaryColor bg-background/60 dark:bg-default-100/50 w-full"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Pic"
                        height={150}
                        width={150}
                        src={item?.image}
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="font-semibold text-foreground/90">
                            Gradient Graphic T-shirt
                          </h3>
                          <p className="text-small text-foreground/80">
                            Size :Large
                          </p>
                          <p className="text-small text-foreground/80">
                            Color : White
                          </p>
                          <h1 className="text-large font-medium mt-2">145$</h1>
                        </div>
                        <div className=" flex flex-col gap-12">
                        <RiDeleteBin6Fill className=" ml-20   text-[red]" />
                        <div className=" flex justify-between  p-1 rounded-full w-[100px] bg-primaryColor">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card
                isBlurred
                className="border-primaryColor bg-background/60 dark:bg-default-100/50 w-full"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Pic"
                        height={150}
                        width={150}
                        src={item?.image}
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="font-semibold text-foreground/90">
                            Gradient Graphic T-shirt
                          </h3>
                          <p className="text-small text-foreground/80">
                            Size :Large
                          </p>
                          <p className="text-small text-foreground/80">
                            Color : White
                          </p>
                          <h1 className="text-large font-medium mt-2">145$</h1>
                        </div>
                        <div className=" flex flex-col gap-12">
                        <RiDeleteBin6Fill className=" ml-20   text-[red]" />
                        <div className=" flex justify-between  p-1 rounded-full w-[100px] bg-primaryColor">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card
                isBlurred
                className="border-primaryColor bg-background/60 dark:bg-default-100/50 w-full"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                      <Image
                        alt="Pic"
                        height={150}
                        width={150}
                        src={item?.image}
                      />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0">
                          <h3 className="font-semibold text-foreground/90">
                            Gradient Graphic T-shirt
                          </h3>
                          <p className="text-small text-foreground/80">
                            Size :Large
                          </p>
                          <p className="text-small text-foreground/80">
                            Color : White
                          </p>
                          <h1 className="text-large font-medium mt-2">145$</h1>
                        </div>
                        <div className=" flex flex-col gap-12">
                        <RiDeleteBin6Fill className=" ml-20   text-[red]" />
                        <div className=" flex justify-between  p-1 rounded-full w-[100px] bg-primaryColor">
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className=" bg[#000000] border rounded-2xl m-2  border-primaryColor h-[458px]  lg:w-[505px] md:w-[608px]">
                <h1 className=" font-bold text-2xl p-5">Order Summary</h1>
             <div className=" flex flex-col gap-5">
             <div className=" flex justify-between mx-4">
                    <p className="text-textColor">Subtotal</p>
                    <h1 className=" font-bold  text-xl">565$</h1>
                </div>
                <div className=" flex justify-between mx-4">
                    <p className="text-textColor">Discount (-20%)</p>
                    <h1 className=" font-bold text-xl text-[red]">-$113$</h1>
                </div>
                <div className=" flex justify-between mx-4">
                    <p className="text-textColor">Delivery Fee</p>
                    <h1 className=" font-bold text-xl">15$</h1>
                </div>
             </div>
             <hr className=" text-textColor mt-4 w-[470px]  m-auto" />
             <div className=" mt-4 flex justify-between mx-4">
                    <p className="text-textColor">Total</p>
                    <h1 className=" font-bold text-xl">467$</h1>
                </div>
               <div className=" ml-5">
               <div className=" flex mt-4   gap-2">
                    <button className=" bg-[#F0F0F0] w-[326px] p-4 rounded-full">Add Promo Code</button>
                    <button className=" bg-secondaryColor text-primaryColor w-[125px] p-4 rounded-full">Apply</button>
                </div>
                <div className=" flex mt-8  gap-2">
                    <button className=" bg-secondaryColor text-primaryColor w-[470px] p-4 rounded-full">Go to Checkout</button>
                </div>
               </div>
            </div>
           </div>
          );
        })}
      </div>
      <Footer3/>
      <Footer1/>
    </div>
  );
}
