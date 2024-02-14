import { FeatureInfo } from "../Interfaces";

export default function FeatureCard({ params }: { params: FeatureInfo }) {

    return (
        <div className="text-center my-3 p-10 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex justify-center">{params.src}</div>
            <h2 className="font-bold text-xl">{params.title}</h2>
            <p>{params.description}</p>

        </div>
    )
}
