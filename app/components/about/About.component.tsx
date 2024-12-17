import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import Card from "@components/card";

const About = () => {
  return (
    <div className="flex flex-col gap-6 shadow-md">
      {renderInfoCard()}
      {renderMainTitle()}
      {renderMainContent()}
      {renderSubTitle("Other Tech")}
      {renderSubTechCard()}
    </div>
  );

  function renderMainContent() {
    return (
      <div className="flex max-lg:flex-col gap-5">
        <Card className="flex flex-col w-full gap-5 xl:items-center">
          <div className="flex justify-center w-full gap-3">
            {renderTechIcon("https://nextjs.org/", "devicon:nextjs")}
            {renderTechIcon("https://react.dev/", "devicon:react")}
          </div>
          {renderDescription(
            "Building Ui dynamic, scalable, and SEO-friendly web application.",
          )}
        </Card>
        <Card className="flex flex-col w-full gap-5 xl:items-center">
          <div className="flex justify-center w-full gap-3">
            {renderTechIcon("https://laravel.com/", "skill-icons:laravel-dark")}
            {renderTechIcon("https://www.php.net/", "skill-icons:php-dark")}
          </div>
          {renderDescription(`Building secure and scalable web APIs with PHP’s simplicity and
            Laravel’s powerful`)}
        </Card>
      </div>
    );
  }

  function renderInfoCard() {
    return (
      <Card className="text-lg text-center">
        I&apos;m a skilled web developer with expertise in JavaScript, React,
        Laravel, and Next.js. I specialize in creating responsive, user-friendly
        websites and dynamic applications. With experience in security and API
        integration, I bring creativity and technical proficiency to every
        project. Passionate about delivering quality work that exceeds
        expectations.
      </Card>
    );
  }

  function renderMainTitle() {
    return (
      <h1 className="m-auto mt-5 [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] dark:text-sky-400 text-xl md:text-2xl leading-snug font-manrope font-extrabold">
        Primary Focus Technologies
      </h1>
    );
  }

  function renderTechIcon(url, icon) {
    return (
      <a className="hover:opacity-75" href={url} target="_blank">
        <Icon className="w-16 h-16" icon={icon} />
      </a>
    );
  }

  function renderDescription(desc) {
    return <div className="flex items-center text-xl text-center">{desc}</div>;
  }

  function renderSubTitle(title) {
    return <div className="m-auto text-2xl font-extrabold mt-3">{title}</div>;
  }

  function renderSubTechCard() {
    return (
      <Card className="flex flex-wrap w-full gap-3 justify-center">
        <Icon height={40} width={40} icon="vscode-icons:file-type-html" />
        <Icon height={40} width={40} icon="devicon:css3" />
        <Icon
          height={40}
          width={40}
          icon="vscode-icons:file-type-js-official"
        />
        <Icon height={40} width={40} icon="vscode-icons:file-type-scss2" />
        <Icon height={40} width={40} icon="skill-icons:bootstrap" />
        <Icon height={40} width={40} icon="devicon:tailwindcss" />
        <Icon height={40} width={40} icon="devicon:typescript" />
        <Icon height={40} width={40} icon="logos:mysql" />
        <Icon height={40} width={40} icon="vscode-icons:file-type-docker2" />
        <Icon height={40} width={40} icon="devicon:git" />
        <Icon height={40} width={40} icon="logos:vitejs" />
        <Icon height={40} width={40} icon="mdi:github" />
        <Icon height={40} width={40} icon="devicon:postman" />
        <Icon
          height={40}
          width={40}
          icon="vscode-icons:file-type-light-vercel"
        />
        <Icon height={40} width={40} icon="devicon:figma" />
        <Icon height={40} width={40} icon="devicon:npm-wordmark" />
      </Card>
    );
  }
};

export default About;
