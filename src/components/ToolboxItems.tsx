import React from "react";
import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

export type ToolboxItemProps = { title: string; iconType: React.ElementType };

type ToolboxItemsProps = {
	items: ToolboxItemProps[];
	className?: string;
	itemWrapperClassName?: string;
};

export const ToolboxItems: React.FC<ToolboxItemsProps> = ({
	items,
	className,
	itemWrapperClassName
}: ToolboxItemsProps) => {
	return (
		<div
			className={twMerge("flex", className)}
			style={{
				maskImage:
					"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
				WebkitMaskImage:
					"linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
			}}
		>
			<div
				className={twMerge(
					"flex flex-none gap-6 py-0.5 pr-6",
					itemWrapperClassName
				)}
			>
				{items.map((item) => (
					<div
						key={item.title}
						className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
					>
						<TechIcon component={item.iconType} />
						<span className="font-semibold">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};