import { getReviews } from "@/lib/actions/reviews.actions";
import { ReviewsTable } from "./_components/ReviewsTable";
import { SearchForm } from "@/app/(home)/tours/_components/searchForm";
import { PageParams } from "@/models";

export default async function page({
  searchParams: { page = 1, q = "" },
}: PageParams) {
  const reviews = await getReviews(page, q);

  return (
    <>
      <div className="text-2xl font-semibold py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Reviews
        <div className="w-2/3 mx-auto">
          <SearchForm />
        </div>
      </div>
      <div className="mt-4 mx-4">
        <ReviewsTable data={reviews} />
      </div>
    </>
  );
}
