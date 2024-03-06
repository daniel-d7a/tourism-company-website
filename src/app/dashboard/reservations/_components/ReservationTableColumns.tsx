import { col } from "@/lib/helpers/table";
import { Reservation } from "@/models";
import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";

const columnHelper = createColumnHelper<Reservation>();

const reservationColumn = col<Reservation>;

export const columns = [
  columnHelper.accessor(...reservationColumn("name")),
  columnHelper.accessor(...reservationColumn("email")),
  columnHelper.accessor(...reservationColumn("phone")),
  columnHelper.accessor(reservationColumn("date")[0], {
    ...reservationColumn("date")[1],
    cell: ({ getValue }) => <p>{dayjs(getValue()).format("DD/MM/YYYY")}</p>,
  }),
  columnHelper.accessor(...reservationColumn("hotel_name")),
  columnHelper.accessor(
    ...reservationColumn("room_uid", { header: "room number" })
  ),
  columnHelper.accessor(
    ...reservationColumn("num_people", { header: "no. of people" })
  ),
  columnHelper.accessor(...reservationColumn("total_amount")),
  columnHelper.accessor(...reservationColumn("amount_paid")),
];
