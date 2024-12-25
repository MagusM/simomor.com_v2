"use client";

import { CardHeader } from "@/components/CardHeader";
import { Card } from "@/components/Card";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HobbiesProps } from "@/components/Hobbies";

type BeyondTheCodeProps = { items: HobbiesProps[] };

export const BeyondTheCode: React.FC<BeyondTheCodeProps> = ({
	items
}: BeyondTheCodeProps) => {
	const constraintRef = useRef(null);

	return (
		<Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
			<CardHeader
				title={"Beyond the Code"}
				description={
					"Explore my interests and hobbies beyond the digital realm."
				}
				className="px-6 py-6"
			/>
			<div className="relative flex-1" ref={constraintRef}>
				{items.map((hobby) => (
					<motion.div
						key={hobby.title}
						className="absolute inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
						style={{
							left: hobby.left,
							top: hobby.top
						}}
						drag
						dragConstraints={constraintRef}
					>
						<span className="font-medium text-gray-950">{hobby.title}</span>
						<span>{hobby.emoji}</span>
					</motion.div>
				))}
			</div>
		</Card>
	);
};
