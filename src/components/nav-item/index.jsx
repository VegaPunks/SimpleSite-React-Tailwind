import { useState } from "react";

export const NavItem = ({ text = "", children }) => {
	const [selected, setSelected] = useState("");
	return (
		<div className="relative">
			<div className="flex space-x-2 cursor-pointer items-center">
				<span
					className="text-medium-gray hover:text-almost-black"
					onClick={() => children && setSelected(text !== selected ? text : "")}
				>
					{text}
				</span>
				{children && selected !== text && (
					<svg className="w-[10px] h-[6px]">
						<use xlinkHref="sprite.svg#down" />
					</svg>
				)}
				{children && selected === text && (
					<svg className="w-[10px] h-[6px]">
						<use xlinkHref="sprite.svg#up" />
					</svg>
				)}
			</div>
			{selected && children}
		</div>
	);
};
