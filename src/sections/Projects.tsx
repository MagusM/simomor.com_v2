import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type PortfolioProject = {
	company: string;
	year: string;
	title: string;
	results: { title: string }[];
	link: string;
	image: StaticImageData;
};

const portfolioProjects: PortfolioProject[] = [
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
		image: darkSaasLandingPage //todo: Replace with appropriate type
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
		image: lightSaasLandingPage //todo: Replace with appropriate type
	},
	{
		company: "Talia Chriqui Consulting & Support",
		year: dayjs().year().toString(),
		title: "From cold leads to Hot deals",
		results: [
			{ title: "empower businesses to optimize their systems" },
			{ title: "improve team efficiency" },
			{ title: "achieve sustainable growth" }
		],
		link: "https://talia-chriqui.com",
		image: aiStartupLandingPage //todo: Replace with appropriate type
	}
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="pb-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyeBrow={"Real-world Results"}
					title={"Featured Projects"}
					description={
						"See how I transformed concepts into engaging digital experiences."
					}
				/>
				<div className="mt-10 flex flex-col gap-20 md:mt-20">
					{portfolioProjects.map((project) => (
						<Card
							key={project.title}
							className="px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
						>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
										{project.title}
									</h3>
									<hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
									<ul className="mt-4 flex flex-col gap-4 md:mt-5">
										{project.results.map((result) => (
											<li
												key={result.title}
												className="flex gap-2 text-sm text-white/50 md:text-base"
											>
												<CheckCircleIcon className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
											<span>Visit Live Site</span>
											<ArrowUpRightIcon className="size-4" />
										</button>
									</a>
								</div>
								<div className="relative">
									<Image
										src={project.image}
										alt={project.title}
										className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
