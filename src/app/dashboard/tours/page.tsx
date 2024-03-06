import { Button } from "@/components/ui";
import { ToursTable } from "./_components/ToursTable";
import { getTours } from "@/lib/actions/tour.actions";
import Link from "next/link";

export default async function ToursPage({
  searchParams: { page = 1 },
}: {
  searchParams: { page: number };
}) {
  const data = await getTours(page);
  const tableData = data.data!;

  return (
    <>
      <div className="text-2xl font-semibold h-20 shadow-md py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Tours
        <Button>
          <Link href="/dashboard/tours/add">add</Link>
        </Button>
      </div>
      <div className="my-4">
        <ToursTable data={tableData} />
      </div>
    </>
  );
}
