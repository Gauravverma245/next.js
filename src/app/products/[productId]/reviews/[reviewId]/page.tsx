import React from "react";

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h1>
        Review {params.reviewId} of Product {params.productId}
      </h1>
    </div>
  );
}
