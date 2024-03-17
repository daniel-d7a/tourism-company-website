import { DestinationCard } from "@/components/ui";
import { getTours } from "@/lib/actions/tour.actions";
import Image from "next/image";
import img from "@/assets/img.png"

export async function TopDestination() {
  const tours = await getTours();

  return (

    <>
      <section className="my-10 w-full relative">
        <Image className="object-cover" src={img} alt="Let’s make your next holiday amazing" />
        <span className="text-xl md:text-3xl font-semibold absolute top-1/2 left-1/4 text-white transform -translate-x-1/4 -translate-y-1/2 z-10 ">
          Let’s make your next holiday amazing
        </span>
      </section>
      <section className="w-5/6 m-5 mx-auto md:flex flex-col items-center justify-around">
        <p className="text-primary-foreground text-sm uppercase font-semibold">Trend</p>
        <h3 className="text-4xl font-semibold my-3">Our Trending Tours</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {tours.data.slice(0, 3).map((item, index) => (
            <DestinationCard key={index} tour={item} />
          ))}
        </div>
      </section>
    </>
  );
}
