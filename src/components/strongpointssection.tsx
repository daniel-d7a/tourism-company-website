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
    <section className="mt-5 md:p-20 p-5">
      <h3 className="title text-center">
        Make Your Reservation with Assurance
      </h3>
      <div className="grid md:grid-cols-3 gap-5 m-10">
        {info.map((item, index) => (
          <FeatureCard key={index} params={item} />
        ))}
      </div>
    </section>
  );
}
