"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columns } from "./ToursTableColumns";
import { Tour } from "@/models/Tour";
import { useRouter, useSearchParams } from "next/navigation";
import { Paginator } from "../../../../components/Paginator";
import { PaginationData } from "@/models/PaginatedResponse";
import { TableUI } from "@/components/TableUi";

export function ToursTable({ data }: { data: PaginationData<Tour> }) {
  const params = useSearchParams();
  const pageIndex = Number(params.get("page")) || 1;
  const router = useRouter();

  const table = useReactTable({
    data: data.data || [],
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
      <TableUI
        table={table}
        onRowClick={(row) => router.push(`/dashboard/tours/${row.id}`)}
      />
      <Paginator
        page={table.getState().pagination.pageIndex}
        lastPage={table.getPageCount()}
      />
    </>
  );
}
