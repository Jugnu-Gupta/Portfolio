import React, { useState } from "react";
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
			<div className="max-w-6xl mx-auto w-11/12 relative z-10 pb-10">
				<h1 className="mt-8 flex justify-center text-primary text-2xl font-bold text-center">
					<span className="pr-2">TECH STACK</span>
				</h1>
				<div className="h-1 rounded-full w-8 bg-primary mx-auto mb-6 mt-2"></div>

				<div className="mb-32">
					<nav className="mx-auto text-sm" data-aos="zoom-in">
						<ol className="text-dark flex xs:flex-wrap justify-center gap-6 xs:gap-3">
							<li
								className={`flex items-center cursor-pointer pb-[2px] font-semibold group hover:text-primary 
								${activeTab === "language" ? "text-primary" : "text-dark"}`}
								onClick={() => setActiveTab("language")}>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "language" ? "opacity-100" : "opacity-0"}`}>
									&lt;
								</span>
								<span>LANGUAGE</span>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "language" ? "opacity-100" : "opacity-0"}`}>
									/&gt;
								</span>
							</li>

							<li
								className={`flex items-center cursor-pointer pb-[2px] font-semibold group hover:text-primary 
								${activeTab === "frontend" ? "text-primary" : "text-dark"}`}
								onClick={() => setActiveTab("frontend")}>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "frontend" ? "opacity-100" : "opacity-0"}`}>
									&lt;
								</span>
								<span>FRONTEND</span>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "frontend" ? "opacity-100" : "opacity-0"}`}>
									/&gt;
								</span>
							</li>

							<li
								className={`flex items-center cursor-pointer pb-[2px] font-semibold group hover:text-primary 
								${activeTab === "backend" ? "text-primary" : "text-dark"}`}
								onClick={() => setActiveTab("backend")}>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "backend" ? "opacity-100" : "opacity-0"}`}>
									&lt;
								</span>
								<span>BACKEND</span>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "backend" ? "opacity-100" : "opacity-0"}`}>
									/&gt;
								</span>
							</li>

							<li
								className={`flex items-center cursor-pointer pb-[2px] font-semibold group hover:text-primary 
								${activeTab === "database" ? "text-primary" : "text-dark"}`}
								onClick={() => setActiveTab("database")}>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "database" ? "opacity-100" : "opacity-0"}`}>
									&lt;
								</span>
								<span>DATABASE</span>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "database" ? "opacity-100" : "opacity-0"}`}>
									/&gt;
								</span>
							</li>

							<li
								className={`flex items-center cursor-pointer pb-[2px] font-semibold group hover:text-primary 
								${activeTab === "tools" ? "text-primary" : "text-dark"}`}
								onClick={() => setActiveTab("tools")}>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "tools" ? "opacity-100" : "opacity-0"}`}>
									&lt;
								</span>
								<span>TOOLS</span>
								<span
									className={`group-hover:opacity-100 
										${activeTab === "tools" ? "opacity-100" : "opacity-0"}`}>
									/&gt;
								</span>
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
							className="absolute top-52 left-10 text-lg"
							data-aos="fade-right">
							Tailwind
						</h3>
						<h3
							className="absolute top-[272px] left-1/4 text-lg"
							data-aos="fade-up">
							GITHUB
						</h3>
						<h3
							className="absolute top-60 left-1/2 -ml-8 text-lg"
							data-aos="fade-up">
							EXPRESS
						</h3>
						<h3
							className="absolute top-[272px] left-2/3 text-lg"
							data-aos="fade-up">
							Figma
						</h3>
						<h3
							className="absolute top-52 right-8 text-xl"
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
