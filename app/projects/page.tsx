import Image from "next/image";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";

const images = [
  {
    image: "/images/web1.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
  {
    image: "/images/web2.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
  {
    image: "/images/web3.jpeg",
    title: "Free Website",
    description:
      "At our website, we are dedicated to providing you with an exceptional online experience. Whether you're looking to explore new ideas, discover innovative solutions, or connect with like-minded individuals, we have something for everyone.",
  },
];
export default function Project() {
  return (
    <div>
      <div className=" justify-center flex flex-col max-w-[1100px] pt-10 m-auto">
        <h1 className="justify-center flex text-redColor text-xl font-serif font-bold ">
          MY WORK
        </h1>
        <h1 className="pt-4 text-whiteColor justify-center flex font-serif text-7xl">Projects</h1>
        <p className="w-full text-center   text-whiteColor pt-8">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
        <div className="max-w-[1100px] m-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <Projects />
        </div>
       
      <div className=" pt-8">
        <hr className=" text-redColor" />
      </div>{" "}
      <Contact/>
    </div>
  );
}
