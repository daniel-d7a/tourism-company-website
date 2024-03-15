"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Nav() {
  const [navHidden, setNavHidden] = useState(true);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tours",
      href: "/tours",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "dashboard",
      href: "/dashboard/tours",
    },
  ];

  return (
    <>
      <header className="w-screen text-black bg-white shadow-md fixed z-50 flex justify-between items-center md:px-16 px-8 md:py-0 py-2">
        <Link
          href="/"
          className="md:w-1/3 w-1/6 flex font-medium items-center text-white"
        >
          <Image src={logo} alt="logo" width={100} height={50} />
        </Link>

        <nav className="hidden  md:text-xl md:space-x-4 md:w-1/3 w-3/4 ml-auto md:flex items-center justify-around md:justify-center">
          {links.map((link) => (
            <Link className="navItem" href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="block md:hidden">
          <IoMdMenu
            color="black"
            size={22}
            onClick={() => setNavHidden(!navHidden)}
          />
        </div>
      </header>

      <div
        className={cn(
          "w-full z-40 divide-y-2 py-2 absolute top-14 left-0 transition-all flex flex-col bg-white space-y-2 justify-center",
          navHidden ? "-translate-y-96" : "-translate-y-0"
        )}
      >
        {links.map((link) => (
          <Link
            onClick={() => setNavHidden(true)}
            className="text-center"
            href={link.href}
            key={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
