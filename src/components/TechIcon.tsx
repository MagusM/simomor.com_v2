import { PropsWithChildren } from "react";

type TechIcon = {
	component: React.ElementType;
};

export const TechIcon = ({ component }: PropsWithChildren<TechIcon>) => {
	const Component = component;
	return <Component className="size-10" />;
};
