"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../components/hooks/hook";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { addQuantity, removeCart, removeQuantity } from "../redux/CartSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Cart() {
  const cartUser = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
 

  return (
   
    <div className=" grid md:grid-cols-2 gap-2 lg:grid-cols-4">
      {cartUser?.cart?.map((item) => {
        return (
          <div>
            <Card
                isBlurred
                className="border-primaryColor bg-background/60 dark:bg-default-100/50 h-[350px]"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid  items-center justify-center">
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
                        <RiDeleteBin6Fill onClick={()=>dispatch(removeCart(item?.id))} className=" cursor-pointer ml-20   text-[red]" />
                        <div className=" flex justify-between  p-1 rounded-full w-[100px] bg-primaryColor">
                            <p className=" cursor-pointer"  onClick={()=>dispatch(removeQuantity(item?.id))} >-</p>
                            <p>{item?.quantity}</p>
                            <p className=" cursor-pointer"  onClick={()=>dispatch(addQuantity(item?.id))}>+</p>
                        </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
          </div>
        );
      })}
    </div>
  );
}
