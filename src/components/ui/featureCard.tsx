import { FeatureInfo } from "@/models";

export function FeatureCard({ params }: { params: FeatureInfo }) {
  return (
    <div className="text-center p-10 rounded-3xl overflow-hidden shadow-md">
      <div className="flex justify-center text-6xl text-secondary">
        {params.src}
      </div>
      <h2 className="font-bold text-xl">{params.title}</h2>
      <p>{params.description}</p>
    </div>
  );
}
