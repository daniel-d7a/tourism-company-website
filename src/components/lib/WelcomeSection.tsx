import Image from "next/image";
import welcomeImg from "@/assets/section1.webp";

export function WelcomeSection() {
  return (
    <section className="mt-5 md:p-20 p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className="p-5">
          <h2 className="title">Welcome</h2>
          <p className="text-xl text-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            fugiat fuga quas placeat deserunt dolore excepturi provident
            architecto nesciunt officia omnis ipsa, culpa voluptatibus nulla
            repudiandae! Nulla sint consequuntur laudantium.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={welcomeImg} alt="discover-the-world" className="w-full" />
        </div>
      </div>
    </section>
  );
}
