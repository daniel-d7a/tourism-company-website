import { getSingleTour } from "@/lib/tour/tour.actions";
import { TourForm } from "../../add/form/TourForm";

export default async function EditPage({
  params: { tourId },
}: {
  params: { tourId: string };
}) {
  const tourData = await getSingleTour(Number(tourId));

  return (
    <>
      <TourForm tourData={tourData.data!} />
    </>
  );
}
