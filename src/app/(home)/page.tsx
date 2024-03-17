import Image from "next/image";
import homeImg from "@/assets/homepage.jpg";
import {
  TopDestination,
} from "@/app/(home)/_components/topDestination";
import { SearchForm } from "@/app/(home)/tours/_components/searchForm";
import { Partners } from "@/app/(home)/_components/partners";
import Booking from "@/app/(home)/_components/booking";
import { Services } from "@/app/(home)/_components/services";
import { Welcome } from "@/app/(home)/_components/Welcome";

export default function Home() {
  return (
    <main>
      <div className="min-w-full h-screen relative">
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-15 text-white absolute">
          <div className="w-2/3">
            <h1 className="text-5xl font-semibold w-full md:w-2/3 my-5 text-left ">No matter where you’re going to, we’ll take you there</h1>
            <SearchForm />
          </div>
          <Image
            src={homeImg}
            alt="homepage"
            fill
            className="-z-10 absolute object-cover"
          />
        </div>
      </div>
      <Partners />
      <Services />
      <Welcome />
      <Booking />
      <TopDestination />
    </main>
  );
}
