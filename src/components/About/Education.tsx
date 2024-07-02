import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import OPS from "../../assets/OPS.png";
import NITD from "../../assets/NITDelhi.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Education: React.FC = () => {
	React.useEffect(() => {
		AOS.init({
			duration: 500,
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<div>
			<h1 className="mt-4 flex justify-center items-center text-white text-2xl font-bold text-center">
				<span className="pr-2">EDUCATION</span>
				<RiGraduationCapFill />
			</h1>
			<div className="h-1 rounded-full w-8 bg-white mx-auto mb-6 mt-1"></div>

			<div className="flex gap-6 xs:flex-wrap sm:flex-wrap justify-center relative mb-4">
				<div
					className="flex gap-2 items-center bg-white w-[345px] pl-3 pr-4 py-3 rounded-lg h-fit shadow-lg"
					data-aos="fade-right">
					<img
						src={NITD}
						loading="lazy"
						alt="NIT Delhi Logo"
						className="bg-white p-1 rounded-full w-16 h-16"
					/>
					<div className=" text-dark-light">
						<h1 className="text-sm font-semibold mb-[2px]">
							National Institute of Technology, Delhi
						</h1>
						<p className="text-xs mb-2">
							B.Tech, Computer Secience and Engineering
						</p>
						<p className="text-xs text-right">2022-Present</p>
					</div>
				</div>

				<div
					className="flex gap-2 items-center bg-white w-[345px] pl-3 pr-4 py-3 rounded-lg mt-6 sm:mt-2 xs:mt-2 shadow-lg"
					data-aos="fade-left">
					<img
						src={OPS}
						loading="lazy"
						alt="NIT Delhi Logo"
						className="bg-white p-1 rounded-full w-16 h-16"
					/>
					<div className=" text-dark-light">
						<h1 className="text-sm font-semibold mb-[2px]">
							Oxford Public School, New Delhi
						</h1>
						<p className="text-xs mb-2">
							Intermediate, Science Stream
						</p>
						<p className="text-xs text-right">2020-2022</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
