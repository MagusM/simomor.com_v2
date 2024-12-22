import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image, { StaticImageData } from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import React from "react";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemProps, ToolboxItems } from "@/components/ToolboxItems";

// todo: fix all icons, find relevant ones and use them
const toolBoxItems: ToolboxItemProps[] = [
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

const hobbies: { title: string; emoji: string; left: string; top: string }[] = [
	{
		title: "Painting",
		emoji: "🎨",
		left: "5%",
		top: "5%"
	},
	{
		title: "Photography",
		emoji: "📸",
		left: "50%",
		top: "5%"
	},
	{
		title: "Hiking",
		emoji: "🥾",
		left: "35%",
		top: "40%"
	},
	{
		title: "Gaming",
		emoji: "🎮",
		left: "10%",
		top: "35%"
	},
	{
		title: "Music",
		emoji: "🎵",
		left: "70%",
		top: "45%"
	},
	{
		title: "Fitness",
		emoji: "🏋🏻‍♂️",
		left: "5%",
		top: "65%"
	},
	{
		title: "Reading",
		emoji: "📚",
		left: "45%",
		top: "70%"
	}
];

export const AboutSection = () => {
	return (
		<div className="py-20">
			<div className="container">
				<SectionHeader
					eyeBrow={"about me"}
					title={"a glimpse into my world"}
					description={
						"learn more about who I am, what I do, and what inspires me."
					}
				/>
				<div className="mt-20 flex flex-col gap-8">
					<Card className="h-[320px]">
						<CardHeader
							title={"My Reads"}
							description={"Explore the books shaping my perspectives."}
						/>
						<div className="mx-auto mt-8 w-40">
							<Image src={bookImage} alt={"Book cover"} />
						</div>
					</Card>
					<Card className="h-[320px] p-0">
						<CardHeader
							title={"My Toolbox"}
							description={
								"Explore the technologies and tools I use to craft exceptional digital experiences."
							}
							className="px-6 pt-6"
						/>
						<ToolboxItems items={toolBoxItems} className="mt-6" />
						<ToolboxItems
							items={toolBoxItems}
							className="mt-6"
							itemWrapperClassName="-translate-x-1/2"
						/>
					</Card>
					<Card className="flex h-[320px] flex-col p-0">
						<CardHeader
							title={"Beyond the Code"}
							description={
								"Explore my interests and hobbies beyond the digital realm."
							}
							className="px-6 py-6"
						/>
						<div className="relative flex-1">
							{hobbies.map((hobby) => (
								<div
									key={hobby.title}
									className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
									style={{
										left: hobby.left,
										top: hobby.top
									}}
								>
									<span className="font-medium text-gray-950">
										{hobby.title}
									</span>
									<span>{hobby.emoji}</span>
								</div>
							))}
						</div>
					</Card>
					<Card className="p-90 relative h-[320px]">
						<Image
							src={mapImage}
							alt="map"
							className="h-full w-full object-cover object-left-top"
						/>
						<div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
							<Image src={smileMemoji} alt="smile" className="size-20" />
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};
