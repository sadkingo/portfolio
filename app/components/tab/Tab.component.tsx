import React from "react";

const Tab = ({
  className = "",
  tabClassName = "",
  title,
  defaultChecked = false,
  children,
}) => {
  return (
    <>
      {renderTabButton()}
      {renderTabContent({ children })}
    </>
  );

  function renderTabContent({ children }) {
    return (
      <div
        role="tabpanel"
        className={
          "h-full p-6  tab-content  rounded-box bg-amber-600/50 dark:bg-blue-950/50 " +
          className
        }
      >
        {children}
      </div>
    );
  }

  function renderTabButton() {
    return (
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={
          "tab text-2xl h-12 hover:!text-opacity-50 text-gray-400 checked:text-white w-full [--tab-bg:#D97706] dark:[--tab-bg:#172554] [--tab-border-color:] " +
          tabClassName
        }
        defaultChecked={defaultChecked}
        aria-label={title}
      />
    );
  }
};

export default Tab;
