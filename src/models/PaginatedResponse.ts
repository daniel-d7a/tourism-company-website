import { ApiResponse } from "./ApiResponse";

// export type PaginatedResponse<T> = {
//   data: T[];
//   meta: {
//     current_page: number;
//     from: number;
//     last_page: number;
//     path: string;
//     per_page: number;
//     to: number;
//     total: number;
//   };
// };

type PaginationData<TData> = {
  current_page: number;
  data: TData;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};

export type PaginatedResponse<T> = ApiResponse<PaginationData<T>>;
