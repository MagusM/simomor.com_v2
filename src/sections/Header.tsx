import { capitalize } from "lodash";
import clsx from "clsx";
import { RoutesSet } from "@/constants/StaticNavigation";

export const Header = () => {
	return (
		<div className="fixed top-3 z-10 flex w-full items-center justify-center">
			<nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
				{Array.from(RoutesSet).map((route, index) => (
					<a
						className={clsx(
							"nav-item",
							index === RoutesSet.size - 1 &&
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
