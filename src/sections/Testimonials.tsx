"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment, useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Testimonials } from "@/constants/Testemonials";

export const TestimonialsSection = () => {
	const controls = useAnimation();
	const [isDragging, setIsDragging] = useState(false);
	const motionRef = useRef<HTMLDivElement>(null);

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

	// Stop animation while dragging
	const stopAnimation = async () => {
		await controls.stop();
	};

	useEffect(() => {
		startAnimation();
	}, [isDragging, startAnimation]);

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
						onHoverStart={stopAnimation}
						onHoverEnd={startAnimation}
						dragConstraints={{ left: -1000, right: 0 }}
						animate={controls}
						onDragStart={() => setIsDragging(true)}
						onDragEnd={() => setIsDragging(false)}
					>
						{[...Array(2)].map((_, outerIndex) => (
							<Fragment key={outerIndex}>
								{Testimonials.map((testimonial, index) => (
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
												<div className="font-semibold">{testimonial.name}</div>
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
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};
