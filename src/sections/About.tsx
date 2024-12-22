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

// todo: fix all icons, find relevant ones and use them
const toolBoxItems: { title: string; iconType: React.ElementType }[] = [
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

const hobbies: { title: string; emoji: string }[] = [
	{
		title: "Painting",
		emoji: "🎨"
	},
	{
		title: "Photography",
		emoji: "📸"
	},
	{
		title: "Gaming",
		emoji: "🎮"
	},
	{
		title: "Hiking",
		emoji: "🥾"
	},
	{
		title: "Music",
		emoji: "🎵"
	},
	{
		title: "Fitness",
		emoji: "🏋🏻‍♂️"
	},
	{
		title: "Reading",
		emoji: "📚"
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
				<div className="mt-20">
					<Card className="h-[320px]">
						<CardHeader
							title={"My Reads"}
							description={"Explore the books shaping my perspectives."}
						/>
						<div className="mx-auto mt-8 w-40">
							<Image src={bookImage} alt={"Book cover"} />
						</div>
					</Card>
					<Card>
						<CardHeader
							title={"My Toolbox"}
							description={
								"Explore the technologies and tools I use to craft exceptional digital experiences."
							}
						/>
						<div>
							{toolBoxItems.map((item) => (
								<div
									key={item.title}
									className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
								>
									<TechIcon component={item.iconType} />
									<span className="font-semibold">{item.title}</span>
								</div>
							))}
						</div>
					</Card>
					<Card>
						<CardHeader
							title={"Beyond the Code"}
							description={
								"Explore my interests and hobbies beyond the digital realm."
							}
						/>
						<div>
							{hobbies.map((hobbie) => (
								<div key={hobbie.title}>
									<span>{hobbie.title}</span>
									<span>{hobbie.emoji}</span>
								</div>
							))}
						</div>
					</Card>
					<Card>
						<Image src={mapImage} alt="map" />
						<Image src={smileMemoji} alt="smile" />
					</Card>
				</div>
			</div>
		</div>
	);
};
