import tourImg from "@/assets/travelling.jpg";
import TourCard from "@/components/ui/tourCard";
import { getTours } from "@/lib/tour/tour.actions"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function Tours() {

  const data = await getTours();
  const toursArray = data.data?.data!;

  return (
    <section className="min-h-screen w-full md:pt-24 pt-32 md:px-24 px-12 flex  items-center flex-col">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search..."
          id="search"
          name="hero-field"
          className="placeholder:px-2 font-medium w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:px-2 focus:bg-transparent focus:border-black text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="my-10 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {toursArray.map((tour, index) => (
          < TourCard key={index} params={tour} img={tourImg} />
        ))}
      </div>

      {/* <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </section>
  );
}
