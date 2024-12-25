import { Icon } from "@iconify/react";
import React, { FC } from "react";
import { Badges } from "./TechBadge";

interface Props {
  badges: (keyof typeof Badges)[];
}

const TechBadge: FC<Props> = ({ badges }) => {
  const techRenderMap = {
    react: renderReactBadge,
    javascript: renderJavascriptBadge,
    css: renderCssBadge,
    vite: renderViteBadge,
    laravel: renderLaravelBadge,
    php: renderPhpBadge,
    next: renderNextBadge,
  };

  return (
    <div className="badges flex w-full flex-wrap gap-2">
      {badges.map((badge) => techRenderMap[badge]())}
    </div>
  );

  function renderReactBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-blue-500 border-none border-blue-800 shadow-2xl">
        <Icon icon="devicon:react" />
        <span>React</span>
      </div>
    );
  }
  function renderJavascriptBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-yellow-500 border-none border-yellow-800 shadow-2xl">
        <Icon icon="nonicons:javascript-16" />
        <span>JavaScript</span>
      </div>
    );
  }
  function renderCssBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-blue-600 border-none border-blue-900 shadow-2xl">
        <Icon icon="devicon:css3" />
        <span>Css</span>
      </div>
    );
  }
  function renderViteBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-purple-600 border-none border-purple-900 shadow-2xl">
        <Icon icon="vscode-icons:file-type-vite" />
        <span>Vite</span>
      </div>
    );
  }
  function renderLaravelBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-red-500 border-none border-red-900 shadow-2xl">
        <Icon icon="file-icons:laravel" />
        <span>Laravel</span>
      </div>
    );
  }
  function renderPhpBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-blue-700 border-none border-purple-900 shadow-2xl">
        <Icon icon="ri:php-line" />
        <span>PHP</span>
      </div>
    );
  }
  function renderNextBadge() {
    return (
      <div className="rounded-lg flex justify-center items-center gap-1 text-start px-2 text-white bg-gray-700 border-none border-gray-900 shadow-2xl">
        <Icon icon="devicon-plain:nextjs" />
        <span>NextJs</span>
      </div>
    );
  }
};

export default TechBadge;
