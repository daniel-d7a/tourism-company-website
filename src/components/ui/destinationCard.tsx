import Image from "next/image";
import { Tour } from "@/models";
import { FaArrowRight } from "react-icons/fa6";
import placeholderImg from "@/assets/travelling.jpg";

export function DestinationCard({
  tour: { description, name, media },
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
      />
      <h5 className="text-2xl m-3 font-semibold text-secondary-foreground">
        {name}
      </h5>
      <p className="m-2">{description}</p>
      <button className="button my-5 mx-auto flex items-center justify-center ">
        Learn more
        <FaArrowRight className="mx-2" />
      </button>
    </div>
  );
}
