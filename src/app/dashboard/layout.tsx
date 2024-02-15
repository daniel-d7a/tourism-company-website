import { ReactNode } from "react";
import { SideBar } from "./_components/sideBar";

export default function DashboardRootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <div className="min-h-screen flex ">
        <SideBar />
        <div className="relative left-60 w-[calc(100%-15rem)] bg-slate-200">
          {children}
        </div>
      </div>
    </>
  );
}
