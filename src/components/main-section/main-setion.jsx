import hero from "../../images/image-hero-desktop.png";
import mobileHero from "../../images/image-hero-mobile.png";
import { Button } from "../button";

export const MainSetion = () => {
	return (
		<section className="w-full flex flex-col xl:flex-row mt-6 xl:h-screen justify-between">
			<div className="relative order-2 xl:order-1 xl:w-2/4 xl:text-left mt-12 text-center xl:mt-60">
				<h1 className="text-7xl font-black mt-6 xl:whitespace-pre-line">{`Make\n remote work`}</h1>
				<p className="text-medium-gray my-12 text-lg whitespace-pre-line">
					Lorem Ipsum - это текст-рыба, часто используемый в печати и
					вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
					латинице с начала XVI века.
				</p>
				<Button isFilled>Learn More</Button>
				<div className="flex xl:justify-around xl:absolute bottom-0 w-full mt-20 justify-between flex-wrap">
					<svg className="w-[120px] h-[20px]">
						<use xlinkHref="sprite.svg#client" />
					</svg>
					<svg className="w-[73px] h-[20px]">
						<use xlinkHref="sprite.svg#audiofile" />
					</svg>
					<svg className="w-[90px] h-[20px]">
						<use xlinkHref="sprite.svg#meet" />
					</svg>
					<svg className="w-[83px] h-[20px]">
						<use xlinkHref="sprite.svg#maker" />
					</svg>
				</div>
			</div>

			<div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
				<img src={hero} alt="hero" />
			</div>
			<div className="xl:hidden flex w-full mt-20 order-1 justify-center mb-8">
				<img src={mobileHero} alt="hero" />
			</div>
		</section>
	);
};
