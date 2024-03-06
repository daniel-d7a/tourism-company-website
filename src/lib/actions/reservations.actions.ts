"use server";
import { PaginationData, Reservation } from "@/models";
import { revalidatePath } from "next/cache";
import * as http from "@/lib/helpers/fetch";

const endpoint = "reservations";

export async function getReservations(page: number = 1) {
  return await http.getRequest<PaginationData<Reservation>>(
    `${endpoint}?page=${page}`
  );
}

export async function getSingleReservation(id: number) {
  return await http.getRequest<Reservation>(`${endpoint}/${id}`);
}

export async function deleteReservation(id: number) {
  const responseData = await http.deleteRequest(`${endpoint}/${id}`);

  if (responseData.ok) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}
