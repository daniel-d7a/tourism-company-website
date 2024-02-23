import { getSingleTour } from "@/lib/tour/tour.actions";
import ReservationForm from "./form/ReservationForm";

export default async function Reserve({ params: { tourId } }: { params: { tourId: string } }) {

  const tour = await getSingleTour(Number(tourId));
  const { options, price } = tour.data!;


  return (
    <>
      <section className="capitalize md:px-24 md:pt-28 pt-24 px-10 mb-10">
        <ReservationForm tourOptions={options} tourPrice={price} />
      </section>

    </>
  );
}
