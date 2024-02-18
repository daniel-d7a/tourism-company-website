export type Tour = {
  id: number;
  name: string;
  description: string;
  location: string;
  duration: string;
  includes: string[];
  excludes: string[];
  media: any;
};

export type TourOption = {
  name: string;
  price: number;
};
