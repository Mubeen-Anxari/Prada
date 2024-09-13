"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
  <div>
      <div className="max-w-[1100px] m-auto grid grid-cols-1 md:grid-cols-2 bg-blacklColor  mt-20">
      <div className="mt-10">
        <h1 className="text-3xl font-bold flex justify-center  text-redColor mb-6">Contact Us</h1>
        <p className=" mx-2 flex justify-center text-whiteColor">
          A "Contact Me" page offers a simple way for visitors to reach out
          directly. It typically includes an email address, phone number, or a
          contact form for easy communication. This page helps build personal
          connections and makes it convenient for users to get in touch.
        </p>
        <div className=" flex justify-center mt-10 gap-4  ">
            <Link
              className="  text-textinsta"
              href="https://www.instagram.com/mubeenansari1220/"
            >
              <FaSquareInstagram className="cursor-pointer " />
            </Link>
            <Link
              className="text-whiteColor"
              href="https://x.com/Mubeenansari96"
            >
              <FaTwitter className="cursor-pointer " />
            </Link>
            <Link
              className="text-textfb"
              href="https://www.facebook.com/Mubeenansari1220"
            >
              <FaFacebook className="cursor-pointer " />
            </Link>
            <Link
              className="text-whiteColor"
              href="https://www.tiktok.com/search?q=mubeen%20ansari%201220&t=1726123537412"
            >
              <AiFillTikTok className="cursor-pointer " />
            </Link>
          </div>
      </div>
      <div className="bg-gray mt-10 lg:w-[450px]   p-8 rounded-lg shadow-lg w-full ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-redColor font-bold  mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 bg-blacklColor text-whiteColor rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-redColor font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              className="w-full p-3 border bg-blacklColor text-whiteColor border-gray-300 rounded-lg"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-redColor font-boldmb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border bg-blacklColor text-whiteColor border-gray-300 rounded-lg"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-redColor text-whiteColor text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <hr className=" text-redColor mt-6 " />
  </div>
  );
}
