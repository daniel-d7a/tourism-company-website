import { PhoneNumberUtil } from "google-libphonenumber";
import { TourOption } from "@/models/Tour";
import { z } from "zod";

const phoneUtil = PhoneNumberUtil.getInstance();

export const reserveSchema = z.object({
  name: z
    .string()
    .min(1, "Name cannot be empty")
    .max(50, "Max Number of Letters for Name is 50"),
  email: z.string().email("Please Add Valid email"),
  phone: z.string().refine((value) => {
    try {
      const parsedPhoneNumber = phoneUtil.parse(value, "");
      return phoneUtil.isValidNumber(parsedPhoneNumber);
    } catch (error) {
      return false;
    }
  }, "Please Add a valid Number like this '+20 123 456 7890'"),
  hotelName: z
    .string()
    .min(1, "Name cannot be empty")
    .max(50, "Max Number of Letters for Name is 50"),
  roomNumber: z.coerce.number().optional(),
  options: z.array(z.custom<TourOption>()).optional(),
});

export type reserveFormData = z.infer<typeof reserveSchema>;
