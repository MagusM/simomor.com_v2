"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import {
	HeroOrbitDotMap,
	HeroOrbitSparkMap,
	HeroOrbitStarMap,
	RingsWidth
} from "@/constants/HeroOrbitMaps";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

export const HeroSection = () => {
	return (
		<div
			id="home"
			className="relative z-0 flex min-h-[100dvh] items-center justify-center overflow-x-clip"
		>
			<div
				className="absolute inset-0"
				style={{
					maskImage:
						"linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)" // For Safari
				}}
			>
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{
						backgroundImage: `url(${grainImage.src})`
					}}
				/>
				{RingsWidth.map((size) => (
					<div
						key={size}
						className="hero-ring"
						style={{
							width: size,
							height: size
						}}
					/>
				))}

				{HeroOrbitStarMap.map(
					({
						size,
						child,
						rotation,
						shouldOrbit,
						orbitDuration,
						spinDuration,
						shouldSpin
					}) => (
						<HeroOrbit
							key={`${size}-${rotation}`}
							size={size}
							rotation={rotation}
							shouldOrbit={shouldOrbit}
							orbitDuration={orbitDuration}
							spinDuration={spinDuration}
							shouldSpin={shouldSpin}
						>
							{child}
						</HeroOrbit>
					)
				)}

				{HeroOrbitSparkMap.map(
					({
						size,
						child,
						rotation,
						shouldOrbit,
						orbitDuration,
						spinDuration,
						shouldSpin
					}) => (
						<HeroOrbit
							key={`${size}-${rotation}`}
							size={size}
							rotation={rotation}
							shouldOrbit={shouldOrbit}
							orbitDuration={orbitDuration}
							spinDuration={spinDuration}
							shouldSpin={shouldSpin}
						>
							{child}
						</HeroOrbit>
					)
				)}

				{HeroOrbitDotMap.map(
					({
						size,
						child,
						rotation,
						shouldOrbit,
						orbitDuration,
						spinDuration,
						shouldSpin
					}) => (
						<HeroOrbit
							key={`${size}-${rotation}`}
							size={size}
							rotation={rotation}
							shouldOrbit={shouldOrbit}
							orbitDuration={orbitDuration}
							spinDuration={spinDuration}
							shouldSpin={shouldSpin}
						>
							{child}
						</HeroOrbit>
					)
				)}
			</div>

			<div className="container md:-mt-20 lg:-mt-20">
				<div className="flex flex-col items-center">
					<Image
						src={memojiImage}
						alt="Person peeking from behind laptop"
						className="size-[100px]"
					/>
					<div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
						<div className="relative size-2.5 rounded-full bg-green-500">
							<div className="animate-ping-large absolute inset-0 rounded-full bg-green-500" />
						</div>
						<div className="text-sm font-medium">
							Available for new projects
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-lg">
					<h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
						Building Exceptional User Expriences
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						I specialize in transforming designs into functional,
						high-performing web. Let's discuss your new project.
					</p>
				</div>

				<div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
					<button
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="z-10 inline-flex h-12 !cursor-pointer items-center gap-2 rounded-xl border border-white bg-gray-800 px-6 text-white transition duration-300 hover:border-red-500"
					>
						<span className="font-semibold">Explore My Work</span>
						<ArrowDown className="size-4" />
					</button>
					<button
						className="group z-10 inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900 transition duration-300 hover:shadow-[0_0_0_3px_red]"
						onClick={() =>
							(window.location.href = `mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`)
						}
					>
						<span className="group-hover:animate-wave">👋</span>
						<span className="font-semibold">Let's Connect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
