import { Footer, Nav } from "@/components/layout";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
