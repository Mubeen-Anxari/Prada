import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Rating from "./Rating2";

const card = [
  {
    rating: 3,
    title: "Sarah M.",
    description:
      "m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I",
  },
  {
    rating: 4,
    title: "Sarah M.",
    description:
      "m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I",
  },
  {
    rating: 3,
    title: "Sarah M.",
    description:
      "m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I",
  },
  {
    rating: 5,
    title: "Sarah M.",
    description:
      "m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I",
  },
];
export default function Page2Cards() {
  return (
    <div className=" grid md:grid-cols-1 mt-20 lg:grid-cols-2   max-w-[1200px] m-auto gap-4">
      {card?.map((item) => {
        return (
          <div>
            <Card className=" p-5">
              <CardHeader className="flex gap-3">
                <Rating rating={item?.rating} />
              </CardHeader>
              <div className="flex flex-col">
                <p className="text-md font-bold">{item?.title}</p>
              </div>
              <p>{item?.description} </p>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
