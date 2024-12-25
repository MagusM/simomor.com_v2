"use client";

import dayjs from "dayjs";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const socialLinks: { href: string; title: string }[] = [
	{ href: process.env.NEXT_PUBLIC_GITHUB as string, title: "GitHub" },
	{ href: process.env.NEXT_PUBLIC_MEDIUM as string, title: "Medium" },
	{ href: process.env.NEXT_PUBLIC_LINKEDIN as string, title: "LinkedIn" }
];

export const Footer = () => {
	return (
		<footer className="relative overflow-x-clip">
			<div
				className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30"
				style={{
					maskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)",
					WebkitMaskImage:
						"radial-gradient(50% 50% at bottom center, black, transparent)"
				}}
			/>
			<div className="container z-0">
				<div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
					<div className="inline-flex text-white/40">
						<span className="text-red-400">&copy; {dayjs().year()}</span>
						<span>. All rights reserved. </span>
					</div>
					<nav className="z-10 flex flex-col items-center gap-8 md:flex-row">
						{socialLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								rel="noopener noreferrer"
								target={"_blank"}
								className="inline-flex cursor-pointer items-center gap-1.5 transition duration-300 hover:text-yellow-500"
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
