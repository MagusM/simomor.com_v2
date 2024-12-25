import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbitProps } from "@/components/HeroOrbit";

export type HeroOrbitMapProps = {
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

export const HeroOrbitStarMap: HeroOrbitMapProps[] = [
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

export const HeroOrbitSparkMap: HeroOrbitMapProps[] = [
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

export const HeroOrbitDotMap: HeroOrbitMapProps[] = [
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

export const RingsWidth = [620, 820, 1020, 1220];
