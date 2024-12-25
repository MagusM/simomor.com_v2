import { SectionHeader } from "@/components/SectionHeader";
import React from "react";
import { MyReads } from "@/sections/sectionComponents/about/MyReads";
import { MyToolbox } from "@/sections/sectionComponents/about/MyToolbox";
import { BeyondTheCode } from "@/sections/sectionComponents/about/BeyondTheCode";
import { MapImage } from "@/sections/sectionComponents/about/MapImage";
import { ToolBoxItems } from "@/constants/ToolboxItems";
import { Hobbies } from "@/components/Hobbies";

export const AboutSection = () => {
	return (
		<div className="py-20 lg:py-28" id="about">
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
