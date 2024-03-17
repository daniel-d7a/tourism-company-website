import Image from "next/image";
import welcomeImg from "@/assets/img2.jpg";
import Link from "next/link";
import { Button } from "@/components/ui";

export function Welcome() {
  return (
    <section className="mt-5 md:p-20 p-10">
      <div className="w-full flex flex-col-reverse md:flex-row  items-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image src={welcomeImg} alt="discover-the-world" width={350} className="rounded-t-full pt-3 pr-3 border-2 border-l-0 border-b-0 border-separate border-gray-200" />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <p className="text-primary-foreground text-sm uppercase font-semibold">Lorem</p>
          <h2 className="my-3 text-4xl font-semibold">Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            fugiat fuga quas placeat deserunt dolore excepturi provident
            architecto nesciunt officia omnis ipsa, culpa voluptatibus nulla
            repudiandae! Nulla sint consequuntur laudantium.
          </p>
          <Link href='/tours' >
            <Button className="my-7 text-base">
              View Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
