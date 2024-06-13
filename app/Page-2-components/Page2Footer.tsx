import React from "react";

export default function Page2Footer() {
  return (
     <div className=" mx-20   mt-10">
       <div className=" max-w-[1000px]  grid md:grid-cols-1   lg:grid-cols-2 ml-10 m-auto  py-4 bg-secondaryColor rounded-xl">
        <div>
        <h1 className=" mt-2 text-center font-bold  text-4xl text-whiteColor">
        STAY UPTO DATE ABOUT OUR LATEST OFFERSn 
        </h1>
      </div>
      <div className=" flex flex-1 flex-col mx-2  gap-2    ">
        <input className=" h-10 pl-2 w-full md:w-[249px] rounded-full " type="text" placeholder=" Enter your Email Address" />
        <button className=" h-10 text-center w-full md:w-[249px] rounded-full text-secondaryColor  font-bold text-xs bg-primaryColor  ">Subscribe to Newsletter</button>
        </div>
      </div>
     </div>
  );
}
