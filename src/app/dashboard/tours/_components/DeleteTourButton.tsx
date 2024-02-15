import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { CellContext } from "@tanstack/react-table";
import { Tour } from "@/models/Tour";
import { deleteTour } from "@/lib/tour/tour.actions";

export function DeleteTourButton({ getValue }: CellContext<Tour, number>) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      variant={"destructive"}
      onClick={async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        const res = await deleteTour(Number(getValue()));

        if (res.success) {
          toast.success("Tour deleted successfully");
        } else {
          toast.error(res.message);
        }
        setIsLoading(false);
      }}
    >
      {isLoading ? <LoadingSpinner className="mr-0" /> : <Trash2 size={20} />}
    </Button>
  );
}
