import Image, { StaticImageData } from "next/image";
import star from "../../assets/star.png"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Tour } from "@/models/Tour";

export default function TourCard({ params, img }: { params: Tour, img: StaticImageData }) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Image className="lg:h-48 md:h-40 w-full object-cover object-center hover:scale-110 transition duration-500 cursor-pointer" src={img} alt={params.name} />
      <div className="p-3 capitalize">
        <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">{params.location}</h2>
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-900">{params.name}</h1>
          {/* <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md font-medium">
            {params.rate}
            <Image className="mx-2" src={star} alt="rate" width="16" />
          </span> */}
        </div>
        <p className="leading-relaxed mb-3">
          {params.description.split(" ").slice(1, 15).join(" ")}
        </p>
        <div className="flex items-center justify-between flex-wrap ">
          <Link href={`/tours/${params.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
            <FaArrowRight className="mx-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
