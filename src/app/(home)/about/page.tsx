import Image from "next/image";
import img from "@/assets/section1.webp"
import img3 from "@/assets/img3.webp"
import img4 from "@/assets/img4.webp"
import partner from "@/assets/partner.webp"
export default function page() {
    return (
        <section className="capitalize">
            <div className="min-w-full h-screen relative">
                <div className=" flex items-center justify-center w-full h-full bg-black bg-opacity-35 text-white absolute z-10">
                    <h1 className="text-6xl text-center m-3">About Us</h1>
                </div>
                <Image
                    src={img}
                    alt="homepage"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 absolute"
                />
            </div>
            <div className="p-16 my-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <h2 className="text-secondary text-xl font-semibold">about us</h2>
                    <h3 className="text-4xl font-semibold my-3">Explore the World</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, necessitatibus vel aliquid consequuntur dolorum nobis sed dolorem quidem vero explicabo quasi, porro magnam repellat itaque est error velit exercitationem ipsa pariatur! Impedit rem omnis illum architecto tempora possimus dolorum assumenda blanditiis magni excepturi natus rerum et, facilis laudantium mollitia dignissimos voluptatum nisi quo at veritatis voluptatibus nobis dolor cumque quis? Officiis asperiores exercitationem reprehenderit expedita dolorum vitae veniam veritatis at quo facere rem impedit quibusdam magni dolore, repellat in aspernatur laudantium sit voluptate hic consequuntur reiciendis harum? Ratione asperiores deleniti suscipit quo distinctio nam, accusantium animi, totam cum blanditiis laboriosam.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <Image
                            src={img3}
                            alt="homepage"
                            className="lg:w-3/4 ml-auto mb-5"
                        />
                        <Image
                            src={img4}
                            alt="homepage"
                            className="w-full"
                        />
                    </div>
                    <div>

                        <Image
                            src={img4}
                            alt="homepage"
                            className="w-full"
                        />
                        <Image
                            src={img3}
                            alt="homepage"
                            className="lg:w-4/5 mr-auto mt-5"

                        />
                    </div>
                </div>
            </div>
            <div className="p-16 my-10 text-center bg-secondary-foreground text-white">
                <h2 className="text-4xl font-semibold">TOP PARTNERS</h2>
                <p className="font-semibold my-5">Check out our partners</p>
                <div className="grid md:grid-cols-4 gap-4 justify-items-center">
                    <Image src={partner} alt="partner" layout="fit" />
                    <Image src={partner} alt="partner" layout="fit" />
                    <Image src={partner} alt="partner" layout="fit" />
                    <Image src={partner} alt="partner" layout="fit" />
                </div>
            </div>
        </section>
    )
}
