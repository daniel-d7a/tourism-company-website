"use server";

import { addTourData } from "@/app/dashboard/tours/add/form/addTour.schema";
import { API_URL } from "@/constants/api";
import { getToken } from "@/lib/token";
import { ApiResponse } from "@/models/ApiResponse";
import { PaginatedResponse } from "@/models/PaginatedResponse";
import { Tour } from "@/models/Tour";
import { revalidatePath } from "next/cache";

export async function getTours(): Promise<PaginatedResponse<Tour[]>> {
  const response = await fetch(`${API_URL}tours/all`, {
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
      Authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: 60 },
  });
  const responseData: ApiResponse<Tour> = await response.json();
  return responseData;
}

export async function addTour(data: addTourData) {
  const response = await fetch(`${API_URL}tours/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  const responseData: ApiResponse<Tour> = await response.json();

  if (responseData.success) {
    revalidatePath("/dashboard/tours");
  }

  return responseData;
}
