import { getSingleTour } from "@/lib/tour/tour.actions";
import { SingleTourButtons } from "./_components/SingleTourButtons";

export default async function SingleTourPage({
  params: { tourId },
}: {
  params: { tourId: string };
}) {
  const tour = await getSingleTour(Number(tourId));
  const { name, description, location, duration } = tour.data!;
  return (
    <>
      <div className="text-3xl font-semibold py-4 px-4 ml-1 bg-white flex justify-between">
        {name}
      </div>
      <div className="bg-white m-4 rounded p-4 space-y-4">
        <div>
          <p className="font-semibold capitalize">description:</p>
          <p>{description}</p>
        </div>
        <div>
          <p className="font-semibold capitalize">location</p>
          <p>{location}</p>
        </div>
        <div>
          <p className="font-semibold capitalize">duration</p>
          <p>{duration}</p>
        </div>
        <SingleTourButtons tourId={Number(tourId)} />
      </div>
    </>
  );
}
