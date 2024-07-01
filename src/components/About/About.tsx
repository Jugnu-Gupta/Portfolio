import React, { useEffect } from "react";
import jugnu from "../../assets/jugnu.png";
import CodingProfile from "./CodingProfile";
import Education from "./Education";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 500,
		});
	});
	return (
		<>
			<div className="border-t-[6vw] border-l-[100vw] border-l-primary border-t-white h-[7vw] -mb-1 mt-[8vw]"></div>
			<div className="bg-primary">
				<div className="max-w-6xl mx-auto w-11/12 relative z-10 mb-4">
					<div className="text-primary absolute z-20 left-1/2 -translate-x-1/2 xs:top-[-65px] top-[-11vw]">
						<h1 className="text-2xl font-bold">ABOUT</h1>
						<div className="h-1 rounded-full w-8 bg-primary mx-auto mt-1"></div>
					</div>
					<div className="">
						<img
							src={jugnu}
							alt=""
							className="w-40 mx-auto rounded-full"
							data-aos="fade-up"
						/>
						<p
							className="text-center text-white max-w-xl mx-auto pt-4"
							data-aos="fade-up">
							Hi, I'm Jugnu Gupta. I'm a passionate full-stack web
							developer from Delhi, in India. I'm currently
							pursuing a B.Tech in Computer Science and
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
			<div className="border-t-[6vw] border-l-[100vw] border-l-white border-t-primary h-[7vw] min-h-24"></div>
		</>
	);
};

export default About;
