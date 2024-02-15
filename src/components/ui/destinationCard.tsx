import Image from "next/image";
import { DestinationInfo } from "../../models/Interfaces";
import { FaArrowRight } from "react-icons/fa6";

export default function DestinationCard({ params }: { params: DestinationInfo }) {
    return (
        <div className="shadow rounded-md overflow-hidden text-center">
            <Image src={params.src} alt={params.title} />
            <h5 className="text-xl m-2">{params.title}</h5>
            <p className="m-2">{params.description}</p>
            <button className="button my-5 mx-auto flex items-center justify-center ">Learn more
                <FaArrowRight className="mx-2" />
            </button>
        </div>
    )
}
