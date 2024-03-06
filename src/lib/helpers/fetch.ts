import { PaginationData } from "./../../models/PaginatedResponse";
import { ApiResponse } from "@/models";
import { getToken } from "./token";
import { API_URL, revalidat_interval } from "@/constants/api";
import { notFound } from "next/navigation";

async function getRequest<TResponse>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: revalidat_interval },
    ...options,
  });

  if (!response.ok) notFound();

  const responseData: ApiResponse<TResponse> = await response.json();
  return responseData.data as TResponse;
}

async function postRequest<TResponse>(
  endpoint: string,
  data: any,
  headers?: HeadersInit
) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
      ...headers,
    },
    body: data,
  });

  const responseData: ApiResponse<TResponse> = await response.json();

  return responseData;
}
async function patchRequest<TResponse>(
  endpoint: string,
  data: any,
  headers?: HeadersInit
) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "PATCH",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
      ...headers,
    },
    body: data,
  });

  const responseData: ApiResponse<TResponse> = await response.json();

  return responseData;
}

async function deleteRequest(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });

  const responseData: ApiResponse<any> = await response.json();
  return responseData;
}

export { getRequest, postRequest, deleteRequest, patchRequest };
