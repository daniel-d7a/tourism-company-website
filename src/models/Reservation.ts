import { Tour } from "./Tour";

export type Reservation = {
  uid: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  invoice_id: string;
  hotel_name: string;
  room_uid: string;
  num_people: number;
  total_amount: number;
  amount_paid: number;
  tour_id: number;
  created_at: string;
  updated_at: string;
  tour: Tour;
};
