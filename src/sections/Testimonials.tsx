import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image, { StaticImageData } from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

type Testimonials = {
	name: string;
	position: string;
	text: string;
	avatar: StaticImageData;
};

const testimonials: Testimonials[] = [
	{
		name: "Alex Turner",
		position: "Marketing Manager @ TechStartups",
		text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1
	},
	{
		name: "Talia Chriqui",
		position: "CEO @ Talia Chriqui Consulting",
		text: "My revenue increased by 50% in the first month by lunching my business new portfolio made by Simon.",
		avatar: memojiAvatar2
	},
	{
		name: "Daniel White",
		position: "CEO @ InnovateCo",
		text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
		avatar: memojiAvatar3
	},
	{
		name: "Emily Carter",
		position: "Product Manager @ GlobalTech",
		text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4
	},
	{
		name: "Michael Brown",
		position: "Director of IT @ MegaCorp",
		text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
		avatar: memojiAvatar5
	}
];

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
									{testimonials.map((testimonial, index) => (
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
