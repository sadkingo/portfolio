"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SleepingCatSvg from "@images/sleeping-cat.svg";
import { catClick, catAnimate } from "./SleepingCat.motion";

const SleepingCat = ({ className }) => {
  let animations: Map<string, gsap.core.Timeline>;
  const catRef = useRef<HTMLDivElement>(null);

  const wakeAnimation = useRef<gsap.core.Timeline>(
    gsap.timeline({ paused: true }),
  );

  useEffect(() => {
    const currentStoredTheme = localStorage.getItem("theme");
    if (currentStoredTheme === null) {
      const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.documentElement.setAttribute("data-theme", osTheme);
    } else {
      document.documentElement.setAttribute("data-theme", currentStoredTheme);
    }

    animations = catAnimate({ wakeAnimation });
    if (currentStoredTheme !== "dark") {
      wakeAnimation.current.play();
      catRef.current?.classList.add("close");
    }

  });

  const handleCatClick = () => {
    // wait for the click animation
    animations.get("tail").pause();
    setTimeout(() => animations.get("tail").play(), 1000);

    catClick({ wakeAnimation, catRef });
  };
  function handleThemeChange() {
    const currentStoredTheme = localStorage.getItem("theme");
    const reversedTheme = currentStoredTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", reversedTheme);
    localStorage.setItem("theme", reversedTheme);
  }

  return (
    <div className="relative flex items-center justify-center">
      <div ref={catRef} className="absolute right-0 h-18 w-max -top-4">
        <SleepingCatSvg
          onClick={() => {
            handleCatClick();
            handleThemeChange();
          }}
          width="157"
          className="drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default SleepingCat;
