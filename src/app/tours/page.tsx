import { TourInfo } from "@/components/Interfaces"
import tourImg from '../../assets/travelling.jpg'
import TourCard from "@/components/ui/tourCard"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"



export default function Tours() {

    const toursArray: TourInfo[] = [

        { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2.5" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2.5" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2.6" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2" }
        , { src: tourImg, destination: "egypt", title: "tour in Egypt", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates dignissimos expedita dolore sequi incidunt ipsam impedit esse dolorem dolores mollitia perferendis, veritatis corrupti porro alias? Beatae eum odio accusantium ea vel ipsa veniam magnam quaerat perferendis, a ducimus ipsum, quisquam reprehenderit quam repellat placeat quidem error! Possimus, expedita. Alias", price: "100", rate: "2" }

    ]

    return (
        <section className="min-h-screen w-full md:pt-24 pt-32 md:px-24 px-12 flex  items-center flex-col">
            <div className="w-1/2">
                <input type="text" placeholder="Search..." id="search" name="hero-field" className="placeholder:px-2 font-medium w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:px-2 focus:bg-transparent focus:border-black text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="my-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    toursArray.map((tour, index) => <TourCard key={index} params={tour} />)
                }
            </div>

            <Pagination className="my-10">
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
            </Pagination>


        </section>
    )
}
