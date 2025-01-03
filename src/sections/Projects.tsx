"use client";

import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/higuy-landing-page.png";
import aiStartupLandingPage from "@/assets/images/talia-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { isMobile } from "@/utils/deviceBreakpoints.util";
import { useEffect, useState } from "react";
import { PortfolioProjects } from "@/constants/Projects";

export const ProjectsSection = () => {
	const [topValue, setTopValue] = useState(0);

	useEffect(() => {
		const calculateTop = () => {
			const isMobileView = isMobile();
			return isMobileView ? 100 : 200;
		};

		setTopValue(calculateTop());

		const handleResize = () => setTopValue(calculateTop());
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
					{PortfolioProjects.map((project, index) => (
						<Card
							key={project.title}
							className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
							style={{
								top: `calc(64px + ${index * topValue}px)`
							}}
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
