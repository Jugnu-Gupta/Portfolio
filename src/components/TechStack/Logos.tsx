import React from "react";
import c from "../../assets/c.svg";
import cpp from "../../assets/cpp.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.webp";
import tailwind from "../../assets/tailwind.png";
import nodejs from "../../assets/nodejs.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import vscode from "../../assets/vscode.png";
import figma from "../../assets/figma.png";

interface LogosProps {
	activeTab: string;
}

const Logos: React.FC<LogosProps> = ({ activeTab }: LogosProps) => {
	return (
		<>
			{activeTab === "language" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={c}
							alt="c"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>C</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={cpp}
							alt="cpp"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Cpp</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={javascript}
							alt="javascript"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Javascript</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={typescript}
							alt="typescript"
							className="w-[72px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Typescript</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "frontend" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={html}
							alt="html"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>HTML</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={css}
							alt="css"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>CSS</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={react}
							alt="react"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>React</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={redux}
							alt="redux"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Redux</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={tailwind}
							alt="tailwind"
							className="w-16 xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Tailwind</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "backend" && (
				<div
					className="relative pt-28 flex items-center justify-evenly"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={nodejs}
							alt="nodejs"
							className="w-[88px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-5 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Nodejs</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={express}
							alt="express"
							className="w-[72px] py-1 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Express</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "database" && (
				<div
					className="relative pt-28 flex items-center justify-evenly"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={mongodb}
							alt="mongodb"
							className="w-14 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-7 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Mongodb</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={mysql}
							alt="mysql"
							className="w-[96px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Mysql</span>
						</div>
					</div>
				</div>
			)}
			{activeTab === "tools" && (
				<div
					className="relative pt-28 flex items-center justify-evenly xs:gap-2 xs:justify-between"
					data-aos="zoom-in">
					<div className="relative animate-floating group">
						<img
							src={git}
							alt="git"
							className="w-[72px] xs:w-[60px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Git</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={github}
							alt="github"
							className="w-[72px] xs:w-[60px] hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Github</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={vscode}
							alt="vscode"
							className="w-16 xs:w-14 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-8 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>VsCode</span>
						</div>
					</div>
					<div className="relative animate-floating group">
						<img
							src={figma}
							alt="figma"
							className="w-[72px] xs:w-16 hover:scale-110 transition-all duration-500"
						/>
						<div
							className="absolute z-20 -top-9 left-1/2 -translate-x-1/2 bg-white rounded-md 
							shadow-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div
								className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-0 w-0 
								border-x-[8px] border-x-transparent border-t-[8px] border-t-white"></div>
							<span>Figma</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Logos;
