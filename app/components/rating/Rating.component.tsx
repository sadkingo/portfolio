import React from "react";

const Rating = () => {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-1"
        value="1"
        className="mask mask-star-2 dark:bg-orange-400"
      />
      <input
        type="radio"
        name="rating"
        value="2"
        className="mask mask-star-2 dark:bg-orange-400"
        defaultChecked
      />
      <input
        type="radio"
        name="rating"
        value="3"
        className="mask mask-star-2 dark:bg-orange-400"
      />
      <input
        type="radio"
        name="rating"
        value="4"
        className="mask mask-star-2 dark:bg-orange-400"
      />
      <input
        type="radio"
        name="rating"
        value="5"
        className="mask mask-star-2 dark:bg-orange-400"
      />
    </div>
  );
};

export default Rating;
