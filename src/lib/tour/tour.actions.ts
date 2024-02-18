"use server";
import { tourFormData } from "@/app/dashboard/tours/add/form/TourForm.schema";
import { API_URL } from "@/constants/api";
import { getToken } from "@/lib/token";
import { ApiResponse } from "@/models/ApiResponse";
import { PaginatedResponse } from "@/models/PaginatedResponse";
import { Tour, TourDetails } from "@/models/Tour";
import { revalidatePath } from "next/cache";
import { postRequest } from "../fetch";

export async function getTours() {
  const response = await fetch(`${API_URL}tours/all`, {
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  const tours: PaginatedResponse<Tour[]> = await response.json();
  return tours;
}

export async function deleteTour(id: number) {
  const response = await fetch(`${API_URL}tours/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const responseData: ApiResponse<Tour> = await response.json();

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }

  return responseData;
}

export async function getSingleTour(id: number) {
  const response = await fetch(`${API_URL}tours/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: 60 },
  });
  const responseData: ApiResponse<Tour> = await response.json();
  return responseData;
}

export async function addTour(data: tourFormData) {
  const response = await fetch(`${API_URL}tours/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      ...data,
      includes: data.includes?.map((i) => i.value),
      excludes: data.excludes?.map((i) => i.value),
    }),
  });
  const responseData: ApiResponse<Tour> = await response.json();

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }

  return responseData;
}

export async function getTourDetails(id: number) {
  const response = await fetch(`${API_URL}tours/${id}`, {
    next: { revalidate: 60 },
  });
  const responseData: ApiResponse<TourDetails> = await response.json();
  return responseData;
}

export async function updateTour(id: number, data: tourFormData) {
  const responseData = await postRequest<Tour>(`${API_URL}tours/update/${id}`, {
    ...data,
    includes: data.includes?.map((i) => i.value) || [],
    excludes: data.excludes?.map((i) => i.value) || [],
  } as Tour);

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }
  return responseData;
}
