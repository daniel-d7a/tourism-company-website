import { SearchForm } from "@/app/(home)/tours/_components/searchForm";
import { ReservationsTable } from "./_components/invoicesTable";
import { getInvoices } from "@/lib/actions/invoices.actions";
import { PageParams } from "@/models";

export default async function InvoicesPage({
  searchParams: { page = 1, q = "" },
}: PageParams) {
  const data = await getInvoices(page, q);

  return (
    <>
      <div className="text-2xl font-semibold h-20 shadow-md py-4 px-4 ml-0.5 bg-white flex  items-center justify-between">
        Invoices
        <div className="w-2/3 mx-auto">
          <SearchForm placeholder="search by invoice number..." />
        </div>
      </div>
      <div className="my-4 mx-4">
        <ReservationsTable data={data} />
      </div>
    </>
  );
}
