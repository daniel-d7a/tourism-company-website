import { Button } from "@/components/ui";
import { ToursTable } from "./_components/ToursTable";
import { getTours } from "@/lib/actions/tour.actions";
import Link from "next/link";
import { SearchForm } from "@/app/(home)/tours/_components/searchForm";
import { PageParams } from "@/models";

export default async function ToursPage({
  searchParams: { page = 1, q = "" },
}: PageParams) {
  const data = await getTours(page, q);
  return (
    <>
      <div className="text-2xl font-semibold h-20 shadow-md py-4 px-4 bg-white flex  items-center justify-between">
        Tours
        <div className="w-2/3 mx-auto">
          <SearchForm />
        </div>
        <Button>
          <Link href="/dashboard/tours/add">add</Link>
        </Button>
      </div>
      <div className="my-4 mx-4">
        <ToursTable data={data} />
      </div>
    </>
  );
}
