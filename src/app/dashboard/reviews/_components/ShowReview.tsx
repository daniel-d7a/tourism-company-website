"use client";
import { Checkbox } from "@/components/ui";
import { softDeleteReview } from "@/lib/actions/reviews.actions";
import { TourReview } from "@/models";
import { CellContext } from "@tanstack/react-table";
import { useState } from "react";
import { toast } from "sonner";

export const ShowReview = ({ getValue }: CellContext<TourReview, number>) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex justify-center">
      <Checkbox
        onClick={async (e) => {
          e.stopPropagation();
          setIsLoading(true);
          const state = (e.target as HTMLButtonElement).dataset["state"];

          let res;

          if (state !== "checked") {
            const { success, errors } = await softDeleteReview(
              Number(getValue())
            );
            if (success) {
              toast.success("Review deleted successfully");
            } else {
              toast.error(errors);
            }
          }
          setIsLoading(false);
        }}
      />
    </div>
  );
};
