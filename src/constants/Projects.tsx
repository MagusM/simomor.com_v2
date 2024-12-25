import { StaticImageData } from "next/image";
import dayjs from "dayjs";
import higuyLandingPage from "@/assets/images/higuy-landing-page.png";
import taliaLandingPage from "@/assets/images/talia-landing-page.png";
import portfolioOneImage from "@/assets/images/simonv1.png";

export type PortfolioProject = {
	company: string;
	year: string;
	title: string;
	results: { title: string }[];
	link: string;
	image: StaticImageData;
	tags?: string[];
};

export const PortfolioProjects: PortfolioProject[] = [
	{
		company: "Simon Mor",
		year: "2024",
		title: "My Amazing Portfolio v1",
		results: [
			{ title: "Framer motion" },
			{ title: "ThreeJS" },
			{ title: "React, Tailwind" }
		],
		link: "https://simonmor.com",
		image: portfolioOneImage,
		tags: ["Portfolio", "v1", "Personal"]
	},
	{
		company: "HyGuy",
		year: dayjs().year().toString(),
		title: "The Next Generation Customer Service",
		results: [
			{ title: "Instant Customer Support" },
			{ title: "Smart Sales Assistance" },
			{ title: "Proactive Service Enhancement" }
		],
		link: "https://higuy.ai",
		image: higuyLandingPage,
		tags: ["Production Ready", "AI", "Chatbot"]
	},
	{
		company: "Talia Chriqui Consulting",
		year: dayjs().year().toString(),
		title: "Talia Chriqui Consulting & Support",
		results: [
			{ title: "empower businesses to optimize their systems" },
			{ title: "improve team efficiency" },
			{ title: "achieve sustainable growth" }
		],
		link: "https://talia-chriqui.com",
		image: taliaLandingPage,
		tags: ["Client", "Success", "Growth"]
	}
];
