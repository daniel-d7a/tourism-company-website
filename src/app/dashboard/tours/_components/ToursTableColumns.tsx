import { truncateText } from "@/lib/utils";
import { Tour } from "@/models/Tour";
import { createColumnHelper } from "@tanstack/react-table";
import { DeleteTourButton } from "./DeleteTourButton";

const columnHelper = createColumnHelper<Tour>();

export const columns = [
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: ({ getValue }) => <p>{getValue()}</p>,
    header: () => <p>Name</p>,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    cell: ({ getValue }) => <p>{truncateText(getValue())}</p>,
    header: () => <p>Description</p>,
  }),
  columnHelper.accessor((row) => row.location, {
    id: "location",
    cell: ({ getValue }) => <p>{getValue()}</p>,
    header: () => <p>Location</p>,
  }),
  columnHelper.accessor((row) => row.duration, {
    id: "duration",
    cell: ({ getValue }) => <p>{getValue()}</p>,
    header: () => <p>Duration</p>,
  }),
  columnHelper.accessor((row) => row.id, {
    id: "actions",
    cell: DeleteTourButton,
    header: () => <p>Actions</p>,
  }),
];
