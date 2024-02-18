"use client";

import { truncateText } from "@/lib/utils";
import { TourReview } from "@/models/Tour";
import { CellContext } from "@tanstack/react-table";
import { useState } from "react";

export const ReviewText = ({ getValue }: CellContext<TourReview, string>) => {
  const [showMore, setShowMore] = useState(false);

  const displayShowMore = getValue().length > 100;

  return (
    <div>
      {displayShowMore ? (
        <>
          {showMore ? (
            <p>{getValue()}</p>
          ) : (
            <p>{truncateText(getValue(), 100)}</p>
          )}

          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setShowMore((s) => !s)}
          >
            {showMore ? "show less" : "show more"}
          </span>
        </>
      ) : (
        getValue()
      )}
    </div>
  );
};
