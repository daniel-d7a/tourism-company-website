import { DestinationCard } from "@/components/ui";
import { getTours } from "@/lib/actions/tour.actions";

export async function TopDestinationSection() {
  const tours = await getTours();

  return (
    <section className="mt-5 md:p-20 p-5">
      <h3 className="title text-center">Explore Top Destination</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {tours.data.slice(0, 3).map((item, index) => (
          <DestinationCard key={index} tour={item} />
        ))}
      </div>
    </section>
  );
}
