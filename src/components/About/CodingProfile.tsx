import React from "react";
import codeforces from "../../assets/codeforces.webp";
import codechef from "../../assets/codechef.png";
import leetcode from "../../assets/leetcode.png";
import gfg from "../../assets/gfg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const CodingProfile: React.FC = () => {
	React.useEffect(() => {
		AOS.init({
			duration: 500,
		});
	}, []);
	return (
		<div className="">
			<h1 className="mt-4 flex justify-center items-center text-white text-2xl font-bold text-center">
				<span className="pr-2">CODING PROFILES</span>
				<span className="text-3xl pb-1">&lt;/&gt;</span>
			</h1>
			<div className="h-1 rounded-full w-8 bg-white mx-auto mb-6 mt-1"></div>

			<div
				className="bg-white flex justify-between items-center max-w-[260px] mx-auto mb-10 px-4 py-2 rounded-sm"
				data-aos="fade-up">
				<a href="#" target="_blank">
					<img src={codeforces} alt="" className="w-8 h-8" />
				</a>
				<a href="#" target="_blank">
					<img src={codechef} alt="" className="w-8 h-8" />
				</a>
				<a href="#" target="_blank">
					<img src={leetcode} alt="" className="w-8 h-8" />
				</a>
				<a href="#" target="_blank">
					<img src={gfg} alt="" className="w-8 h-8" />
				</a>
			</div>
		</div>
	);
};

export default CodingProfile;
