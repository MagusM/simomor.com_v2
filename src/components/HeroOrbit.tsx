import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type HeroOrbitProps = PropsWithChildren<{
	size: number;
	rotation: number;
	orbitDuration?: number;
	shouldOrbit?: boolean;
	shouldSpin?: boolean;
	spinDuration?: number;
}>;

export const HeroOrbit: React.FC<HeroOrbitProps> = ({
	children,
	size,
	rotation,
	orbitDuration,
	shouldOrbit,
	shouldSpin,
	spinDuration
}: HeroOrbitProps) => {
	return (
		<div className="absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2">
			<div
				className={twMerge(!!shouldOrbit && "animate-spin")}
				style={{
					animationDuration: `${orbitDuration || 30}s`
				}}
			>
				<div
					className="flex items-start justify-start"
					style={{
						transform: `rotate(${rotation}deg)`,
						height: `${size}px`,
						width: `${size}px`
					}}
				>
					<div
						className={twMerge(!!shouldSpin && "animate-spin")}
						style={{
							animationDuration: `${spinDuration || 30}s`
						}}
					>
						<div
							className="inline-flex"
							style={{
								transform: `rotate(${-rotation}deg)`
							}}
						>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
