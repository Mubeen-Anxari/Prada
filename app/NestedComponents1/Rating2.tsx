import React from "react";
import { IoIosStar } from "react-icons/io";

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  const dummyArray = Array.from({length:rating}).fill("");

  return (
    <div className="flex gap-2">
      {dummyArray.map((item) => {
        return <IoIosStar color="#FFC633" />;
      })}
    </div>
  );
}
