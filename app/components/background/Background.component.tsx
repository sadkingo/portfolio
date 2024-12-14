"use client";
import React, { useEffect, useRef } from "react";
import Sun from "@images/background/lay1.svg";
import Lay2 from "@images/background/lay2.svg";
import Lay3 from "@images/background/lay3.svg";
import Lay4 from "@images/background/lay4.svg";
import Lay5 from "@images/background/lay5.svg";
import Lay6 from "@images/background/lay6.svg";
import Lay7 from "@images/background/lay7.svg";
import Moon from "@images/background/Moon.svg";
import Stars from "@images/background/stars.svg";

const Background = () => {
  const layerParentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const layers = Array.from(
      layerParentRef.current?.getElementsByClassName("moving-layer") || [],
    ) as SVGElement[];
    for (const layer of layers) {
      setTimeout(() => {
        layer.style.animation = "none";
      }, 1100);
    }

    function moveEvent(e) {
      for (let i = 0; i < layers.length; i++) {
        console.log(i);
        const dx = (window.innerWidth / 2 - e.pageX) / (80 / (i + 1));
        layers[i].style.transform = "translateX(" + dx + "px)";
      }
    }

    document.addEventListener("mousemove", moveEvent);

    return () => {
      document.removeEventListener("mousemove", moveEvent);
    };
  });
  return (
    <div className="absolute flex w-full h-full -bottom-10 -z-1">
      <div
        ref={layerParentRef}
        className="relative flex justify-center w-full moving-layer scale-110"
      >
        <Stars className="absolute w-full -top-10 dark:animate-slide-in-top animate-slide-out-top" />
        <Moon className="absolute w-96 -top-10 dark:animate-slide-in-top animate-slide-out-top" />
        <Sun className="absolute w-fit -top-10 dark:animate-slide-out-top dark:opacity-0 animate-slide-in-top" />
        <Lay2 className="absolute w-full h-full animate-slide-in-bottom animation-delay-100 moving-layer" />
        <Lay3 className="absolute w-full h-full animate-slide-in-bottom animation-delay-200 moving-layer" />
        <Lay4 className="absolute w-full h-full animate-slide-in-bottom animation-delay-400 moving-layer" />
        <Lay5 className="absolute w-full h-full animate-slide-in-bottom animation-delay-600 moving-layer" />
        <Lay6 className="absolute w-full h-full animate-slide-in-bottom animation-delay-700 moving-layer" />
        <Lay7 className="absolute w-full h-full animate-slide-in-bottom animation-delay-750 moving-layer" />
      </div>
    </div>
  );
};

export default Background;
