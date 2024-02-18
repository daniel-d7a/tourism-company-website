import Image from "next/image";
import logo from "@/assets/logo.png";
import { ListItem } from "./atoms/ListItem";
import { Home, Banknote, Plane, MessageSquareMore } from "lucide-react";

export const SideBar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 p-2 w-60 h-screen flex flex-col items-center">
      <div className="w-40 mx-auto">
        <Image
          className="w-full object-cover"
          src={logo}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <ul className="space-y-8 mt-8">
        <ListItem href="/dashboard" Icon={<Home {...iconProps} />}>
          dashboard
        </ListItem>
        <ListItem href="/dashboard/tours" Icon={<Plane {...iconProps} />}>
          tours
        </ListItem>
        <ListItem
          href="/dashboard/transactions"
          Icon={<Banknote {...iconProps} />}
        >
          transactions
        </ListItem>
        <ListItem
          href="/dashboard/reviews"
          Icon={<MessageSquareMore {...iconProps} />}
        >
          reviews
        </ListItem>
        <ListItem href="/tours" Icon={<Home {...iconProps} />}>
          Home
        </ListItem>
      </ul>
    </div>
  );
};

const iconProps = {
  size: 22,
};
