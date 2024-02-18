import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { fontSans, playfairDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "All Seasons Tours",
  description: "All Seasons Tours Agency",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo.png',
        href: '/images/logo.png',
      },

    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable, playfairDisplay.variable
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
