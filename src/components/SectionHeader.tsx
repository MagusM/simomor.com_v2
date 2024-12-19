import React from "react";
import { startCase } from "lodash";

type SectionHeaderProps = {
	eyeBrow: string;
	title: string;
	description: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	eyeBrow,
	description
}: SectionHeaderProps) => {
	return (
		<>
			<div className="flex justify-center">
				<p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
					{startCase(eyeBrow)}
				</p>
			</div>
			<h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
				{startCase(title)}
			</h2>
			<p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
				{startCase(description)}
			</p>
		</>
	);
};
