import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
	"Performant",
	"Accessible",
	"Secure",
	"Interactive",
	"Scalable",
	"User Friendly",
	"Maintainable",
	"Responsive",
	"Search Optimized",
	"Reliable"
];

export const TapeSection = () => {
	return (
		<div className="overflow-x-clip py-16 lg:py-24">
			<div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
				<div
					className="flex"
					style={{
						maskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
						WebkitMaskImage:
							"linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
					}}
				>
					<div className="animate-move-left flex flex-none gap-4 py-3 pr-4 [animation-duration:30s]">
						{[
							...new Array(2).fill(0).map((_, idx) => (
								<Fragment key={idx}>
									{words.map((word, i) => (
										<div
											key={i + word}
											className="inline-flex items-center gap-4"
										>
											<span className="text-sm font-extrabold uppercase text-gray-900">
												{word}
											</span>
											<StarIcon className="size-6 -rotate-12 text-gray-900" />
										</div>
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
