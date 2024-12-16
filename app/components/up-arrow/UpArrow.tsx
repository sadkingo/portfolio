"use client";
import { Icon } from "@iconify/react";
import React, { FC} from "react";

const MobileNavMenu: FC = () => {
  return (
    <div className="md:hidden">
      <a
        href="#main"
        className="fixed bg-blue-700 p-1 rounded text-white bottom-10 z-10 right-10"
      >
        <Icon
          className="hover:animate-bounce w-full h-full hover:opacity-80"
          icon="ph:arrow-up"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default MobileNavMenu;
