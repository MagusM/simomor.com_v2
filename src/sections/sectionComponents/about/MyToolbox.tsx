import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { Card } from "@/components/Card";
import React from "react";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";

export type ToolboxItemProps = { title: string; iconType: React.ElementType };

// todo: fix all icons, find relevant ones and use them
//todo: move this to external file
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

type MyToolboxProps = { items: ToolboxItemProps[] };

export const MyToolbox: React.FC<MyToolboxProps> = ({ items }) => {
	return (
		<Card className="h-[320px] md:col-span-3 lg:col-span-2">
			<CardHeader
				title={"My Toolbox"}
				description={
					"Explore the technologies and tools I use to craft exceptional digital experiences."
				}
				className=""
			/>
			<ToolboxItems items={items} className="" />
			<ToolboxItems
				items={items}
				className="mt-6"
				itemWrapperClassName="-translate-x-1/2"
			/>
		</Card>
	);
};
