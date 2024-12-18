import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

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
		image: darkSaasLandingPage // Replace with appropriate type
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
		image: lightSaasLandingPage // Replace with appropriate type
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
		image: aiStartupLandingPage // Replace with appropriate type
	}
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="pb-16">
			<div className="container">
				<div className="flex justify-center">
					<p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
						Real-world Results
					</p>
				</div>
				<h2 className="mt-6 text-center font-serif text-3xl">
					Featured Projects
				</h2>
				<p className="mt-4 text-center text-white/60">
					See how I transformed concepts into engaging digital experiences.
				</p>
				<div className="mt-10 flex flex-col gap-20">
					{portfolioProjects.map((project) => (
						<div
							key={project.title}
							className="afyer:outline-2 relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:-outline-offset-2 after:outline-white/20 after:content-['']"
						>
							<div
								className="absolute inset-0 -z-10 opacity-5"
								style={{ backgroundImage: `url${grainImage}` }}
							/>
							<div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
								<span>{project.company}</span>
								<span>&bull;</span>
								<span>{project.year}</span>
							</div>
							<h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
							<hr className="mt-4 border-t-2 border-white/5" />
							<ul className="mt-4 flex flex-col gap-4">
								{project.results.map((result) => (
									<li
										key={result.title}
										className="flex gap-2 text-sm text-white/50"
									>
										<CheckCircleIcon className="size-5" />
										<span>{result.title}</span>
									</li>
								))}
							</ul>
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950">
									<span>Visit Live Site</span>
									<ArrowUpRightIcon className="size-4" />
								</button>
							</a>
							<Image
								src={project.image}
								alt={project.title}
								className="-mb-4 mt-8"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
