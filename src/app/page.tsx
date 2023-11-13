import Link from "next/link";
import { IconWithTooltip } from "./_components/icon-with-tooltip";
import CSS3Icon from "./_components/icons/css3-icon";
import ExpressJSIcon from "./_components/icons/express-js-icon";
import GithubIcon from "./_components/icons/github-icon";
import GraphQLIcon from "./_components/icons/graphql-icon";
import HTML5Icon from "./_components/icons/html5-icon";
import JavascriptIcon from "./_components/icons/javascript-icon";
import NestJSIcon from "./_components/icons/nestjs-icon";
import NextJSIcon from "./_components/icons/nextjs-icon";
import NodeJSIcon from "./_components/icons/node-icon";
import ReactIcon from "./_components/icons/react-icon";
import TailwindIcon from "./_components/icons/tailwind-icon";
import TypescriptIcon from "./_components/icons/typescript-icon";
import VueIcon from "./_components/icons/vue-icon";
import ProjectDisplay from "./_components/project-display";
import LinkedInIcon from "./_components/icons/linkedin-icon";
import EmailIcon from "./_components/icons/email-icon";
import bg from "~/styles/bg.module.css";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#21255b] to-[#15162c] pt-4 text-white">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4 sm:space-y-6 sm:px-6 md:space-y-8 lg:space-y-16 lg:px-8">
        <header className="flex w-full justify-center">
          <div
            className={cn(
              "h-[350px] w-full rounded-2xl bg-pink-400 sm:h-[250px] sm:w-[85%] sm:max-w-[800px]",
              bg.bg,
            )}
          >
            <div className="flex h-full w-full flex-col content-start items-center justify-end overflow-hidden sm:flex-row sm:justify-center">
              <h1 className="mb-4 text-5xl font-semibold text-[#21255b] transition-all hover:text-6xl sm:hover:text-6xl md:hover:text-8xl">
                somafet
              </h1>
              <div className="h-[228px] w-[254px]"></div>
            </div>
          </div>
        </header>
        <section className="w-full rounded-2xl bg-[#8866ee] sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="mb-4 max-w-[80%] text-xl font-medium tracking-wide">
              I build full stack web applications for fun and also for a good
              paycheck.
            </h2>
            <p className="text-sm">
              Writing websites and API&#39;s since{" "}
              <span className="font-semibold">2016</span>.
            </p>
          </article>
          <article className="flex justify-evenly rounded-b-2xl bg-[#6644cc] p-[2%]">
            <Link href="https://github.com/Somafet">
              <IconWithTooltip icon={<GithubIcon />} tooltipText="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/soma-somorjai/">
              <IconWithTooltip icon={<LinkedInIcon />} tooltipText="LinkedIn" />
            </Link>
            <Link href="mailto:somafet@gmail.com">
              <IconWithTooltip
                icon={<EmailIcon />}
                tooltipText="somafet@gmail.com"
              />
            </Link>
          </article>
        </section>
        <section className="w-full rounded-2xl bg-[#44aadd] sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="mb-4 max-w-[80%] text-xl font-medium tracking-wide">
              Skills
            </h2>
          </article>
          <article className="flex justify-between rounded-b-2xl bg-[#2299bb] p-[2%]">
            <IconWithTooltip
              icon={<HTML5Icon height={48} width={48} />}
              tooltipText="HTML5"
            />
            <IconWithTooltip
              icon={<CSS3Icon height={48} width={48} />}
              tooltipText="CSS3"
            />
            <IconWithTooltip
              icon={<JavascriptIcon height={48} width={48} />}
              tooltipText="Javascript"
            />
            <IconWithTooltip
              icon={<TypescriptIcon height={48} width={48} />}
              tooltipText="Typescript"
            />
            <IconWithTooltip
              icon={<NodeJSIcon height={48} width={48} />}
              tooltipText="NodeJS"
            />
            <IconWithTooltip
              icon={<ExpressJSIcon height={48} width={48} />}
              tooltipText="ExpressJS"
            />
            <IconWithTooltip
              icon={<ReactIcon height={48} width={48} />}
              tooltipText="React"
            />
          </article>
        </section>
        <section className="w-full rounded-2xl bg-[#c2425e] sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="mb-4 max-w-[80%] text-xl font-medium tracking-wide">
              Projects
            </h2>
          </article>
          <article className="flex flex-col content-between space-y-2 rounded-b-2xl bg-[#8b3043] p-[2%]">
            <ProjectDisplay
              projectName="DineQR"
              description="An at table ordering service for skipping the queues and finding the comfiest spots."
              techIcons={[
                <IconWithTooltip
                  key="next"
                  icon={<NextJSIcon />}
                  tooltipText="NextJS"
                />,
                <IconWithTooltip
                  key="nest"
                  icon={<NestJSIcon />}
                  tooltipText="NestJS"
                />,
                <IconWithTooltip
                  key="graphql"
                  icon={<GraphQLIcon />}
                  tooltipText="GraphQL"
                />,
              ]}
              href="https://dineqr.hu"
            />
            <ProjectDisplay
              projectName="Dinge Technologies"
              description="A tech agency website."
              techIcons={[
                <IconWithTooltip
                  key="next"
                  icon={<NextJSIcon />}
                  tooltipText="NextJS"
                />,
                <IconWithTooltip
                  key="tailwind"
                  icon={<TailwindIcon />}
                  tooltipText="Tailwind CSS"
                />,
              ]}
              href="https://dinge.hu"
            />
            <ProjectDisplay
              projectName="Kasa Living"
              description="Full stack developer at Kasa Living. Check into your comfort zone."
              techIcons={[
                <IconWithTooltip
                  key="vue"
                  icon={<VueIcon />}
                  tooltipText="VueJS"
                />,
                <IconWithTooltip
                  key="node"
                  icon={<NodeJSIcon />}
                  tooltipText="NodeJS"
                />,
              ]}
              href="https://kasa.com"
            />
          </article>
        </section>

        <footer className="mb-0 w-full rounded-t-2xl bg-red-500 sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="max-w-[80%] text-xl font-medium tracking-wide">
              built by somafet loved by my mum
            </h2>
            <p className="text-sm">Made using NextJS.</p>
          </article>
        </footer>
      </div>
    </main>
  );
}
