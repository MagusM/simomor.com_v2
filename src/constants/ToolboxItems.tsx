import React from "react";
import JavascriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import FramerIcon from "@/assets/icons/framer.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import BunIcon from "@/assets/icons/bunjs.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import ExpressIcon from "@/assets/icons/expressjs-dark.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import GitIcon from "@/assets/icons/git.svg";
import GrafanaIcon from "@/assets/icons/grafana.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import MaterialUiIcon from "@/assets/icons/materialui.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import NestJsIcon from "@/assets/icons/nestjs.svg";
import NodeJSIcon from "@/assets/icons/nodejs.svg";
import NotionIcon from "@/assets/icons/notion.svg";
import NpmIcon from "@/assets/icons/npm.svg";
import PhpIcon from "@/assets/icons/php.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import PrettierIcon from "@/assets/icons/prettier.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import ReactQueryIcon from "@/assets/icons/react-query.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import SlackIcon from "@/assets/icons/slack.svg";
import SwaggerIcon from "@/assets/icons/swagger.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import ViteIcon from "@/assets/icons/vitejs.svg";
import WebpackIcon from "@/assets/icons/webpack.svg";
import ZodIcon from "@/assets/icons/zod.svg";

export type ToolboxItemProps = { title: string; iconType: React.ElementType };

export const ToolBoxItems: ToolboxItemProps[] = [
	{ title: "Git", iconType: GitIcon },
	{ title: "Figma", iconType: FigmaIcon },
	{ title: "Express", iconType: ExpressIcon },
	{ title: "Bun", iconType: BunIcon },
	{ title: "Docker", iconType: DockerIcon },
	{ title: "JavaScript", iconType: JavascriptIcon },
	{ title: "Grafana", iconType: GrafanaIcon },
	{ title: "Jira", iconType: JiraIcon },
	{ title: "Linux", iconType: LinuxIcon },
	{ title: "MUI", iconType: MaterialUiIcon },
	{ title: "NestJS", iconType: NestJsIcon },
	{ title: "Mongo", iconType: MongoIcon },
	{ title: "NextJS", iconType: NextjsIcon },
	{ title: "Node", iconType: NodeJSIcon },
	{ title: "Notion", iconType: NotionIcon },
	{ title: "Zod", iconType: ZodIcon },
	{ title: "Webpack", iconType: WebpackIcon },
	{ title: "NPM", iconType: NpmIcon },
	{ title: "PHP", iconType: PhpIcon },
	{ title: "Postgres", iconType: PostgresIcon },
	{ title: "Prettier", iconType: PrettierIcon },
	{ title: "React Query", iconType: ReactQueryIcon },
	{ title: "Prisma", iconType: PrismaIcon },
	{ title: "Redux", iconType: ReduxIcon },
	{ title: "Vite", iconType: ViteIcon },
	{ title: "Tailwind", iconType: TailwindIcon },
	{ title: "Swagger", iconType: SwaggerIcon },
	{ title: "Slack", iconType: SlackIcon },
	{ title: "TypeScript", iconType: TypescriptIcon },
	{ title: "React", iconType: ReactIcon },
	{ title: "Framer Motion", iconType: FramerIcon },
	{ title: "NodeJS", iconType: ReactIcon },
	{ title: "HTML5", iconType: HTMLIcon },
	{ title: "CSS3", iconType: CssIcon },
	{ title: "GitHub", iconType: GithubIcon }
];
