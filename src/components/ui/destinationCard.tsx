import Image from "next/image";
import { Tour } from "@/models";
import { FaArrowRight } from "react-icons/fa6";
import placeholderImg from "@/assets/travelling.jpg";
import Link from "next/link";

export function DestinationCard({
  tour: { description, name, media,id },
}: {
  tour: Tour;
}) {
  const img = media?.[0]?.original_url || placeholderImg;

  return (
    <div className="shadow-md rounded-md overflow-hidden text-center p-5">
      <Image
        className="lg:h-48 md:h-40 w-full object-cover object-center hover:scale-105 transition duration-500 cursor-pointer"
        src={img}
        alt={name}
        width={200}
        height={100}
      />
      <h5 className="text-2xl m-3 font-semibold text-secondary-foreground">
        {name}
      </h5>
      <p className="m-2">{description}</p>
      <Link
        href={`/tours/${id}`}
        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
      >
        Learn More
        <FaArrowRight className="mx-3" />
      </Link>
    
    </div>
  );
}
