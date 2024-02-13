
import Image from "next/image";
import { CardInfo } from "./Interfaces";

export default function TravelCard({ params }: { params: CardInfo }) {
    return (
        <div className="shadow rounded-md overflow-hidden text-center">
            <Image src={params.src} alt={params.title} />
            <h5 className="text-xl m-2">{params.title}</h5>
            <p className="m-2">{params.description}</p>
            <button className="button my-5 mx-auto ">Learn more
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg></button>
        </div>
    )
}
