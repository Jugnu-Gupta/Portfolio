import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Logos from "./Logos";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("language");
	React.useEffect(() => {
		AOS.init({
			duration: 500,
		});
	}, []);

	return (
		<div className="w-full overflow-hidden">
			<div className="max-w-6xl mx-auto w-11/12 relative z-10 mb-4">
				<h1 className="mt-4 flex justify-center text-primary text-3xl font-bold text-center">
					<span className="pr-2">Tech Stack</span>
				</h1>
				<div className="h-1 rounded-full w-8 bg-primary mx-auto mb-6 mt-2"></div>

				<div className="mb-32">
					<nav className="mx-auto text-sm" data-aos="zoom-in">
						<ol className="text-dark flex xs:flex-wrap justify-center gap-6 xs:gap-3">
							<li
								className={`flex items-center cursor-pointer hover:text-primary 
								${activeTab === "language" ? "text-primary" : ""}`}
								onClick={() => setActiveTab("language")}>
								<FaLessThan className="text-xs" />
								<span className="pb-[2px] font-bold">
									LANGUAGE/
								</span>
								<FaGreaterThan className="text-xs" />
							</li>

							<li
								className={`flex items-center cursor-pointer hover:text-primary 
								${activeTab === "frontend" ? "text-primary" : ""}`}
								onClick={() => setActiveTab("frontend")}>
								<FaLessThan className="text-xs" />
								<span className="pb-[2px] font-bold">
									FRONTEND/
								</span>
								<FaGreaterThan className="text-xs" />
							</li>

							<li
								className={`flex items-center cursor-pointer hover:text-primary 
								${activeTab === "backend" ? "text-primary" : ""}`}
								onClick={() => setActiveTab("backend")}>
								<FaLessThan className="text-xs" />
								<span className="pb-[2px] font-bold">
									BACKEND/
								</span>
								<FaGreaterThan className="text-xs" />
							</li>

							<li
								className={`flex items-center cursor-pointer hover:text-primary 
								${activeTab === "database" ? "text-primary" : ""}`}
								onClick={() => setActiveTab("database")}>
								<FaLessThan className="text-xs" />
								<span className="pb-[2px] font-bold">
									DATABASE/
								</span>
								<FaGreaterThan className="text-xs" />
							</li>

							<li
								className={`flex items-center cursor-pointer hover:text-primary 
								${activeTab === "tools" ? "text-primary" : ""}`}
								onClick={() => setActiveTab("tools")}>
								<FaLessThan className="text-xs" />
								<span className="pb-[2px] font-bold">
									TOOLS/
								</span>
								<FaGreaterThan className="text-xs" />
							</li>
						</ol>
					</nav>

					{/* floating tools, frameworks, database */}
					<div className="relative mt-20 text-dark-lighter font-semibold">
						<h3
							className="absolute top-0 left-12 text-xl"
							data-aos="fade-right">
							Redux
						</h3>
						<h3
							className="absolute top-8 left-1/3 text-lg"
							data-aos="fade-up">
							CSS3
						</h3>
						<h3
							className="absolute top-8 left-2/3 text-lg"
							data-aos="fade-up">
							Git
						</h3>
						<h3
							className="absolute top-0 right-10 text-xl"
							data-aos="fade-left">
							HTML5
						</h3>
						<h3
							className="absolute top-56 left-10 text-lg"
							data-aos="fade-right">
							Tailwind
						</h3>
						<h3
							className="absolute top-72 left-1/4 text-lg"
							data-aos="fade-up">
							GITHUB
						</h3>
						<h3
							className="absolute top-64 left-1/2 -ml-8 text-lg"
							data-aos="fade-up">
							EXPRESS
						</h3>
						<h3
							className="absolute top-72 left-2/3 text-lg"
							data-aos="fade-up">
							Figma
						</h3>
						<h3
							className="absolute top-56 right-8 text-xl"
							data-aos="fade-left">
							MongoDB
						</h3>
					</div>

					<Logos activeTab={activeTab} />

					{/* {activeTab === "language" && <div />} */}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
