import Image from "next/image";
import { DestinationInfo } from "@/models";
import { FaArrowRight } from "react-icons/fa6";

export function DestinationCard({ params }: { params: DestinationInfo }) {
  return (
    <div className="shadow-md rounded-md overflow-hidden text-center p-5">
      <Image
        className="lg:h-48 md:h-40 w-full object-cover object-center hover:scale-105 transition duration-500 cursor-pointer"
        src={params.src}
        alt={params.title}
      />
      <h5 className="text-2xl m-3 font-semibold text-secondary-foreground">
        {params.title}
      </h5>
      <p className="m-2">{params.description}</p>
      <button className="button my-5 mx-auto flex items-center justify-center ">
        Learn more
        <FaArrowRight className="mx-2" />
      </button>
    </div>
  );
}
