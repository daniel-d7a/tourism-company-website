import { MdOutlineContactSupport } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

export interface FeatureInfo {
  src: JSX.Element;
  title: string;
  description: string

}
export function Services() {
  let info: FeatureInfo[] = [
    {
      src: <MdOutlineContactSupport />,
      title: "Guided Tours",
      description: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."

    },
    {
      src: <FaMoneyBill1Wave />,
      title: "Best Flights Options",
      description: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."

    },
    {
      src: <RiSecurePaymentLine />,
      title: "Religious Tours",
      description: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."

    },
    {
      src: <RiSecurePaymentLine />,
      title: "Medical insurance",
      description: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."

    },
  ];

  return (
    <section className="mt-20 flex-col items-center justify-center">
      <p className="text-primary-foreground text-center text-sm uppercase font-semibold">category</p>
      <h2 className=" text-center text-4xl font-semibold capitalize my-8">we offer the best services</h2>

      <div className="w-2/3 mx-auto md:flex">
        {info.map((item, index) => (
          <div key={index} className="flex flex-col text-center items-center p-5">
            <div className="flex justify-center text-5xl">
              {item.src}
            </div>
            <h2 className="font-semibold my-2">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
