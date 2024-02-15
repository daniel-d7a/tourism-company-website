import { z } from "zod";

export const addTourSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  description: z.string().min(1, "Description cannot be empty"),
  location: z.string().min(1, "Location cannot be empty"),
  duration: z.string().min(1, "Duration cannot be empty"),
});

export type addTourData = z.infer<typeof addTourSchema>;
