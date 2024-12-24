import { CardHeader } from "@/components/CardHeader";
import { Card } from "@/components/Card";
import React from "react";

type HobbiesProps = { title: string; emoji: string; left: string; top: string };

export const Hobbies: HobbiesProps[] = [
	{
		title: "Painting",
		emoji: "🎨",
		left: "5%",
		top: "5%"
	},
	{
		title: "Photography",
		emoji: "📸",
		left: "50%",
		top: "5%"
	},
	{
		title: "Hiking",
		emoji: "🥾",
		left: "35%",
		top: "40%"
	},
	{
		title: "Gaming",
		emoji: "🎮",
		left: "10%",
		top: "35%"
	},
	{
		title: "Music",
		emoji: "🎵",
		left: "70%",
		top: "45%"
	},
	{
		title: "Fitness",
		emoji: "🏋🏻‍♂️",
		left: "5%",
		top: "65%"
	},
	{
		title: "Reading",
		emoji: "📚",
		left: "45%",
		top: "70%"
	}
];

type BeyondTheCodeProps = { items: HobbiesProps[] };

export const BeyondTheCode: React.FC<BeyondTheCodeProps> = ({
	items
}: BeyondTheCodeProps) => {
	return (
		<Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
			<CardHeader
				title={"Beyond the Code"}
				description={
					"Explore my interests and hobbies beyond the digital realm."
				}
				className="px-6 py-6"
			/>
			<div className="relative flex-1">
				{items.map((hobby) => (
					<div
						key={hobby.title}
						className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
						style={{
							left: hobby.left,
							top: hobby.top
						}}
					>
						<span className="font-medium text-gray-950">{hobby.title}</span>
						<span>{hobby.emoji}</span>
					</div>
				))}
			</div>
		</Card>
	);
};
