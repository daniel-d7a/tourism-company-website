"use server";

import * as http from "@/lib/helpers/fetch";
import { TourReview, PaginationData } from "@/models";
import { revalidatePath } from "next/cache";

const endpoint = "reviews";

export async function getReviews(page: number) {
  return await http.getRequest<PaginationData<TourReview>>(
    `${endpoint}?page=${page}`
  );
}

export async function getSingleReview(id: number) {
  return await http.getRequest<TourReview>(`${endpoint}/${id}`);
}

export async function forceDeleteReview(id: number) {
  const res = await http.deleteRequest(`${endpoint}/${id}/destroy`);

  if (res.success) {
    revalidatePath("/dashboard/reviews");
  }
  return res;
}

export async function softDeleteReview(id: number) {
  const res = await http.deleteRequest(`${endpoint}/${id}`);

  if (res.success) {
    revalidatePath("/dashboard/reviews");
  }
  return res;
}
