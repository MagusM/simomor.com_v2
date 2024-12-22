import StarIcon from "@/assets/icons/star.svg";
import React from "react";
import { capitalize, startCase } from "lodash";
import { twMerge } from "tailwind-merge";

type CardHeaderProps = {
	title: string;
	description: string;
	className?: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
	description,
	title,
	className
}: CardHeaderProps) => {
	return (
		<div className={twMerge("flex flex-col", className)}>
			<div className="inline-flex items-center gap-2">
				<StarIcon className="size-9 text-emerald-300" />
				<h3 className="font-serif text-3xl">{startCase(title)}</h3>
			</div>
			<p className="mt-2 text-sm text-white/60">{capitalize(description)}</p>
		</div>
	);
};
