"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Table } from "@tanstack/react-table";
import { usePathname, useSearchParams } from "next/navigation";

type IPaginatorProps = {
  lastPage: number;
};

export const TourTablePagination = <T,>({ table }: { table: Table<T> }) => {
  const page = table.getState().pagination.pageIndex;
  const lastPage = table.getPageCount();

  console.log(page, " - ", lastPage);
  const pathname = usePathname();

  // last page = 1 => 1
  // last page = 2 => 1, 2
  // last page = 3 => 1, 2, 3
  // last page = 4 => 1, 2, 3, ...
  // last page = 4, page = 3 => ..., 2, [3], 4
  // last page = 4, page = 4 => ..., 3, [4]

  const paginationItems = [
    page > 1 && <PaginationPrevious href={`${pathname}?page=${page - 1}`} />,
    page > 2 && <PaginationEllipsis />,
    ...Array.from(
      { length: Math.min(3, lastPage, lastPage - page + 2) },
      (_, i) => {
        const value = Math.max(1, i + (page - 1 || 1));
        return (
          <PaginationLink
            href={`${pathname}?page=${value}`}
            isActive={page === value}
            key={i}
          >
            {value}
          </PaginationLink>
        );
      }
    ),
    page < lastPage - 1 && lastPage > 3 && <PaginationEllipsis />,
    page < lastPage && <PaginationNext href={`${pathname}?page=${page + 1}`} />,
  ];

  return (
    <Pagination>
      <PaginationContent>
        {paginationItems.filter(Boolean).map((item, i) => (
          <PaginationItem key={i}>{item} </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};
