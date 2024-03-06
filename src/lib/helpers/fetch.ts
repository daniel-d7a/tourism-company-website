import { PaginationData } from "./../../models/PaginatedResponse";
import { ApiResponse } from "@/models";
import { getToken } from "./token";
import { API_URL, revalidat_interval } from "@/constants/api";

async function getRequest<TResponse>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: revalidat_interval },
    ...options,
  });
  const responseData: ApiResponse<TResponse> = await response.json();

  // if (responseData.success) {
  //   return responseData.data;
  // } else {
  //   if (responseData.data ) {
  //   }
  // }

  return responseData;
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
  return response;
}

export { getRequest, postRequest, deleteRequest, patchRequest };
