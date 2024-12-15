import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
	return (
		<div className="py-32 md:py-48 lg:py-60">
			<div className="container">
				<div className="flex flex-col items-center">
					<Image
						src={memojiImage}
						alt="Person peeking from behind laptop"
						className="size-[100px]"
					/>
					<div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
						<div className="size-2.5 rounded-full bg-green-500"></div>
						<div className="text-sm font-medium">
							Available for new projects
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-lg">
					<h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
						Building Exceptional User Expriences
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						I specialize in transforming designs into functional,
						high-performing web. Let's discuss your new project.
					</p>
				</div>

				<div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
					<button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
						<span className="font-semibold">Explore My Work</span>
						<ArrowDown className="size-4" />
					</button>
					<button className="g inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
						<span>👋</span>
						<span className="font-semibold">Let's Connect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
