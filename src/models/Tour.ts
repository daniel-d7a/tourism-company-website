import { StaticImageData } from "next/image";

export type Tour = {
  id: number;
  name: string;
  description: string;
  location: string;
  duration: string;
  includes: string[];
  excludes: string[];
};



export interface TourDetails {
  id: number;
  // src: StaticImageData[];
  name: string;
  location: string;
  description: string;
  duration: string;
  includes: string[];
  excludes: string[];
  media: [];
  reviews: [];
}
