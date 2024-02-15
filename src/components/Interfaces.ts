import { StaticImageData } from "next/image";

export interface FeatureInfo {
  src: JSX.Element;
  title: string;
  description: string;
}

export interface DestinationInfo {
  src: StaticImageData;
  title: string;
  description: string;
}

export interface TourInfo {
  id: number;
  src: StaticImageData;
  title: string;
  destination: string;
  description: string;
  rate: string;
  price: string;
}
export interface Review {
  rate: string;
  comment: string;
}

export interface TourDetails {
  id: number;
  src: StaticImageData[];
  name: string;
  location: string;
  description: string;
  includeList: string[];
  excludeList: string[];
  overallRate: string;
  reviews: Review[];
  duration: string;
  price: string;
  options: string[];
}
