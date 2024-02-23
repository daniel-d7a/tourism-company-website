import Image from "next/image";
import Nav from "@/components/layout/navBar";
import homeImg from "@/assets/homepage.jpg";
import WelcomeSection from "@/components/WelcomeSection";
import StrongPointsSection from "@/components/strongpointssection";
import TopDestinationSection from "@/components/TopDestinationSection";

export default function Home() {

  return (
    <main>
      <div className="min-w-full h-screen relative">
        <div className="capitalize flex items-center justify-center w-full h-full bg-black bg-opacity-35 text-white absolute z-0">
          <div className="text-center">
            <h1 className="text-6xl shadow-md m-3">Explore the World</h1>
            <p className="text-2xl shadow-md">Your Journey, Our Expertise!</p>
          </div>
        </div>
        <Image
          src={homeImg}
          alt="homepage"
          layout="fill"
          objectFit="cover"
          className="-z-10 absolute"
        />
      </div>
      <WelcomeSection />
      <StrongPointsSection />
      <TopDestinationSection />
    </main>
  );
}
