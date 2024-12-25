import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { Testimonials } from "@/constants/Testemonials";

export const TestimonialsSection = () => {
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
					className="-my-4 mt-12 flex overflow-x-clip py-4 lg:mt-20"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
					}}
				>
					<div className="animate-move-left flex flex-none gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
						{[
							...new Array(2).fill(0).map((_, idx) => (
								<Fragment key={idx}>
									{Testimonials.map((testimonial, index) => (
										<Card
											key={`${testimonial.name}-${index}`}
											className="duration-400 max-w-xs p-6 transition hover:-rotate-3 md:max-w-md md:p-8"
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
						]}
					</div>
				</div>
			</div>
		</div>
	);
};
