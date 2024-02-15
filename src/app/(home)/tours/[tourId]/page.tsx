import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import star from "@/assets/star.png";
import img from "@/assets/travelling.jpg";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { TourDetails } from "@/components/Interfaces";
import { Checkbox } from "@/components/ui/checkbox";

interface param {
  tourId: string;
}
export default function TourPage({ params }: { params: param }) {
  // console.log(params.tourId)
  const tourTemplate: TourDetails = {
    id: 1,
    src: [img, img, img, img],
    name: "Tour Name",
    location: "Tour Location",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda. Veniam amet illo tenetur nisi porro maiores! Iste minus ex aspernatur. Optio fugiat molestias quas amet eos eligendi ad atque, omnis magnam pariatur voluptatem vero similique saepe enim officiis qui reiciendis ipsam necessitatibus neque placeat",
    includeList: ["Include 1", "Include 2"],
    excludeList: ["Exclude 1", "Exclude 2"],
    overallRate: "5",
    reviews: [
      { rate: "5", comment: "Excellent tour!" },
      { rate: "3", comment: "Excellent tour!" },
    ],
    duration: "2 hours",
    price: "$100",
    options: ["Option 1", "Option 2"],
  };

  return (
    <>
      <div className="md:px-24 md:pt-32 pt-40 px-10 flex justify-between md:grid md:grid-cols-2 gap-5">
        <div className="w-full flex justify-center items-baseline">
          <Carousel className="w-4/5 md:w-full">
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent>
              {tourTemplate.src.map((item, index) => (
                <CarouselItem key={index}>
                  <Image src={item} alt="image" className="w-full h-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="md:px-10 capitalize">
          <h2 className="tracking-widest font-medium text-gray-400 mb-1">
            {tourTemplate.location}
          </h2>
          <h1 className="text-3xl font-medium">{tourTemplate.name}</h1>
          <p className="text-base">{tourTemplate.description}</p>
          <h3 className="text-xl font-bold my-2">
            Duration : {tourTemplate.duration}
          </h3>
          <h3 className="text-xl font-bold my-2">Include List</h3>
          <ul className="mx-5">
            {tourTemplate.includeList.map((item, index) => (
              <div className="flex items-center" key={index}>
                <FaCheck color="green" />
                <li className="font-medium mx-2">{item}</li>
              </div>
            ))}
          </ul>
          <h3 className="text-xl font-bold my-2">Exclude List</h3>
          <ul className="mx-5">
            {tourTemplate.excludeList.map((item, index) => (
              <div className="flex items-center" key={index}>
                <ImCancelCircle color="red" />
                <li className="font-medium mx-2">{item}</li>
              </div>
            ))}
          </ul>
          <h3 className="text-xl font-bold my-2">Options</h3>
          <ul className="mx-5">
            {tourTemplate.options.map((item, index) => (
              <div className="flex my-3" key={index}>
                <Checkbox id="op1" className="mx-2" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item}
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            ))}
          </ul>
          <h3 className="text-2xl font-bold my-2">
            price : {tourTemplate.price}
          </h3>
        </div>
      </div>
      <div className="my-10 md:px-24 px-12">
        <h3 className="text-3xl font-bold my-3 py-3 border-b-2">Reviews</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <h3 className="text-2xl font-bold">Overall Reviews</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                {tourTemplate.overallRate}
              </span>
              <Image className="mx-2" src={star} alt="rate" width={25} />
            </div>
            <div></div>
          </div>
          <div>
            {tourTemplate.reviews.map((item, index) => (
              <div className="border-b-2  py-3" key={index}>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold my-3">User Name</h4>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">{item.rate}</span>
                    <Image className="mx-2" src={star} alt="rate" width={15} />
                  </div>
                </div>
                <p className="text-xl">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
