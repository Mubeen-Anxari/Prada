"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../components/hooks/hook";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { addToCart, getProducts } from "../redux/CartSlice";

export default function Api() {
  const cartUser = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(cartUser);

  return (
    <div className=" grid md:grid-cols-2 gap-2 lg:grid-cols-4">
      {cartUser?.products?.map((item) => {
        return (
          <div>
            <Card className="py-4 h-[500px] ">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item?.image}
                  width={150}
                  height={600}
                />
              </CardBody>
              <CardHeader className="=px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {item?.category}
                </p>
                <small className="text-default-500">
                  {item?.description.slice(0, 150)}
                </small>
                <h4 className="font-bold text-large">{item?.price}</h4>
              </CardHeader>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="  bg-secondaryColor text-primaryColor p-2 rounded-full"
              >
                Add to Cart
              </button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
