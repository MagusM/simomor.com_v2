import { capitalize } from "lodash";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const routesSet = new Set<string>(["home", "projects", "about", "contact"]);

export const Header = () => {
	return (
		<div className="relative top-3 flex items-center justify-center">
			<nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
				{Array.from(routesSet).map((route, index) => (
					<a
						className={clsx(
							"nav-item",
							index === routesSet.size - 1 &&
								"bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
						)}
						key={`${route}-${index}`}
						href={`#${route}`}
					>
						{capitalize(route)}
					</a>
				))}
			</nav>
		</div>
	);
};
