"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Logo from "../Logos/page";

export default function PortfolioNavbar() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
  <div className=" max-w-[1200px]  m-auto">
      <Navbar className="bg-blacklColor" maxWidth="full" isBordered>
      <NavbarContent className="md:hidden">
        <NavbarMenuToggle icon={<RxHamburgerMenu color="white" size={25} />} />
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
        </NavbarBrand>
       <div>
       <NavbarContent className="hidden sm:flex gap-5">
          <NavbarItem className=" flex gap-1 ">
            <Link
              className=" text-redColor font-bold"
              color="foreground"
              href="/Detail"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link className=" text-whiteColor font-bold" href="#" aria-current="page" color="secondary">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className=" text-whiteColor font-bold" color="foreground" href="#">
              Work
            </Link>
          </NavbarItem>
        
        
          <NavbarItem>
            <Link className="  text-whiteColor font-bold" color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
       </div>
      </NavbarContent>

      <div>
      <NavbarContent as="div" className="items-center" justify="end">
      
      </NavbarContent>
      </div>

      <NavbarMenu className=" bg-primaryColor pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  </div>
  );
}
