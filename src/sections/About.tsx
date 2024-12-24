import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import React from "react";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
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
