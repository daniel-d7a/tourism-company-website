import { DestinationInfo } from "../models/Interfaces"
import travelImg from "../assets/travelling.jpg"
import DestinationCard from "./ui/destinationCard"

export default function TopDestinationSection() {

    let info: DestinationInfo[] = [
        {
            src: travelImg, title: "Lorem, ipsum dolor.", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus possimus sunt fugit hic harum obcaecati"
        },
        {
            src: travelImg, title: "Lorem, ipsum dolor.", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus possimus sunt fugit hic harum obcaecati"
        }, {
            src: travelImg, title: "Lorem, ipsum dolor.", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus possimus sunt fugit hic harum obcaecati"
        }
    ]

    return (
        <section className="mt-5 md:p-20 p-5">
            <h3 className="title text-center">Explore Top Destination</h3>
            <div className="grid md:grid-cols-3 gap-5 m-10">
                {
                    info.map((item, index) => <DestinationCard key={index} params={item} />)
                }
            </div>

        </section>
    )
}
