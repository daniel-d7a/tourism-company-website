import { getSingleTour } from "@/lib/tour/tour.actions";
import { SingleTourButtons } from "./_components/SingleTourButtons";
import Image from "next/image";

export default async function SingleTourPage({
  params: { tourId },
}: {
  params: { tourId: string };
}) {
  const tour = await getSingleTour(Number(tourId));
  const { name, description, location, duration, media, includes, excludes } =
    tour.data!;
  // console.log(media?.[0]?.original_url);
  // console.log(media?.[0]);

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

        <div>
          <p className="font-semibold capitalize">Includes</p>
          <ul className="list-disc list-inside">
            {includes?.map((include) => (
              <li className="ml-4" key={include}>
                {include}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold capitalize">Excludes</p>
          <ul className="list-disc list-inside">
            {excludes?.map((exclude) => (
              <li className="ml-4" key={exclude}>
                {exclude}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={media?.[0].original_url}
          alt={name}
          width={300}
          height={300}
        />
        <SingleTourButtons tourId={Number(tourId)} />
      </div>
    </>
  );
}
