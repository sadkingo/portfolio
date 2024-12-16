"use client";

import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

import Avatar from "@images/avatar.png";
import SleepingCatContainer from "@components/sleeping-cat";

const Profile: FC = () => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(true);

  function handlerOpenCloseInfo() {
    setIsInfoOpen(!isInfoOpen);
  }

  return (
    <div className="relative flex flex-col px-5 py-5 border rounded-lg shadow-2xl h-fit md:min-w-72 md:w-2/12 left-side bg-amber-600/50 md:pt-9 dark:bg-blue-950/50">
      <SleepingCatContainer className="absolute p-1 -translate-x-1/2 border shadow-2xl -top-14 left-1/2 h-14 bg-amber-600/50 dark:bg-blue-950/50" />
      {renderExtendButton()}
      {renderProfileInfo()}
      <div
        className={
          "transition-all overflow-hidden duration-700 profile-info max-h-96 " +
          (isInfoOpen ? "" : "!max-h-0")
        }
      >
        <div className="text-white divider border-amber-500/70">INFO</div>
        {renderProfileStat("AGE", "28 Years old", "mdi:timer-sand")}
        {renderProfileStat("Languages", "English/Arabic", "fa:language")}
        {renderProfileStat(
          "LOCATION",
          "Algeria",
          "solar:point-on-map-bold-duotone",
        )}
        {renderProfileStat(
          "HOBBIES",
          "Gaming/Programming",
          "mingcute:love-fill",
        )}
        <div className="text-white divider border-amber-500/70">SOCIAL</div>
        {renderSocialMedia()}
      </div>
    </div>
  );
  function renderExtendButton() {
    return (
      <button
        onClick={handlerOpenCloseInfo}
        className="absolute top-0 right-0 p-2 rounded-tr-lg rounded-bl-lg shadow-xl bg-amber-600/80 dark:bg-blue-900/80 text-amber-400 hover:opacity-75"
      >
        <Icon
          icon="lsicon:switch-outline"
          height={30}
          width={30}
          className="rotate-90"
        />
      </button>
    );
  }
  function renderProfileInfo() {
    return (
      <div className="flex gap-5 md:flex-col profile md:mt-4">
        <Image
          className="border-2 shadow-lg md:w-96 max-md:w-24 max-md:h-24 rounded-3xl border-amber-500/70 dark:border-blue-800/70 bg-amber-600/60 dark:bg-blue-950/80"
          src={Avatar}
          alt="avatar"
        />
        <div className="flex flex-col gap-1 mt-2 my-info">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Dhiab Mohammed Zakaria
          </span>
          <span className="text-gray-300">
            AKA:{" "}
            <span className="items-center font-bold text-center text-transparent select-auto bg-gradient-to-r dark:from-blue-800 from-amber-800 dark:to-purple-800 to-red-500 bg-clip-text">
              SaDKinG
            </span>
          </span>
        </div>
      </div>
    );
  }

  function renderProfileStat(statName, stat, icon) {
    return (
      <div className="flex gap-5 m-2 profile-stat">
        {renderStatImg(icon)}
        {renderStat({ statName, stat })}
      </div>
    );
  }

  function renderSocialMedia() {
    return (
      <div className="flex justify-center gap-3 social-media">
        <a href="https://github.com/sadkingo" target="_blank">
          <Icon
            className="hover:text-white"
            icon="grommet-icons:github"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-zakaria-dhiab-50168a283/"
          target="_blank"
        >
          <Icon
            className="hover:text-blue-500"
            icon="entypo-social:linkedin-with-circle"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=213656064823"
          target="_blank"
        >
          <Icon
            className="hover:text-green-400"
            icon="el:phone-alt"
            width={40}
            height={40}
          />
        </a>
        <a
          className="hover:text-white"
          href="mailto:DhiabMohammedZakaria@gmail.com"
          target="_blank"
        >
          <Icon icon="fluent:mail-edit-24-filled" width={40} height={40} />
        </a>
      </div>
    );
  }

  function renderStatImg(icon) {
    return (
      <div className="flex items-center justify-center w-12 h-12 text-gray-100 border rounded-lg shadow-xl profile-img dark:bg-blue-800 bg-amber-600/80 dark:border-black">
        <Icon
          className="p-2 hover:animate-spin hover:animate-duration-2000"
          icon={icon}
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  }
  function renderStat({ statName, stat }) {
    return (
      <div className="flex flex-col justify-center">
        <span className="font-bold text-gray-700 dark:text-gray-100">
          {statName}
        </span>
        <span className="text-gray-100 dark:text-gray-200">{stat}</span>
      </div>
    );
  }
};

export default Profile;
