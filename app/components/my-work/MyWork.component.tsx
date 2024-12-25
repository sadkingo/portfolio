import Image, { StaticImageData } from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

import controlImgPanelUrl from "@images/projects-images/control-panel.png";
import todoListImgUrl from "@images/projects-images/todo-list.png";
import watchImgUrl from "@images/projects-images/watch-store.png";
import portfolioUrl from "@images/projects-images/portfolio.png";
import TechBadge from "../tech-badge";
import { Badges } from "../tech-badge/TechBadge";

interface Work {
  id: number;
  title: string;
  image: StaticImageData;
  githubUrl?: string;
  siteUrl?: string;
  badges?: (keyof typeof Badges)[];
  description?: string;
}

const myWork: Work[] = [
  {
    id: 0,
    title: "Control panel (front end)",
    image: controlImgPanelUrl,
    githubUrl: "https://github.com/sadkingo/Admin-panel-front-end",
    siteUrl: "https://admin-panel-front-end-ivory.vercel.app/",
    badges: ["react", "javascript", "css", "vite"],
    description:
      "Front-end code for the Admin Panel built with React, Vite, javascript and css.  The project provides an intuitive interface for managing admin-related tasks and integrates seamlessly with the back-end.",
  },
  {
    id: 1,
    title: "E-Commerce Watch app",
    image: watchImgUrl,
    githubUrl: "https://github.com/sadkingo/store-app",
    badges: ["laravel", "php", "javascript", "css"],
    description:
      "E-commerce application to simplify online shopping in Algeria. The application allows users to browse and purchase products, enhancing the local e-commerce experience.",
  },
  {
    id: 2,
    title: "Dz Z Todo",
    image: todoListImgUrl,
    githubUrl: "https://github.com/sadkingo/DzZTodo",
    badges: ["laravel", "php", "javascript", "css"],
    description:
      "A web application designed to efficiently manage daily tasks. The application empowers users with an advanced web interface to organize, prioritize, and track their tasks, contributing to enhanced time management and personal productivity.",
  },
  {
    id: 3,
    title: "Portfolio",
    image: portfolioUrl,
    githubUrl: "https://github.com/sadkingo/portfolio",
    siteUrl: "https://portfolio-two-xi-54.vercel.app",
    badges: ["next", "react", "javascript", "vite"],
    description: "Personal website designed to showcase my projects, skills, and achievements. Built Next and React, it serves as a dynamic and interactive platform to present my work.",
  },
];

const MyWork = () => {
  return (
    <div className=" w-full grid lg:grid-cols-2 gap-5">
      {myWork.map((work) => (
        <React.Fragment key={work.id}>{renderWork(work)}</React.Fragment>
      ))}
    </div>
  );
  function renderWork({
    title,
    image,
    description,
    githubUrl = "",
    siteUrl = "",
    badges = [],
  }: Work) {
    return (
      <div className="card bg-amber-500 dark:bg-blue-900 shadow-xl">
        <figure>
          <Image src={image} alt="Shoes" />
        </figure>
        <div className="relative card-body pt-2">
          <div className="top-right-corner p-2 border border-t-transparent border-white/50 rounded-b-lg flex justify-center items-center absolute top-0 right-0 z-10">
            {githubUrl && renderGithubUrl(githubUrl)}
            {siteUrl && renderSiteUrl(siteUrl)}
          </div>
          <h2 className="card-title mt-6 pr-16">{title}</h2>
          <TechBadge badges={badges} />
          <div className="divider mb-1 mt-1"></div>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  function renderGithubUrl(githubUrl) {
    return (
      <a className="hover:opacity-75 w-8 h-8" href={githubUrl} target="_blank">
        <Icon className="w-full h-full text-white" icon="mdi:github" />
      </a>
    );
  }

  function renderSiteUrl(siteUrl) {
    return (
      <a href={siteUrl} target="_blank">
        <Icon
          className="m-1 hover:opacity-75 text-red-600 dark:text-sky-400 w-8 h-8"
          icon="heroicons-solid:external-link"
        />
      </a>
    );
  }
};

export default MyWork;
