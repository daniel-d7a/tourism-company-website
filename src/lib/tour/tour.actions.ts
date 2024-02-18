"use server";
import { tourFormData } from "@/app/dashboard/tours/add/form/TourForm.schema";
import { API_URL } from "@/constants/api";
import { Tour } from "@/models/Tour";
import { revalidatePath } from "next/cache";
import * as http from "../fetch";
import { PaginationData } from "@/models/PaginatedResponse";

export async function getTours() {
  return await http.getRequest<PaginationData<Tour>>(`${API_URL}tours/all`);
}

export async function deleteTour(id: number) {
  const responseData = await http.deleteRequest<Tour>(`${API_URL}tours/${id}`);

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}

export async function getSingleTour(id: number) {
  return await http.getRequest<Tour>(`${API_URL}tours/${id}`);
}

export async function addTour(data: tourFormData) {
  const responseData = await http.postRequest<Tour>(`${API_URL}tours/store`, {
    ...data,
    includes: data.includes?.map((i) => i.value),
    excludes: data.excludes?.map((i) => i.value),
  } as Tour);

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }

  return responseData;
}

export async function updateTour(id: number, data: tourFormData) {
  const responseData = await http.postRequest<Tour>(
    `${API_URL}tours/update/${id}`,
    {
      ...data,
      includes: data.includes?.map((i) => i.value) || [],
      excludes: data.excludes?.map((i) => i.value) || [],
    } as Tour
  );

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}
