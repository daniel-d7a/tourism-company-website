"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./ReviewTableColumns";
import { PaginationData } from "@/models/PaginatedResponse";
import { TourReview } from "@/models/Tour";
import { useSearchParams } from "next/navigation";
import { Paginator } from "@/components/Paginator";
import { TableUI } from "@/components/TableUi";

export const ReviewsTable = ({
  data,
}: {
  data: PaginationData<TourReview>;
}) => {
  const params = useSearchParams();
  const pageIndex = Number(params.get("page")) || 1;

  const table = useReactTable({
    data: data.data,
    pageCount: data.last_page,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination: {
        pageIndex,
        pageSize: 15,
      },
    },
  });

  return (
    <>
      <TableUI table={table} />
      <Paginator
        page={table.getState().pagination.pageIndex}
        lastPage={table.getPageCount()}
      />
    </>
  );
};
