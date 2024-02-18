import { getReviews } from "@/lib/reviews/reviews.actions";
import { ReviewsTable } from "./_components/ReviewsTable";

export default async function page({
  searchParams: { page = 1 },
}: {
  searchParams: { page: number };
}) {
  const reviews = await getReviews(page);
  console.log(reviews);

  return (
    <>
      <div className="text-2xl font-semibold py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Reviews
      </div>
      <div className="mt-4">
        <ReviewsTable data={reviews.data!} />
      </div>
    </>
  );
}
