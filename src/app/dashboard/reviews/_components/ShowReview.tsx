"use client";
import { Checkbox } from "@/components/ui";
import { softDeleteReview } from "@/lib/actions/reviews.actions";
import { toastResponse } from "@/lib/helpers/toast";
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
          await updateReview(state || "", getValue());
          setIsLoading(false);
        }}
      />
    </div>
  );
};

async function updateReview(state: string, value: number) {
  if (state !== "checked") {
    const res = await softDeleteReview(Number(value));
    toastResponse(res, "Review hidden successfully");
  } else if (state === "checked") {
    // const res = await updateReview
  }
}
