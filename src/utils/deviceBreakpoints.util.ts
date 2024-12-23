import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

const smBreakpoint = fullConfig.theme.screens.sm;

export const isMobile = () => {
	if (typeof window === "undefined") {
		return false; // Default value for SSR
	}

	return window.matchMedia(`(max-width: ${smBreakpoint})`).matches;
};
