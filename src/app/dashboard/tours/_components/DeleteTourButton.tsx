import { Button, LoadingSpinner } from "@/components/ui";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { CellContext } from "@tanstack/react-table";
import { Tour } from "@/models";
import { deleteTour } from "@/lib/actions/tour.actions";

export function DeleteTourButton({ getValue }: CellContext<Tour, number>) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      disabled={isLoading}
      variant={"destructive"}
      onClick={async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        const res = await deleteTour(Number(getValue()));

        if (res.ok) {
          toast.success("Tour deleted successfully");
        } else {
          toast.error(await res.json());
        }
        setIsLoading(false);
      }}
    >
      {isLoading ? <LoadingSpinner className="mr-0" /> : <Trash2 size={20} />}
    </Button>
  );
}
