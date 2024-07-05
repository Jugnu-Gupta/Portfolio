import React from "react";
import codeforces from "../../assets/codingProfiles/codeforces.webp";
import codechef from "../../assets/codingProfiles/codechef.png";
import leetcode from "../../assets/codingProfiles/leetcode.png";
import gfg from "../../assets/codingProfiles/gfg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const CodingProfile: React.FC = () => {
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
				<span className="pr-2">CODING PROFILES</span>
				<span className="text-3xl pb-1">&lt;/&gt;</span>
			</h1>
			<div className="h-1 rounded-full w-8 bg-white mx-auto mb-6 mt-1"></div>

			<div
				className="bg-secondaryBg text-nowrap text-dark-lighter text-xs flex justify-between items-center max-w-[260px] mx-auto mb-10 px-4 py-2 rounded-sm"
				data-aos="fade-up">
				<a
					href="https://codeforces.com/profile/jugnugupta33/"
					target="_blank"
					className="group">
					<img
						src={codeforces}
						loading="lazy"
						alt="codeforces"
						className="w-8 h-8 group-hover:scale-110 duration-300"
					/>
					<div
						className="absolute z-20 -bottom-9 -left-1/3 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div
							className="absolute left-1/2 -top-2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-b-[8px] border-b-secondaryBg"></div>
						<span>Codeforces: Specialist, Max Rating: 1530</span>
					</div>
				</a>
				<a
					href="https://www.codechef.com/users/jugnugupta33/"
					target="_blank"
					className="group">
					<img
						src={codechef}
						loading="lazy"
						alt="codechef"
						className="w-8 h-8 group-hover:scale-110 duration-300"
					/>
					<div
						className="absolute z-20 -bottom-9 -left-2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div
							className="absolute left-1/2 -top-2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-b-[8px] border-b-secondaryBg"></div>
						<span>Codechef: 4 Star, Max Rating: 1829</span>
					</div>
				</a>
				<a
					href="https://leetcode.com/u/jugnugupta33/"
					target="_blank"
					className="group">
					<img
						src={leetcode}
						loading="lazy"
						alt="leetcode"
						className="w-8 h-8 group-hover:scale-110 duration-300"
					/>
					<div
						className="absolute z-20 -bottom-9 -right-2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div
							className="absolute left-1/2 -top-2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-b-[8px] border-b-secondaryBg"></div>
						<span>Leetcode: Knight, Max Rating: 2045</span>
					</div>
				</a>
				<a
					href="https://www.geeksforgeeks.org/user/jugnugupta33/"
					target="_blank"
					className="group">
					<img
						src={gfg}
						loading="lazy"
						alt="gfg"
						className="w-8 h-8 group-hover:scale-110 duration-300"
					/>
					<div
						className="absolute z-20 -bottom-9 -right-1/3 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div
							className="absolute left-1/2 -top-2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-b-[8px] border-b-secondaryBg"></div>
						<span>GeeksForGeeks: Solved 200+ Problems</span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default CodingProfile;
