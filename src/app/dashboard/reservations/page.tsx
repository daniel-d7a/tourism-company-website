import { getReservations } from "@/lib/actions/reservations.actions";
import { ReservationsTable } from "./_components/ReservationTable";

export default async function ReservationsPage({
  searchParams: { page = 1, },
}: {
  searchParams: { page: number };
}) {
  const data = await getReservations(page);

  return (
    <>
      <div className="text-2xl font-semibold h-20 shadow-md py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Reservations
      </div>
      <div className="my-4 mx-4">
        <ReservationsTable data={data} />
      </div>
    </>
  );
}
