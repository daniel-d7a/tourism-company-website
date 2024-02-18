import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { CellContext } from "@tanstack/react-table";
import { TourReview } from "@/models/Tour";
import { forceDeleteReview } from "@/lib/reviews/reviews.actions";

export function DeleteReview({ getValue }: CellContext<TourReview, number>) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      className="mx-auto flex justify-center"
      disabled={isLoading}
      variant={"destructive"}
      onClick={async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        const res = await forceDeleteReview(Number(getValue()));

        if (res.success) {
          toast.success("review deleted successfully");
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
