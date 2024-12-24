import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import { Card } from "@/components/Card";
import React from "react";

export const MyReads = () => {
	return (
		<Card className="h-[320px] md:col-span-2 lg:col-span-1">
			<CardHeader
				title={"My Reads"}
				description={"Explore the books shaping my perspectives."}
			/>
			<div className="mx-auto mt-2 w-40 md:mt-0">
				<Image src={bookImage} alt={"Book cover"} />
			</div>
		</Card>
	);
};
