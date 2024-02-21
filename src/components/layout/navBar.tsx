"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";


export default function Nav() {


  return (
    <header className="w-screen text-black bg-white  shadow-md fixed z-20">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src={logo} alt="logo" width={100} height={50} />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
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
      </div>
    </header>
  );
}
