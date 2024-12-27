"use client";

import { capitalize } from "lodash";
import clsx from "clsx";
import Link from "next/link";
import { HeaderTypes, RoutesSet } from "@/constants/StaticNavigation";
import { useState } from "react";

export const Header = () => {
	const [activeRoute, setActiveRoute] = useState<HeaderTypes>();

	return (
		<div className="fixed top-3 z-10 flex w-full items-center justify-center">
			<nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
				{Array.from(RoutesSet).map((route, index) =>
					route === "contact" ? (
						<a
							className={clsx(
								"nav-item",
								index === RoutesSet.size - 1 &&
									"bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900",
								activeRoute === route && "bg-white/20 text-cyan-300"
							)}
							key={`${route}-${index}`}
							href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`}
							onClick={() => setActiveRoute(route)}
						>
							{capitalize(route)}
						</a>
					) : (
						<Link
							href={`#${route}`}
							key={`${route}-${index}`}
							onClick={() => setActiveRoute(route)}
							className={clsx(
								"nav-item",
								index === RoutesSet.size - 1 &&
									"bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900",
								activeRoute === route && "bg-white/20 text-cyan-300"
							)}
						>
							{capitalize(route)}
						</Link>
					)
				)}
			</nav>
		</div>
	);
};
