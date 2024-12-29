import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { Card } from "@/components/Card";
import React from "react";
import { ToolboxItemProps } from "@/constants/ToolboxItems";

type MyToolboxProps = { items: ToolboxItemProps[] };

export const MyToolbox: React.FC<MyToolboxProps> = ({ items }) => {
	return (
		<Card className="h-[320px] md:col-span-3 lg:col-span-2">
			<CardHeader
				title={"My Toolbox"}
				description={
					"Explore the technologies and tools I use to craft exceptional digital experiences."
				}
				className=""
			/>
			<ToolboxItems
				items={items}
				className="cursor-pointer"
				itemWrapperClassName="animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]"
			/>
			<ToolboxItems
				items={items}
				className="mt-6 cursor-pointer"
				itemWrapperClassName="animate-move-right [animation-duration:60s] hover:[animation-play-state:paused]"
				animationDirection="right"
				// animationDuration={40}
			/>
		</Card>
	);
};
