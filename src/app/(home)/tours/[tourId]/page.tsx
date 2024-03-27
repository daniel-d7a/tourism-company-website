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
import img from "@/assets/img.png";
import { cn } from "@/lib/utils";
import { yesteryear } from "@/lib/fonts";
import {
  IoInformationCircleOutline,
  IoCalendarClearOutline,
  IoLocationOutline,
  IoImagesOutline,
} from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { FaStar, FaRegCheckCircle } from "react-icons/fa";

type TabNames = "info" | "reviews" | "media" | "";

export default async function TourPage({
  params: { tourId },
  searchParams: { tab },
}: {
  params: { tourId: string };
  searchParams: {
    tab: TabNames;
  };
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

  const formatter = new Intl.NumberFormat();

  const Info = () => {
    return (
      <div className="flex justify-between">
        <div className="px-8 py-10 w-3/5">
          <div className="flex gap-8 items-baseline">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-lg font-semibold text-primary-foreground">
              {formatter.format(price)} EGP
            </p>
          </div>
          <p className="text-sm mt-6">{description}</p>
          <br />
          <Detail name={"location"} value={location} />
          <br />
          <Detail name={"duration"} value={duration} />
          <br />
          <div className="grid grid-cols-3">
            <p className="capitalize text-primary-foreground font-semibold">
              Includes :
            </p>
            <div className="col-span-2 grid grid-cols-2 gap-y-4">
              {includes.map((i) => (
                <p key={i} className="flex items-center gap-2">
                  <FaRegCheckCircle size={14} className="mt-1" />
                  {i}
                </p>
              ))}
            </div>
          </div>
          <br />

          <div className="grid grid-cols-3 ">
            <p className="capitalize text-primary-foreground font-semibold">
              Excludes :
            </p>
            <div className="col-span-2 grid grid-cols-2 gap-y-4">
              {excludes.map((i) => (
                <p key={i} className="flex items-center gap-2">
                  <IoMdCloseCircleOutline size={16} className="mt-1" />
                  {i}
                </p>
              ))}
            </div>
          </div>
          {!!options.length && (
            <>
              <br />
              <div className="grid grid-cols-3 ">
                <p className="capitalize text-primary-foreground font-semibold">
                  Options :
                </p>
                <div className="col-span-2 grid grid-cols-2 gap-y-4">
                  {options.map((i) => (
                    <p
                      key={i.name}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>- {i.name}</span>
                      <span>{i.price} EGP</span>
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-1/3 bg-slate-100 mx-6 my-8">
          <p>Book</p>
        </div>
      </div>
    );
  };

  const Media = () => {
    return (
      <>
        {media.length === 0 && <div className="h-40" />}
        <div className="px-8 py-10 grid-cols-3 grid gap-4">
          {
            // Array(1)
            // .fill("")
            media.map((m) => (
              <Image
                className="w-80 h-60 object-cover"
                key={m.id}
                src={m.original_url}
                // key={Math.random()}
                // src={img}
                alt="img"
                width={500}
                height={500}
              />
            ))
          }
        </div>
      </>
    );
  };

  const Reviews = () => {
    return (
      <>
        {reviews.length === 0 && cookies().has(`reviewe/tour/${tourId}`) && (
          <div className="h-40" />
        )}
        <div className="px-8 py-10">
          {!cookies().has(`reviewe/tour/${tourId}`) && (
            <>
              <h3 className="mt-10 text-3xl font-medium font-lato  my-3 py-3 border-b-2 col-span-2 ">
                Leave a review
              </h3>
              <div className="mb-10">
                <ReviewForm tour_id={Number(tourId)} />
              </div>
            </>
          )}
          <>
            <h3 className=" text-3xl font-medium font-lato  mb-3 pb-3 border-b-2 col-span-2 ">
              Overall Reviews
            </h3>
            <div className="mb-10 capitalize items-start">
              {reviews?.map((item, index) => (
                <div className="border-b py-3" key={index}>
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
        </div>
      </>
    );
  };

  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="relative w-full">
          <div className="w-full flex items-center justify-center absolute top-[6rem] md:top-1/3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-white flex flex-col items-center w-2/3">
              <h2
                className={cn(
                  "text-4xl md:text-6xl font-semibold my-3 text-center capitalize",
                  yesteryear.className
                )}
              >
                travel with us
              </h2>
            </div>
          </div>
          <Image
            src={img}
            alt="img"
            width={800}
            height={200}
            className="w-full min-h-[15rem] md:min-h-[23rem]"
          />
        </div>

        <div className="relative md:-top-[5rem] bg-white rounded shadow w-5/6 mx-auto ">
          <div className="flex justify-center">
            <Tab
              text={"information"}
              Icon={IoInformationCircleOutline}
              link="info"
              active={tab === "info" || tab === ""}
            />
            <Tab
              text={"reviews"}
              Icon={IoLocationOutline}
              link="reviews"
              active={tab === "reviews"}
            />
            <Tab
              text={"gallery"}
              Icon={IoImagesOutline}
              link="media"
              active={tab === "media"}
            />
          </div>
          {(() => {
            switch (tab) {
              case "info":
                return <Info />;
              case "reviews":
                return <Reviews />;
              case "media":
                return <Media />;
              default:
                return null;
            }
          })()}
        </div>
      </section>
    </>
    // <>
    //   <div className="md:px-24 md:pt-32 pt-24 px-10 grid md:grid-cols-2 md:gap-3">
    //     {!media.length ? (
    //       <Image
    //         className="w-full h-auto"
    //         src={placeholderImg}
    //         width={500}
    //         height={50}
    //         alt={tour.name}
    //       />
    //     ) : (
    //       <div className="w-full flex justify-center items-baseline">
    //         <Carousel className="w-4/5 md:w-full">
    //           <CarouselPrevious />
    //           <CarouselNext />
    //           <CarouselContent>
    //             {media?.map((item, index) => (
    //               <CarouselItem key={index}>
    //                 <Image
    //                   src={item.original_url}
    //                   alt={name}
    //                   width={500}
    //                   height={350}
    //                   className="w-full h-auto"
    //                 />
    //                 <p className="text-center text-base text-gray-600 my-1">
    //                   Slide of {index + 1} of {media.length}
    //                 </p>
    //               </CarouselItem>
    //             ))}
    //           </CarouselContent>
    //         </Carousel>
    //       </div>
    //     )}

    //     <div className="md:px-10 flex-col justify-between capitalize">
    //       <div className="space-y-4">
    //         <h2 className="tracking-widest font-medium text-xl text-gray-400 mb-1">
    //           {location}
    //         </h2>
    //         <h1 className="text-4xl font-medium">{name}</h1>
    //         <p className="text-2xl">{description}</p>
    //         <h3 className="text-2xl font-medium">
    //           {" "}
    //           Duration : <span className="font-normal"> {duration}</span>
    //         </h3>
    //         <h3 className="text-2xl font-medium">
    //           price : <span className="font-normal"> {price}</span> $
    //         </h3>
    //       </div>

    //       <Link
    //         href={`/tours/${tourId}/reserve`}
    //         className="w-2/3 block text-2xl text-center font-medium mx-auto px-5 py-2 my-16 rounded-md text-white bg-secondary-foreground transition duration-300 ease-in-out hover:bg-secondary"
    //       >
    //         reserve
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="mt-5 md:px-24 px-8 font-lato capitalize">
    //     <h3 className="text-3xl font-serif my-3 py-3 border-b-2">overview</h3>
    //     {!includes.length ? (
    //       ""
    //     ) : (
    //       <>
    //         <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
    //           {" "}
    //           <FaCheckCircle color="green" className="mx-2" /> Include
    //         </h3>
    //         <ul className="mx-10 mt-1 mb-6 text-xl">
    //           {includes?.map((item, index) => (
    //             <div className="flex items-center" key={index}>
    //               <FaCheck color="green" />
    //               <li className="font-medium mx-2">{item}</li>
    //             </div>
    //           ))}
    //         </ul>
    //       </>
    //     )}
    //     {!excludes.length ? (
    //       ""
    //     ) : (
    //       <>
    //         <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
    //           {" "}
    //           <MdCancel className="text-red-700 mx-2" />
    //           Exclude
    //         </h3>
    //         <ul className="mx-10 mt-1 mb-6 text-xl">
    //           {excludes?.map((item, index) => (
    //             <div className="flex items-center" key={index}>
    //               <span className="text-lg font-extrabold text-red-700">x</span>
    //               <li className="font-medium mx-2">{item}</li>
    //             </div>
    //           ))}
    //         </ul>
    //       </>
    //     )}
    //     {!options.length ? (
    //       ""
    //     ) : (
    //       <>
    //         <h3 className="mt-5 text-2xl bg-gray-300 font-medium rounded-md p-1 flex items-center">
    //           <FaBed className="mx-2" /> Options
    //         </h3>
    //         <ul className="mx-10 my-t mb-6 text-xl">
    //           {options?.map((item, index) => (
    //             <div className="flex items-top my-3" key={index}>
    //               <MdKeyboardDoubleArrowRight className="mx-2 text-2xl font-semibold" />
    //               <div className="grid gap-1.5 leading-none">
    //                 <label
    //                   htmlFor={`opt${index}`}
    //                   className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //                 >
    //                   {item.name}
    //                 </label>
    //                 <p className="text-base font-medium">
    //                   extra price :{item.price} $
    //                 </p>
    //               </div>
    //             </div>
    //           ))}
    //         </ul>
    //       </>
    //     )}

    //     {!cookies().has(`reviewe/tour/${tourId}`) && (
    //       <>
    //         <h3 className="mt-10 text-3xl font-medium font-lato  my-3 py-3 border-b-2 col-span-2 ">
    //           Leave a review
    //         </h3>
    //         <div className="mb-10">
    //           <ReviewForm tour_id={Number(tourId)} />
    //         </div>
    //       </>
    //     )}

    //     {!reviews.length ? (
    //       ""
    //     ) : (
    // <>
    //   <h3 className="mt-10 text-3xl font-medium font-lato  my-3 py-3 border-b-2 col-span-2 ">
    //     Overall Reviews
    //   </h3>
    //   <div className="mb-10 capitalize items-start">
    //     {reviews?.map((item, index) => (
    //       <div className="border-b-2 py-3" key={index}>
    //         <div className="flex items-center justify-between">
    //           <p className="text-xl">{item.title}</p>
    //           <div className="flex items-center justify-between">
    //             <span className="text-xl font-bold">{item.stars}</span>
    //             <Image
    //               className="mx-2 inline"
    //               src={star}
    //               alt="rate"
    //               width={15}
    //             />
    //           </div>
    //         </div>
    //         <p className="my-1">{item.body}</p>
    //       </div>
    //     ))}
    //   </div>
    // </>
    //     )}
    //   </div>
    // </>
  );
}

const Tab = ({
  text,
  Icon,
  link,
  active,
}: {
  text: string;
  Icon: IconType;
  link: TabNames;
  active: boolean;
}) => {
  return (
    <Link
      href={`?tab=${link}`}
      className={cn(
        "w-1/3 justify-center capitalize flex gap-2 cursor-pointer font-bold items-center py-6 bg-neutral-100 hover:bg-white transition-all",
        active && "bg-white"
      )}
    >
      <Icon size={22} /> {text}
    </Link>
  );
};

const Detail = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="grid grid-cols-3">
      <p className="capitalize text-primary-foreground font-semibold">
        {name} :
      </p>
      <p className="col-span-2">{value}</p>
    </div>
  );
};
