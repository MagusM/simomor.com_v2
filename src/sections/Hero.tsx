import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit, HeroOrbitProps } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

type HeroOrbitMapProps = {
	child: React.ReactNode;
} & Pick<
	HeroOrbitProps,
	| "size"
	| "rotation"
	| "shouldOrbit"
	| "orbitDuration"
	| "shouldSpin"
	| "spinDuration"
>;

const heroOrbitStarMap: HeroOrbitMapProps[] = [
	{
		size: 800,
		rotation: -72,
		child: <StarIcon className="size-28 text-emerald-300" />,
		shouldOrbit: true,
		orbitDuration: 48,
		shouldSpin: true,
		spinDuration: 6
	},
	{
		child: <StarIcon className="size-12 text-emerald-300" />,
		size: 550,
		rotation: 20,
		shouldOrbit: true,
		orbitDuration: 38,
		shouldSpin: true,
		spinDuration: 6
	},
	{
		size: 590,
		rotation: 98,
		child: <StarIcon className="size-8 text-emerald-300" />,
		shouldOrbit: true,
		orbitDuration: 40,
		shouldSpin: true,
		spinDuration: 6
	}
];

const heroOrbitSparkMap: HeroOrbitMapProps[] = [
	{
		size: 430,
		rotation: -14,
		child: <SparkleIcon className="size-8 text-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 30,
		shouldSpin: true,
		spinDuration: 3
	},
	{
		size: 440,
		rotation: 79,
		child: <SparkleIcon className="size-5 text-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 32,
		shouldSpin: true,
		spinDuration: 6
	},
	{
		size: 530,
		rotation: 178,
		child: <SparkleIcon className="size-10 text-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 36,
		shouldSpin: true,
		spinDuration: 6
	},
	{
		size: 710,
		rotation: 144,
		child: <SparkleIcon className="size-14 text-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 44,
		shouldSpin: true,
		spinDuration: 6
	}
];

const heroOrbitDotMap: HeroOrbitMapProps[] = [
	{
		size: 720,
		rotation: 85,
		child: <div className="size-3 rounded-full bg-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 46
	},
	{
		size: 520,
		rotation: -41,
		child: <div className="size-3 rounded-full bg-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 34
	},
	{
		size: 650,
		rotation: -5,
		child: <div className="size-3 rounded-full bg-emerald-300/20" />,
		shouldOrbit: true,
		orbitDuration: 42
	}
];

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
				></div>
				<div className="hero-ring size-620"></div>
				<div className="hero-ring size-820"></div>
				<div className="hero-ring size-1020"></div>
				<div className="hero-ring size-1220"></div>

				{heroOrbitStarMap.map(
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

				{heroOrbitSparkMap.map(
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

				{heroOrbitDotMap.map(
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
					<button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
						<span className="font-semibold">Explore My Work</span>
						<ArrowDown className="size-4" />
					</button>
					<button className="g inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
						<span>👋</span>
						<span className="font-semibold">Let's Connect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
