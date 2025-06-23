/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { IconWithTooltip } from "./_components/icon-with-tooltip";
import CSS3Icon from "./_components/icons/css3-icon";
import ExpressJSIcon from "./_components/icons/express-js-icon";
import GithubIcon from "./_components/icons/github-icon";
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
import { twMerge } from "tailwind-merge";
import BitebyLogo from "./_components/icons/biteby-logo";
import AngularIcon from "./_components/icons/angular-icon";
import DomainlyLogo from "../../public/domainly.png";
import Image from "next/image";
import PsqlIcon from "./_components/icons/psql-icon";
import OnboardJSIcon from "./_components/icons/onboardjs-icon";

export default function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-center pt-4 text-white">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4 sm:space-y-6 sm:px-6 md:space-y-8 lg:space-y-16 lg:px-8">
        <header className="flex w-full justify-center">
          <div
            className={twMerge(
              "h-[350px] w-full rounded-lg bg-pink-400 sm:h-[250px] sm:w-[85%] sm:max-w-[800px]",
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
        <section className="w-full rounded-lg bg-[#8866ee] sm:w-[85%] sm:max-w-[800px]">
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
          <article className="flex justify-evenly rounded-b-lg bg-[#6644cc] p-[2%]">
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
        <section className="w-full rounded-lg bg-[#44aadd] sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="mb-4 max-w-[80%] text-xl font-medium tracking-wide">
              Skills
            </h2>
            <p className="text-sm">
              Fun Note: If you&#39;re looking for me and you&#39;ve read this
              far then write{" "}
              <span className="font-semibold">&ldquo;Watermelon&rdquo;</span>{" "}
              somewhere in your message :)
            </p>
          </article>
          <article className="grid grid-cols-6 grid-rows-1 justify-center gap-2 rounded-b-lg bg-[#2299bb] p-[2%] sm:grid-cols-7 sm:gap-0">
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<HTML5Icon height={48} width={48} />}
                tooltipText="HTML5"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<CSS3Icon height={48} width={48} />}
                tooltipText="CSS3"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<JavascriptIcon height={48} width={48} />}
                tooltipText="Javascript"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<TypescriptIcon height={48} width={48} />}
                tooltipText="Typescript"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<NodeJSIcon height={48} width={48} />}
                tooltipText="NodeJS"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<ExpressJSIcon height={48} width={48} />}
                tooltipText="ExpressJS"
              />
            </div>
            <div className="flex justify-center">
              <IconWithTooltip
                icon={<ReactIcon height={48} width={48} />}
                tooltipText="React"
              />
            </div>
          </article>
        </section>
        <section className="w-full rounded-lg bg-[#c2425e] sm:w-[85%] sm:max-w-[800px]">
          <article className="flex flex-col items-center p-[2%] text-center">
            <h2 className="mb-4 max-w-[80%] text-xl font-medium tracking-wide">
              Projects
            </h2>
          </article>
          <article className="flex flex-col content-between space-y-2 rounded-b-lg bg-[#8b3043] p-[2%] text-white">
            <ProjectDisplay
              projectName={
                <div className="inline-flex items-center">
                  <OnboardJSIcon className="h-12 w-12" />
                  <p className="ml-2 text-xl font-semibold">OnboardJS</p>
                </div>
              }
              description="The OnboardJS headless typescript library with React hooks and integrations helps you build better onboarding experiences for your
              apps faster and easier."
              techIcons={[
                <IconWithTooltip
                  key="typescript"
                  icon={<TypescriptIcon />}
                  tooltipText="Typescript"
                />,
                <IconWithTooltip
                  key="react"
                  icon={<ReactIcon />}
                  tooltipText="React"
                />,
              ]}
              href="https://github.com/Somafet/onboardjs"
            />
            <ProjectDisplay
              projectName={
                <div className="inline-flex items-center">
                  <Image
                    src={DomainlyLogo}
                    alt={`Domainly`}
                    width={304}
                    height={304}
                    className="h-12 w-auto"
                  />
                  <p className="ml-2 text-xl font-medium">Domainly</p>
                </div>
              }
              description="Domainly is a For Sale By Owner (FSBO) platform for domain names."
              techIcons={[
                <IconWithTooltip
                  key="next"
                  icon={<NextJSIcon />}
                  tooltipText="NextJS"
                />,
                <IconWithTooltip
                  key="psql"
                  icon={<PsqlIcon />}
                  tooltipText="PostgreSQL"
                />,
              ]}
              href="https://domainly.shop"
            />
            <ProjectDisplay
              projectName={<BitebyLogo />}
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
                  key="tailwind"
                  icon={<TailwindIcon />}
                  tooltipText="Tailwind CSS"
                />,
              ]}
              href="https://biteby.io"
            />
            <ProjectDisplay
              projectName="KLM - Air France"
              description="Led the development of an internal front-end application for pilot training scheduling at KLM, utilizing Angular 18 and managing large data sets with data scientists."
              techIcons={[
                <IconWithTooltip
                  key="angular"
                  icon={<AngularIcon />}
                  tooltipText="Angular"
                />,
                <IconWithTooltip
                  key="tailwind"
                  icon={<TailwindIcon />}
                  tooltipText="Tailwind CSS"
                />,
              ]}
              href="https://klm.com"
            />
            <ProjectDisplay
              projectName="A/B Smartly"
              description="At A/B Smartly, I worked as a Senior Software Engineer on enhancing the company's A/B testing SaaS platform."
              techIcons={[
                <IconWithTooltip
                  key="vue2"
                  icon={<VueIcon />}
                  tooltipText="Vue"
                />,
                <IconWithTooltip
                  key="tailwind"
                  icon={<TailwindIcon />}
                  tooltipText="Tailwind CSS"
                />,
                <IconWithTooltip
                  key="react"
                  icon={<ReactIcon />}
                  tooltipText="React"
                />,
              ]}
              href="https://absmartly.com"
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

        <footer className="mb-0 w-full rounded-t-lg bg-red-500 sm:w-[85%] sm:max-w-[800px]">
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
