"use client";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickEvent: ((arg?:string) => void) | any;
  text: string;
  children?: ReactNode;
}

function Button({
  className = "",
  clickEvent,
  text,
  children = "",
}: Props): React.ReactElement {
  return (
    <button className={`${className}`} onClick={() => clickEvent("github")}>
      {children}
      {` ${text}`}
    </button>
  );
}

export default Button;
