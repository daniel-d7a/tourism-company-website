"use server";

import * as http from "@/lib/fetch";
import { PaginationData } from "@/models/PaginatedResponse";
import { TourReview } from "@/models/Tour";
import { revalidatePath } from "next/cache";

const endpoint = "reviews";

export async function getReviews(page: number) {
  return await http.getRequest<PaginationData<TourReview>>(
    `${endpoint}/all?page=${page}`
  );
}

export async function getSingleReview(id: number) {
  return await http.getRequest<TourReview>(`${endpoint}/${id}`);
}

export async function forceDeleteReview(id: number) {
  const responseData = await http.deleteRequest(`${endpoint}/remove/${id}`);

  if (responseData.ok) {
    revalidatePath("/dashboard/reviews");
  }
  return responseData;
}

export async function softDeleteReview(id: number) {
  const responseData = await http.deleteRequest(`${endpoint}/${id}`);

  if (responseData.ok) {
    revalidatePath("/dashboard/reviews");
  }
  return responseData;
}
