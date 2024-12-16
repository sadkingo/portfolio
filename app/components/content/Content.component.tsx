import React from "react";

const Content = ({ children }) => {
  return (
    <div
      role="tablist"
      className="tabs  overflow-auto max-h-full border border-gray-300 bg-amber-600/40 dark:bg-blue-950/40 md:-mt-10 grid-rows-[min-content_auto] tabs-lifted rounded-lg shadow-2xl md:w-full right-side "
    >
      {children}
    </div>
  );
};

export default Content;
