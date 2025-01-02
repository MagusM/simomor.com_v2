"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment, useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { LeeronTitles, Testimonials } from "@/constants/Testemonials";
import { concat, sample, throttle } from "lodash";

export const TestimonialsSection = () => {
	const controls = useAnimation();
	const [isDragging, setIsDragging] = useState(false);
	const motionRef = useRef<HTMLDivElement>(null);

	// State to hold the randomized testimonials
	const [enrichedTestimonials, setEnrichedTestimonials] = useState<
		Testimonials[]
	>([]);

	// Randomize testimonials on client-side only
	useEffect(() => {
		const middleIndex = Math.floor(Testimonials.length / 2);

		let randomLeeron1 = sample(LeeronTitles) ?? LeeronTitles[0];
		let randomLeeron2 = sample(LeeronTitles) ?? LeeronTitles[0];

		while (randomLeeron1 === randomLeeron2) {
			randomLeeron2 = sample(LeeronTitles) ?? LeeronTitles[0];
		}

		const randomizedTestimonials = concat(
			Testimonials.slice(0, middleIndex),
			randomLeeron1,
			Testimonials.slice(middleIndex),
			randomLeeron2
		);

		setEnrichedTestimonials(randomizedTestimonials);
	}, []); // Only run once on the client side

	const startAnimation = useCallback(async () => {
		if (!isDragging) {
			await controls.start({
				x: "-100%",
				transition: {
					duration: 30,
					ease: "linear",
					repeat: Infinity
				}
			});
		}
	}, [controls, isDragging]);

	const stopAnimation = async () => {
		await controls.stop();
	};

	useEffect(() => {
		startAnimation();
	}, [isDragging, startAnimation]);

	const handleDragStart = throttle(() => setIsDragging(true), 100);
	const handleDragStop = throttle(() => setIsDragging(false), 100);

	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyeBrow={"happy clients"}
					title={"what clients say about me"}
					description={
						"Don't just take my word for it. See what my clients have to say about my work"
					}
				/>
				<div
					className="-my-4 mt-12 flex overflow-hidden py-4 lg:mt-20"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
					}}
				>
					<motion.div
						ref={motionRef}
						className="flex flex-none cursor-grab gap-8 pr-8"
						drag="x"
						dragConstraints={
							motionRef.current
								? {
										left: -motionRef.current.scrollWidth + window.innerWidth,
										right: 0
									}
								: { left: 0, right: 0 }
						}
						animate={controls}
						onDragStart={handleDragStart}
						onDragEnd={handleDragStop}
						onHoverStart={stopAnimation}
						onHoverEnd={startAnimation}
					>
						{enrichedTestimonials.length > 0 ? (
							[...Array(2)].map((_, outerIndex) => (
								<Fragment key={outerIndex}>
									{enrichedTestimonials.map((testimonial, index) => (
										<Card
											key={`${testimonial.name}-${index}-${outerIndex}`}
											className="duration-400 max-w-xs bg-gradient-to-r from-gray-700 to-gray-800 p-6 transition duration-300 hover:from-cyan-300/20 hover:to-sky-400/30 hover:backdrop-blur md:max-w-md md:p-8"
										>
											<div className="flex items-center gap-4">
												<div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
													<Image
														src={testimonial.avatar}
														alt={testimonial.name}
														className="max-h-full"
													/>
												</div>
												<div>
													<div className="font-semibold">
														{testimonial.name}
													</div>
													<div className="text-sm text-white/40">
														{testimonial.position}
													</div>
												</div>
											</div>
											<p className="mt-4 text-sm md:mt-6 md:text-base">
												{testimonial.text}
											</p>
										</Card>
									))}
								</Fragment>
							))
						) : (
							<div>Loading testimonials...</div>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
};
