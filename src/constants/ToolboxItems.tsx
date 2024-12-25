import React from "react";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";

export type ToolboxItemProps = { title: string; iconType: React.ElementType };

export const ToolBoxItems: ToolboxItemProps[] = [
	{ title: "JavaScript", iconType: JavascriptIcon },
	{ title: "TypeScript", iconType: JavascriptIcon },
	{ title: "React", iconType: ReactIcon },
	{ title: "Framer Motion", iconType: ReactIcon },
	{ title: "NextJS", iconType: ReactIcon },
	{ title: "NodeJS", iconType: ReactIcon },
	{ title: "ExpressJS", iconType: ReactIcon },
	{ title: "NestJS", iconType: ReactIcon },
	{ title: "HTML5", iconType: HTMLIcon },
	{ title: "CSS3", iconType: CssIcon },
	{ title: "Tailwind", iconType: ReactIcon },
	{ title: "MUI", iconType: ReactIcon },
	{ title: "Postgres", iconType: ReactIcon },
	{ title: "Mongo", iconType: ReactIcon },
	{ title: "Git", iconType: GithubIcon },
	{ title: "Chrome", iconType: ChromeIcon }
];
