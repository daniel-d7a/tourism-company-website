"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
export default function Nav() {
  const [header, setHeader] = useState(true);

  // const scrollNav = () => {
  //     if (window.scrollY >= 150) {
  //         setHeader(true);
  //     } else {
  //         setHeader(false);
  //     }
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', scrollNav);
  //     return () => {
  //         window.removeEventListener('scroll', scrollNav);
  //     };
  // }, []);

  return (
    <header
      className={
        header
          ? "w-screen text-black bg-white shadow-md fixed z-50"
          : " w-screen py-3 text-white bg-transparent fixed z-50"
      }
    >
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className={
            header
              ? "flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0"
              : "flex title-font font-medium items-center text-white mb-4 md:mb-0"
          }
        >
          <Image src={logo} alt="logo" width={100} height={50} />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
          <Link href="/" className="navItem">
            Home
          </Link>
          <Link href="/tours" className="navItem">
            Tours
          </Link>
          <Link href="#" className="navItem">
            About
          </Link>
          <Link href="/dashboard" className="navItem">
            dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
