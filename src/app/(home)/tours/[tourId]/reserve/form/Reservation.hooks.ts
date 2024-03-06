import { zodResolver } from "@hookform/resolvers/zod";
import {
  reserveFormData,
  reserveSchema,
} from "@/app/(home)/tours/[tourId]/reserve/form/Reservation.schema";
import { useForm } from "react-hook-form";

export const useReserveForm = () => {
  const reserveForm = useForm<reserveFormData>({
    resolver: zodResolver(reserveSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      hotelName: "",
      roomNumber: undefined,
      options: [],
    },
  });

  const { isDirty, errors, isValid, isSubmitting } = reserveForm.formState;

  const onSubmit = reserveForm.handleSubmit(async (data: reserveFormData) => {
    console.log(data);
  });

  return { reserveForm, isDirty, errors, isValid, isSubmitting, onSubmit };
};
