import { CellContext, DisplayColumnDef } from "@tanstack/react-table";
import { formatTableHeader, truncateText } from "./text";

export const col = <T,>(
  name: keyof T,
  options?: { header?: string; truncate?: boolean }
): [(row: T) => string, DisplayColumnDef<T, string>] => {
  return [
    (row: T) => String(row[name]),
    {
      id: String(name),
      cell: ({ getValue }: CellContext<T, string>) => (
        <p>{options?.truncate ? truncateText(getValue()) : getValue()}</p>
      ),
      header: () => (
        <p className="captailize min-w-32">
          {options?.header ?? formatTableHeader(String(name))}
        </p>
      ),
    },
  ];
};
