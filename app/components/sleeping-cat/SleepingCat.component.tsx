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
    let currentStoredTheme = localStorage.getItem("theme");
    if (currentStoredTheme === null) {
      const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      localStorage.setItem("theme", osTheme);
      document.documentElement.setAttribute("data-theme", osTheme);
      currentStoredTheme = osTheme;
    } else {
      document.documentElement.setAttribute("data-theme", currentStoredTheme);
    }

    animations = catAnimate({ wakeAnimation });
    if (currentStoredTheme !== "dark") {
      wakeAnimation.current.play();
      catRef.current?.classList.add("close");
    }
    return () => {
      for (const timeline of animations.entries()) {
        timeline[1].kill();
      }
    };
  });

  function handleCatClick() {
    // wait for the click animation
    animations.get("tail")!.pause();
    setTimeout(() => animations.get("tail")!.play(), 1000);

    catClick({ wakeAnimation, catRef });
  }
  function handleThemeChange() {
    const currentStoredTheme = localStorage.getItem("theme");
    const reversedTheme = currentStoredTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", reversedTheme);
    localStorage.setItem("theme", reversedTheme);
  }

  return (
    <div className={className}>
      <div ref={catRef}>
        <SleepingCatSvg
          onClick={() => {
            handleCatClick();
            setTimeout(() => handleThemeChange(), 500);
          }}
          width="175"
          className="drop-shadow-md"
        />
      </div>
    </div>
  );
};

export default SleepingCat;
