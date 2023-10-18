import { useState } from "react";
import { Button } from "../button";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { COMPANY, FEATURES } from "./constants";
import { MobileMenu } from "../mobile-menu";

export const Header = () => {
	const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
	return (
		<header className="flex items-center">
			<svg className="w-[84px] h-[27px]">
				<use xlinkHref="sprite.svg#logo" />
			</svg>
			<nav className="hidden xl:flex space-x-6 ml-8 items-center">
				<NavItem text="Feature">
					<NavMenu items={FEATURES} />
				</NavItem>
				<NavItem text="Company">
					<NavMenu items={COMPANY} />
				</NavItem>
				<NavItem text="Careers" />
				<NavItem text="About" />
			</nav>
			<div className="hidden xl:flex ml-auto space-x-5">
				<Button>loggin</Button>
				<Button hasBorder>Register</Button>
			</div>
			<div
				className="xl:hidden ml-auto cursor-pointer z-30"
				onClick={() => setIsModalMenuOpen(!isModalMenuOpen)}
			>
				{isModalMenuOpen ? (
					<svg className="w-[25px] h-[25px]">
						<use xlinkHref="sprite.svg#close" />
					</svg>
				) : (
					<svg className="w-[32px] h-[18px]">
						<use xlinkHref="sprite.svg#menu" />
					</svg>
				)}
			</div>
			<MobileMenu isOpen={isModalMenuOpen} />
		</header>
	);
};
