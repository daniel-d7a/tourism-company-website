import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import Link from "next/link";
import star from "@/assets/star.png";
import Image from "next/image";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { getSingleTour } from "@/lib/actions/tour.actions";
import { MdCancel, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import placeholderImg from "@/assets/travelling.jpg";
import { ReviewForm } from "./_components/form/reviewForm";
import { cookies } from "next/headers";

export default async function TourPage({
  params: { tourId },
}: {
  params: { tourId: string };
}) {
  const tour = await getSingleTour(Number(tourId));
  const {
    name,
    location,
    description,
    duration,
    includes,
    excludes,
    media,
    options,
    price,
    reviews,
  } = tour;

  return (
    <>
      <div className="md:px-24 md:pt-32 pt-24 px-10 grid md:grid-cols-2 md:gap-3">
        {!media.length ? (
          <Image
            className="w-full h-auto"
            src={placeholderImg}
            width={500}
            height={50}
            alt={tour.name}
          />
        ) : (
          <div className="w-full flex justify-center items-baseline">
            <Carousel className="w-4/5 md:w-full">
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent>
                {media?.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.original_url}
                      alt={name}
                      width={500}
                      height={350}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-base text-gray-600 my-1">
                      Slide of {index + 1} of {media.length}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}

        <div className="md:px-10 flex-col justify-between capitalize">
          <div className="space-y-4">
            <h2 className="tracking-widest font-medium text-xl text-gray-400 mb-1">
              {location}
            </h2>
            <h1 className="text-4xl font-medium">{name}</h1>
            <p className="text-2xl">{description}</p>
            <h3 className="text-2xl font-medium">
              {" "}
              Duration : <span className="font-normal"> {duration}</span>
            </h3>
            <h3 className="text-2xl font-medium">
              price : <span className="font-normal"> {price}</span> $
            </h3>
          </div>

          <Link
            href={`/tours/${tourId}/reserve`}
            className="w-2/3 block text-2xl text-center font-medium mx-auto px-5 py-2 my-16 rounded-md text-white bg-secondary-foreground transition duration-300 ease-in-out hover:bg-secondary"
          >
            reserve
          </Link>
        </div>
      </div>

      <div className="mt-5 md:px-24 px-8 font-lato capitalize">
        <h3 className="text-3xl font-serif my-3 py-3 border-b-2">overview</h3>
        {!includes.length ? (
          ""
        ) : (
          <>
            <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
              {" "}
              <FaCheckCircle color="green" className="mx-2" /> Include
            </h3>
            <ul className="mx-10 mt-1 mb-6 text-xl">
              {includes?.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <FaCheck color="green" />
                  <li className="font-medium mx-2">{item}</li>
                </div>
              ))}
            </ul>
          </>
        )}
        {!excludes.length ? (
          ""
        ) : (
          <>
            <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
              {" "}
              <MdCancel className="text-red-700 mx-2" />
              Exclude
            </h3>
            <ul className="mx-10 mt-1 mb-6 text-xl">
              {excludes?.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <span className="text-lg font-extrabold text-red-700">x</span>
                  <li className="font-medium mx-2">{item}</li>
                </div>
              ))}
            </ul>
          </>
        )}
        {!options.length ? (
          ""
        ) : (
          <>
            <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
              <FaBed className="mx-2" /> Options
            </h3>
            <ul className="mx-10 my-t mb-6 text-xl">
              {options?.map((item, index) => (
                <div className="flex items-top my-3" key={index}>
                  <MdKeyboardDoubleArrowRight className="mx-2 text-2xl font-semibold" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={`opt${index}`}
                      className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.name}
                    </label>
                    <p className="text-base font-medium">
                      extra price :{item.price} $
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </>
        )}

        {cookies().has(`reviewe/tour/${tourId}`) && (
          <>
            <h3 className="mt-10 text-3xl font-medium font-lato  my-3 py-3 border-b-2 col-span-2 ">
              Leave a review
            </h3>
            <div className="mb-10">
              <ReviewForm tour_id={Number(tourId)} />
            </div>
          </>
        )}

        {!reviews.length ? (
          ""
        ) : (
          <>
            <h3 className="mt-10 text-3xl font-medium font-lato  my-3 py-3 border-b-2 col-span-2 ">
              Overall Reviews
            </h3>
            <div className="mb-10 capitalize items-start">
              {reviews?.map((item, index) => (
                <div className="border-b-2 py-3" key={index}>
                  <div className="flex items-center justify-between">
                    <p className="text-xl">{item.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{item.stars}</span>
                      <Image
                        className="mx-2 inline"
                        src={star}
                        alt="rate"
                        width={15}
                      />
                    </div>
                  </div>
                  <p className="my-1">{item.body}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
