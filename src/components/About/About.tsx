import React, { useEffect } from "react";
import CodingProfile from "./CodingProfile";
import Education from "./Education";
import developer from "../../assets/developer.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 500,
			delay: 100,
		});
		AOS.refresh();
	});
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center pt-[58px] relative z-10">
			<div
				className="flex flex-col items-center justify-center px-8 header"
				data-aos="fade-in">
				<h1 className="text-primary text-3xl font-bold mb-2 text-center tracking-wide">
					ABOUT
				</h1>
				<div className="h-[0.30rem] w-10 bg-primary rounded-full mb-1"></div>
			</div>
			<div className="border-t-[6vw] border-l-[100vw] border-t-primaryBg border-l-primary -mb-1"></div>

			<div id="about" className="bg-primary w-full">
				<div className="max-w-6xl mx-auto w-11/12 relative z-10 mb-4">
					<div>
						<div className="bg-[#27283d] rounded-full w-48 h-48 mx-auto flex justify-center items-center">
							<img
								src={developer}
								loading="lazy"
								alt="photo of Jugnu Gupta"
								className="w-48 rounded-full"
								data-aos="fade-up"
							/>
						</div>
						<p
							className="text-center text-white max-w-xl mx-auto pt-4"
							data-aos="fade-up">
							Hi, my name is Jugnu Gupta. I'm a passionate
							full-stack web developer from Delhi, in India. I'm
							currently pursuing a B.Tech in Computer Science and
							Engineering from National Institute of Technology,
							Delhi.
						</p>
					</div>
				</div>
				<div className="max-w-7xl mx-auto flex flex-col xs:flex-col-reverse sm:flex-col-reverse -mb-[90px] w-11/12 relative z-10 overflow-x-hidden overflow-y-visible">
					<CodingProfile />
					<Education />
				</div>
			</div>
			<div className="border-t-[6vw] border-l-[100vw] border-l-primaryBg border-t-primary h-[7vw] min-h-24"></div>
		</section>
	);
};

export default About;
