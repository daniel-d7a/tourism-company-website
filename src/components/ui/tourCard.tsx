"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Tour } from "@/models";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      {!tour.media.length ? (
        ""
      ) : (
        <Image
          className="lg:h-48 md:h-40 w-full object-cover object-center hover:scale-110 transition duration-500 cursor-pointer"
          src={tour.media?.[0]?.original_url}
          width={500}
          height={350}
          alt={tour.name}
        />
      )}

      <div className="mt-auto p-3 capitalize">
        <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
          {tour.location}
        </h2>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-900">{tour.name}</h1>
          {/* <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md font-medium">
            {tour.rate}
            <Image className="mx-2" src={star} alt="rate" width="16" />
          </span> */}
        </div>
        <p className="leading-relaxed mb-3">
          {tour.description.split(" ").slice(1, 15).join(" ")}
        </p>
        <div className="flex items-center justify-between flex-wrap ">
          <Link
            href={`/tours/${tour.id}`}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Learn More
            <FaArrowRight className="mx-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
