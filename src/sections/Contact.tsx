import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
	return (
		<div className="py-16 pt-12">
			<div className="container">
				<div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900">
					<div
						className="absolute inset-0 -z-10 opacity-5"
						style={{
							backgroundImage: `url(${grainImage.src})`
						}}
					></div>
					<h2 className="font-serif text-2xl">
						Let's create something amazing together
					</h2>
					<p className="mt-2 text-sm">
						Ready to bring your next project to life? Let's connect and discuss
						how I can help you achieve your goals
					</p>
					<button className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-gray-900 px-6 text-white">
						<span className="font-semibold">Contact Me</span>
						<ArrowUpRightIcon className="size-4" />
					</button>
				</div>
			</div>
		</div>
	);
};
