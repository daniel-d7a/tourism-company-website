"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export function Nav() {
  return (
    <header
      className="w-screen text-black bg-white shadow-md fixed z-10
     flex justify-between items-center md:px-16 px-8 md:py-0 py-2"
    >
      <Link
        href="/"
        className="md:w-1/3 w-1/6 flex font-medium items-center text-white"
      >
        <Image src={logo} alt="logo" width={100} height={50} />
      </Link>

      <nav className="md:text-xl md:space-x-4 md:w-1/3 w-3/4 ml-auto flex items-center justify-around md:justify-center">
        <Link href="/" className="navItem">
          Home
        </Link>
        <Link href="/tours" className="navItem">
          Tours
        </Link>
        <Link href="/about" className="navItem">
          About
        </Link>
        <Link href="/dashboard" className="navItem">
          dashboard
        </Link>
      </nav>
    </header>
  );
}
