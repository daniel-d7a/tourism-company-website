"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./ToursTableColumns";
import { Tour } from "@/models/Tour";
import { useRouter, useSearchParams } from "next/navigation";
import { TourTablePagination } from "./ToursTablePagination";
import { Button } from "@/components/ui/button";
import { PaginationData } from "@/models/PaginatedResponse";

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
      <Table className="mx-auto mb-6 w-[98%] bg-white rounded-lg py-10">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  className="pt-4 pb-2 text-blue-400 text-base"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {(() => {
            const rows = table.getRowModel().rows;
            if (rows.length) {
              return rows.map((row) => (
                <TableRow
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(`/dashboard/tours/${row.original.id}`);
                  }}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ));
            } else {
              return (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No tours yet.
                  </TableCell>
                </TableRow>
              );
            }
          })()}
        </TableBody>
      </Table>
      <TourTablePagination table={table} />
    </>
  );
}
