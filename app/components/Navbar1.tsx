import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function App() {
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
    <Navbar maxWidth="full" isBordered>
      <NavbarContent className="md:hidden">
        <NavbarMenuToggle icon={<RxHamburgerMenu color="black" size={25} />} />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5">
          <NavbarItem className=" flex gap-1 ">
            <Link color="foreground" href="#">
              Shop
            </Link>
            <Image src="/Frame.png" width={10} height={10} alt="pic"></Image>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              On Sale
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              New Arrival
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Brands
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "hidden md:flex h-10 w-[577px] md:w-full",
            mainWrapper: "h-full",
            input: "text-small bg-primaryColor",
            inputWrapper:
              "h-full  font-normal bg-primaryColor text-default-500 ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<IoIosSearch className=" text-textColor" />}
          type="search"
        />
        <HiOutlineShoppingCart className=" w-[40px]  h-6" />
        <FaRegUserCircle className="w-8 h-6" />
      </NavbarContent>

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
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
