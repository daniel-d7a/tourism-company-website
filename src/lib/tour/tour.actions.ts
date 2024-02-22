"use server";
import { tourFormData } from "@/app/dashboard/tours/add/form/TourForm.schema";
import { Tour } from "@/models/Tour";
import { revalidatePath } from "next/cache";
import * as http from "../fetch";
import { PaginationData } from "@/models/PaginatedResponse";

const endpoint = "tours";

export async function getTours(page: number = 1) {
  return await http.getRequest<PaginationData<Tour>>(
    `${endpoint}/all?page=${page}`
  );
}

export async function deleteTour(id: number) {
  const responseData = await http.deleteRequest(`${endpoint}/${id}`);

  if (responseData.ok) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}

export async function getSingleTour(id: number) {
  return await http.getRequest<Tour>(`${endpoint}/${id}`);
}

export async function addTour(data: FormData) {
  const responseData = await http.postRequest(`${endpoint}/store`, data);

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }

  return responseData;
}

export async function updateTour(id: number, data: FormData) {
  const responseData = await http.postRequest(`${endpoint}/update/${id}`, data);

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}

export async function deleteTourImage(tourId: number, mediaId: string) {
  await http.postRequest(
    `${endpoint}/delete-image/${tourId}`,
    JSON.stringify({ mediaId }),
    { "Content-Type": "application/json" }
  );
}

export async function addTourImage(tourId: number, formData: FormData) {
  const res = await http.postRequest(
    `${endpoint}/add-image/${tourId}`,
    formData
  );

  revalidatePath(`/dashboard/tours/${tourId}`);

  console.log("add image res", res);
}
