"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const ListItem = ({
  children,
  href,
  Icon,
}: {
  children: React.ReactNode;
  href: string;
  Icon: JSX.Element;
}) => {
  const pathname = usePathname();
  const active =
    href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(href);

  return (
    <li>
      <Link
        className={cn(
          "flex gap-6 items-center capitalize text-lg px-4 py-2 rounded-lg hover:text-main-blue hover:bg-blue-100 transition-all",
          active && "text-main-blue bg-blue-100"
        )}
        href={href}
      >
        {Icon}
        {children}
      </Link>
    </li>
  );
};
