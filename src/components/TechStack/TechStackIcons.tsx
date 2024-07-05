import React from "react";
import techStackIcons from "../../assets/techStacks/index";

interface LogosProps {
	activeTab: string;
}

const TechStackIcons: React.FC<LogosProps> = ({ activeTab }: LogosProps) => {
	return (
		<>
			{activeTab === "language" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between text-dark-lighter"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.cIcon}
							loading="lazy"
							alt="c"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>C</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.cppIcon}
							loading="lazy"
							alt="cpp"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Cpp</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.javascriptIcon}
							loading="lazy"
							alt="javascript"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Javascript</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.typescriptIcon}
							loading="lazy"
							alt="typescript"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Typescript</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "frontend" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between text-dark-lighter"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.htmlIcon}
							loading="lazy"
							alt="html"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>HTML</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.cssIcon}
							loading="lazy"
							alt="css"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>CSS</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.reactIcon}
							loading="lazy"
							alt="react"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>React</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.reduxIcon}
							loading="lazy"
							alt="redux"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Redux</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.tailwindIcon}
							loading="lazy"
							alt="tailwind"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Tailwind</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "backend" && (
				<div
					className="relative pt-28 flex items-center justify-evenly text-dark-lighter"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.nodejsIcon}
							loading="lazy"
							alt="nodejs"
							className="w-[88px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Nodejs</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.expressIcon}
							loading="lazy"
							alt="express"
							className="w-28 py-1 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Express</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "database" && (
				<div
					className="relative pt-28 flex items-center justify-evenly text-dark-lighter"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.mongodbIcon}
							loading="lazy"
							alt="mongodb"
							className="w-14 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Mongodb</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.mysqlIcon}
							loading="lazy"
							alt="mysql"
							className="w-[96px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Mysql</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "tools" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between text-dark-lighter"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.gitIcon}
							loading="lazy"
							alt="git"
							className="w-[72px] xs:w-[60px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Git</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.githubIcon}
							loading="lazy"
							alt="github"
							className="w-[72px] xs:w-[60px] hover:scale-110 transition-all duration-500 bg-white rounded-full"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Github</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.vscodeIcon}
							loading="lazy"
							alt="vscode"
							className="w-16 xs:w-14 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>VsCode</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={techStackIcons.figmaIcon}
							loading="lazy"
							alt="figma"
							className="w-[72px] xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-secondaryBg rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-secondaryBg"></div>
							<span>Figma</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TechStackIcons;
