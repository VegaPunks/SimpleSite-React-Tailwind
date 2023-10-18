export const MenuItem = ({ text = "", icon }) => {
	return (
		<div className="flex items-center space-x-4">
			{icon ? (
				<svg className="w-[16px] h-[16px]">
					<use xlinkHref={icon} />
				</svg>
			) : null}

			<span className="text-medium-gray hover:text-almost-black cursor-pointer">{text}</span>
		</div>
	);
};
