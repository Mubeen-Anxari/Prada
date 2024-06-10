import React from "react";

export default function TopNav() {
  return (
    <div className="flex gap-1 bg-secondaryColor justify-center items-center">
      <h1 className=" text-center text-xs md:text-sm  text-whiteColor">
        Sign up and get 20% off to your first order.
      </h1>
      <h2 className=" text-center  text-base text-whiteColor md:text-base underline">
        Sign Up Now
      </h2>
    </div>
  );
}
