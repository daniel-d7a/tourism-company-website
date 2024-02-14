import Image from "next/image";
import star from "../../assets/star.png"
import { TourInfo } from "../Interfaces";
import Link from "next/link";

export default function TourCard({ params }: { params: TourInfo }) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Image className="lg:h-48 md:h-40 w-full object-cover object-center hover:scale-110 transition duration-500 cursor-pointer" src={params.src} alt={params.title} />
      <div className="p-3 capitalize">
        <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">{params.destination}</h2>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-900">{params.title}</h1>
          <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md font-medium">
            {params.rate}
            <Image className="mx-2" src={star} alt="rate" width="16" />
          </span>
        </div>
        <p className="leading-relaxed mb-3">{params.description.split(" ").slice(1, 15).join(" ")}</p>
        <div className="flex items-center justify-between flex-wrap ">
          <Link href={`/tours/${params.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>

  )
}
