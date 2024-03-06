import { Table, flexRender } from "@tanstack/react-table";
import {
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  Table as TableMain,
} from "@/components/ui";

export const EmptyRow = ({ colSpan }: { colSpan: number }) => (
  <TableRow>
    <TableCell colSpan={colSpan} className="h-24 text-center">
      No Data yet.
    </TableCell>
  </TableRow>
);

export const TableHeaderUI = <T,>({ table }: { table: Table<T> }) => (
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
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
);

export const TableBodyUI = <T,>({
  table,
  onRowClick,
}: {
  table: Table<T>;
  onRowClick?: (row: T) => void;
}) => (
  <TableBody>
    {(() => {
      const rows = table.getRowModel().rows;
      if (rows.length) {
        return rows.map((row) => (
          <TableRow
            onClick={() => onRowClick && onRowClick(row.original)}
            className="cursor-pointer"
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ));
      } else {
        return <EmptyRow colSpan={table.getAllColumns().length} />;
      }
    })()}
  </TableBody>
);

export const TableUI = <T,>({
  table,
  onRowClick,
}: {
  table: Table<T>;
  onRowClick?: (row: T) => void;
}) => (
  <TableMain className="mx-auto mb-6 w-[98%] bg-white rounded-lg py-10">
    <TableHeaderUI table={table} />
    <TableBodyUI table={table} onRowClick={onRowClick} />
  </TableMain>
);
