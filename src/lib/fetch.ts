import { ApiResponse } from "@/models/ApiResponse";
import { getToken } from "./token";
import { API_URL } from "@/constants/api";
async function getRequest<TResponse>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
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

async function postRequest<TResponse>(endpoint: string, data: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: data,
  });

  const responseData: ApiResponse<TResponse> = await response.json();

  console.log("data", data);
  console.log("responseData", responseData);

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

export { getRequest, postRequest, deleteRequest };
