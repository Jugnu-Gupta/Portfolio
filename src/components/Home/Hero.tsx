import HeroContent from "./Home";
import blackHole from "../../assets/video/blackhole.webm";

const Hero = () => {
	return (
		<div
			className="relative top-10 flex flex-col h-full w-full"
			id="about-me">
			<video
				autoPlay
				muted
				loop
				className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover">
				<source src={blackHole} type="video/webm" />
			</video>
			<HeroContent />
		</div>
	);
};

export default Hero;
