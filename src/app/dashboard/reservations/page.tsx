export default function ReservationsPage({
  searchParams: { page = 1 },
}: {
  searchParams: { page: number };
}) {
  const data = {};

  return (
    <>
      <div className="text-2xl font-semibold h-20 shadow-md py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Reservations
      </div>
      <div className="my-4"></div>
    </>
  );
}
