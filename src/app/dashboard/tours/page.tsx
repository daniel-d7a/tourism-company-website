import { Button } from "@/components/ui/button";
import { ToursTable } from "./_components/ToursTable";
import { getTours } from "@/lib/tour/tour.actions";
import Link from "next/link";

export default async function ToursPage() {
  const data = await getTours();
  const tableData = data.data?.data!;

  console.log("tabel data => ", tableData);

  return (
    <>
      <div className="text-2xl font-semibold pt-4 pb-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Tours
        <Button>
          <Link href="/dashboard/tours/add">add</Link>
        </Button>
      </div>
      <p className="ml-4 my-4 font-semibold text-3xl">Tours</p>
      <ToursTable data={tableData} />
    </>
  );
}
