import { Inter as FontSans, Playfair_Display } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair-display",
});
