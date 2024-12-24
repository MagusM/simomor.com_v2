import { SectionHeader } from "@/components/SectionHeader";
import React from "react";
import { MyReads } from "@/sections/sectionComponents/about/MyReads";
import {
	MyToolbox,
	ToolBoxItems
} from "@/sections/sectionComponents/about/MyToolbox";
import {
	BeyondTheCode,
	Hobbies
} from "@/sections/sectionComponents/about/BeyondTheCode";
import { MapImage } from "@/sections/sectionComponents/about/MapImage";

export const AboutSection = () => {
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyeBrow={"about me"}
					title={"a glimpse into my world"}
					description={
						"learn more about who I am, what I do, and what inspires me."
					}
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<MyReads />
						<MyToolbox items={ToolBoxItems} />
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<BeyondTheCode items={Hobbies} />
						<MapImage />
					</div>
				</div>
			</div>
		</div>
	);
};
