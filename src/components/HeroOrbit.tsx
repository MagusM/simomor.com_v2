import React, { PropsWithChildren } from "react";

export type HeroOrbitProps = PropsWithChildren<{
	size: number;
	rotation: number;
}>;

export const HeroOrbit: React.FC<HeroOrbitProps> = ({
	children,
	size,
	rotation
}: HeroOrbitProps) => {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			{/* animate-spin  [animation-duration:30s]*/}
			<div
				className="flex items-start justify-start"
				style={{
					transform: `rotate(${rotation}deg)`,
					height: `${size}px`,
					width: `${size}px`
				}}
			>
				{/* animate-spin  [animation-duration:30s]*/}
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
	);
};
