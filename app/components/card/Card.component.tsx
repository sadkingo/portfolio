import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div
      className={
        "shadow-2xl bg-gradient-to-t from-amber-600/60 to-amber-600/60  dark:from-blue-900/60 dark:to-blue-950 p-5 rounded-lg " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Card;
