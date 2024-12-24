import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import React from "react";

export const MapImage = () => {
	return (
		<Card className="p-90 relative h-[320px] md:col-span-2 lg:col-span-1">
			<Image
				src={mapImage}
				alt="map"
				className="h-full w-full object-cover object-left-top"
			/>
			<div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
				<div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
				<div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
				<Image src={smileMemoji} alt="smile" className="size-20" />
			</div>
		</Card>
	);
};
