import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/navBar";

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
