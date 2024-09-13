import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div>
      <div className="max-w-[1100px] m-auto grid grid-cols-1 md:grid-cols-2">
        <div className="pt-20 mx-2 flex justify-center">
          <div className="justify-center">
            <h1 className="text-redColor text-xl font-serif">_ I am</h1>
            <h1 className="pt-4 text-whiteColor text-6xl font-serif">
              Mubeen Ansari
            </h1>
            <h1 className="text-redColor pt-4 text-xl font-serif">
              Web Developer
            </h1>
            <p className="max-w-[500px] text-whiteColor pt-4 font-serif">
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Three.js. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
            <Link href="/#">
              <button className="text-whiteColor font-bold p-2 w-[150px] border mt-6 border-redColor rounded-full">
                About Me
              </button>
            </Link>
          </div>
        </div>
        <div className="flex gap-10  justify-center">
          <div className=" mt-10 flex justify-center">
            <Image
              className="md:ml-44"
              src="/portfolio1.png"
              height={300}
              width={300}
              alt="pic"
              priority
            />
          </div>
          <div className="flex  mx-2 pt-32 gap-4 flex-col">
            <Link href="https://www.instagram.com/mubeenansari1220/">
              <FaSquareInstagram className="text-textinsta cursor-pointer" />
            </Link>
            <Link href="https://x.com/Mubeenansari96">
              <FaTwitter className="text-whiteColor cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/Mubeenansari1220">
              <FaFacebook className="text-textfb cursor-pointer" />
            </Link>
            <Link href="https://www.tiktok.com/search?q=mubeen%20ansari%201220&t=1726123537412">
              <AiFillTikTok className="text-whiteColor cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <hr className="text-redColor" />
      </div>
    </div>
  );
}
