import dayjs from "dayjs";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const socialLinks: { href: string; title: string }[] = [
	{ href: "", title: "GitHub" },
	{ href: "", title: "Medium" },
	{ href: "", title: "LinkedIn" },
	{ href: "", title: "YouTube" }
];

export const Footer = () => {
	return (
		<footer className="relative -z-10 overflow-x-clip">
			<div
				className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30"
				style={{
					maskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)",
					WebkitMaskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)"
				}}
			/>
			<div className="container">
				<div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
					<div className="text-white/40">
						&copy; {dayjs().year()}. All rights reserved.{" "}
					</div>
					<nav className="flex flex-col items-center gap-8 md:flex-row">
						{socialLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								rel="noopener noreferrer"
								target={"_blank"}
								className="inline-flex items-center gap-1.5"
							>
								<span className="font-semibold">{link.title}</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
