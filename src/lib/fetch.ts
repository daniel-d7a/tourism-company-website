import { ApiResponse } from "@/models/ApiResponse";
import { getToken } from "./token";
export async function getRequest<TResponse>(
  endpoint: string,
  options?: RequestInit
) {
  const response = await fetch(endpoint, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    next: { revalidate: 60 },
    ...options,
  });
  const responseData: ApiResponse<TResponse> = await response.json();
  return responseData;
}

export async function postRequest<TResponse, TBody = TResponse>(
  endpoint: string,
  data: TBody
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });

  const responseData: ApiResponse<TResponse> = await response.json();
  return responseData;
}

export async function deleteRequest<TResponse>(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });

  const responseData: ApiResponse<TResponse> = await response.json();
  return responseData;
}
