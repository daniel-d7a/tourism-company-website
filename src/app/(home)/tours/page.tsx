import { Paginator } from "@/components/lib";
import { TourCard } from "@/components/ui";
import { getTours } from "@/lib/actions/tour.actions";
import { SearchForm } from "./_components/searchForm";
import { PageParams } from "@/models";

export default async function Tours({
  searchParams: { page = 1, q = "" },
}: PageParams) {
  const data = await getTours(page, q);
  const toursArray = data.data;

  const noTours = toursArray.length === 0;

  const tours = (
    <div className="my-10 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {toursArray.map((tour, index) => (
        <TourCard key={index} tour={tour} />
      ))}
    </div>
  );

  return (
    <section className="min-h-screen w-full pt-24 md:pt-32  md:px-24 px-8 flex  items-center flex-col">
      <SearchForm />
      {noTours ? <EmptyText /> : tours}
      <div className="mb-4 ">
        <Paginator page={page} lastPage={data?.last_page || 1} />
      </div>
    </section>
  );
}

const EmptyText = () => (
  <div className="h-80 grid place-items-center">
    <p className="text-2xl">No tours found</p>
  </div>
);
