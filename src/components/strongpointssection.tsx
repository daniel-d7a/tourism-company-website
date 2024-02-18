import FeatureCard from "./ui/featureCard"
import { FeatureInfo } from "../models/Interfaces"
import { MdOutlineContactSupport } from "react-icons/md"
import { FaMoneyBill1Wave } from "react-icons/fa6"
import { RiSecurePaymentLine } from "react-icons/ri"


export default function StrongPointsSection() {

  let info: FeatureInfo[] = [
    {
      src: <MdOutlineContactSupport />

      , title: "Support", description: "24/7 Support"
    },
    {
      src: <FaMoneyBill1Wave />
      , title: "Pricing", description: "Competitive Pricing"
    }, {
      src: <RiSecurePaymentLine />
      , title: "Secured Payment", description: "Easy and secured Payment Online"
    }
  ]

  return (
    <section className="mt-5 md:p-20 p-5  md:flex items-center bg-gray-100">
      <div className="md:w-1/2 text-center m-4">
        <h3 className="text-6xl my-3 font-playfair text-center"> Why <span className="text-secondary"> Choose</span> Us</h3>
        <span className="text-xl">Lorem ipsum, dolor sit </span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {info.map((item, index) => (
          <FeatureCard key={index} params={item} />
        ))}
      </div>
    </section>
  );
}
