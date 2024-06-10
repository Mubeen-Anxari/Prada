import React from "react";

export default function Footer() {
  return (
     <div className=" mx-20 my-10">
       <div className=" max-w-[1100px]  grid md:grid-cols-1 flex-1 flex-col lg:grid-cols-2    m-auto mt-10 py-10 bg-secondaryColor rounded-xl">
        
        <div>
        <h1 className=" mt-10 text-center    font-bold text-4xl text-whiteColor">
        STAY UPTO DATE ABOUT OUR LATEST OFFERSn 
        </h1>
      </div>
      <div className=" flex flex-1 flex-col ml-10 pt-8 gap-2    ">
        <input className=" h-10 pl-4 w-[249px] rounded-full " type="text" placeholder=" Enter your Email Address" />
        <button className=" h-10 pl-4 w-[249px] rounded-full text-secondaryColor  font-bold text-xs bg-primaryColor  ">Subscribe to Newsletter</button>
        </div>
      </div>
     </div>
  );
}
