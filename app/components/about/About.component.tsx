import React from "react";
import Card from "@components/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { neon } from "@neondatabase/serverless";

const About = () => {
  async function getData(query) {
    "use server";
    const sql = neon(`${process.env.DATABASE_URL}`);
    const res = await sql(query);
    
    console.log(res);
    return res;
  }
  getData("SELECT * FROM comments;");
  return (
    <div className="flex flex-col gap-6 shadow-md">
      <Card className="text-lg text-center">
        I&apos;m a skilled web developer with expertise in JavaScript, React,
        Laravel, and Next.js. I specialize in creating responsive, user-friendly
        websites and dynamic applications. With experience in security and API
        integration, I bring creativity and technical proficiency to every
        project. Passionate about delivering quality work that exceeds
        expectations.
      </Card>

      <h1 className="m-auto mt-5 [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] dark:text-sky-400 text-xl md:text-2xl leading-snug font-manrope font-extrabold">
        Primary Focus Technologies
      </h1>
      <div className="flex max-lg:flex-col gap-5">
        <Card className="flex flex-col w-full gap-5 xl:items-center">
          <div className="flex justify-center w-full gap-3">
            <a
              className="hover:opacity-75"
              href="https://nextjs.org/"
              target="_blank"
            >
              <Icon className="w-16 h-16" icon="devicon:nextjs" />
            </a>
            <a
              className="hover:opacity-75"
              href="https://react.dev/"
              target="_blank"
            >
              <Icon className="w-16 h-16" icon="devicon:react" />
            </a>
          </div>
          <div className="flex items-center text-xl text-center">
            Building Ui dynamic, scalable, and SEO-friendly web application.
          </div>
        </Card>
        <Card className="flex flex-col w-full gap-5 xl:items-center">
          <div className="flex justify-center w-full gap-3">
            <a
              className="hover:opacity-75"
              href="https://laravel.com/"
              target="_blank"
            >
              <Icon className="w-16 h-16" icon="skill-icons:laravel-dark" />
            </a>
            <a
              className="hover:opacity-75"
              href="https://www.php.net/"
              target="_blank"
            >
              <Icon className="w-16 h-16" icon="skill-icons:php-dark" />
            </a>
          </div>
          <div className="flex items-center text-xl text-center">
            Building secure and scalable web APIs with PHP’s simplicity and
            Laravel’s powerful
          </div>
        </Card>
      </div>
      <div className="m-auto text-2xl font-extrabold mt-3">Other Tech</div>
      <Card className="flex flex-wrap w-full gap-3 justify-center">
        <Icon height={40} width={40} icon="vscode-icons:file-type-html" />
        <Icon height={40} width={40} icon="devicon:css3" />
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
    </div>
  );
};

export default About;
