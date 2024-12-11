import React from "react";
import Lay1 from "@images/background-layers/lay1.svg";
import Lay2 from "@images/background-layers/lay2.svg";
import Lay3 from "@images/background-layers/lay3.svg";
import Lay4 from "@images/background-layers/lay4.svg";
import Lay5 from "@images/background-layers/lay5.svg";
import Lay6 from "@images/background-layers/lay6.svg";
import Lay7 from "@images/background-layers/lay7.svg";
const Background = () => {
  return (
    <div className="absolute flex w-full h-full -bottom-10">
      <div className="relative flex justify-center w-full">
        <Lay1 className="absolute w-2/3 m-auto -top-10 nimate-slide-in-top"></Lay1>
        <Lay2 className="absolute w-full h-full animate-slide-in-bottom animation-delay-100" />
        <Lay3 className="absolute w-full h-full animate-slide-in-bottom animation-delay-200"></Lay3>
        <Lay4 className="absolute w-full h-full animate-slide-in-bottom animation-delay-400"></Lay4>
        <Lay5 className="absolute w-full h-full animate-slide-in-bottom animation-delay-600"></Lay5>
        <Lay6 className="absolute w-full h-full animate-slide-in-bottom animation-delay-700"></Lay6>
        <Lay7 className="absolute w-full h-full animate-slide-in-bottom animation-delay-750"></Lay7>
      </div>
    </div>
  );
};

export default Background;
