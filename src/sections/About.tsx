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

export const AboutSection = () => {
	return (
		<div className="">
			<SectionHeader
				eyeBrow={"about me"}
				title={"a glimpse into my world"}
				description={
					"learn more about who I am, what I do, and what inspires me."
				}
			/>
			<div>
				<Card>
					<div>
						<StarIcon />
						<h3>My Reads</h3>
						<p>Explore the books shaping my perspectives.</p>
					</div>
					<Image src={bookImage} alt={"Book cover"} />
				</Card>
				<Card>
					<div>
						<StarIcon />
						<h3>My Toolbox</h3>
						<p>
							Explore the technologies and tools I use to craft exceptional
							digital experiences.
						</p>
					</div>
					<div>
						{toolBoxItems.map((item) => (
							<div key={item.title}>
								<TechIcon component={item.iconType} />
								<span>{item.title}</span>
							</div>
						))}
					</div>
				</Card>
				<Card>
					<div>
						<StarIcon />
						<h3>Beyond the Code</h3>
						<p>Explore my interests and hobbies beyond the digital realm.</p>
					</div>
				</Card>
				<Card></Card>
			</div>
		</div>
	);
};
