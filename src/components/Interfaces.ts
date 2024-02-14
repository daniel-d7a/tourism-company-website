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
  src: StaticImageData;
  title: string;
  destination:string,
  description: string;
  rate: string;
  price: string;
}
