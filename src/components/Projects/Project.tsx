import React from "react";
import type { PROJECT } from "../../constants/Constant";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

interface ProjectProps {
	index: number;
	project: PROJECT;
}

const Project: React.FC<ProjectProps> = ({ project, index }: ProjectProps) => {
	return (
		<div
			className={`flex justify-between items-center my-16 sm:flex-col-reverse xs:flex-col-reverse group
                ${index % 2 == 1 ? "flex-row-reverse" : ""}`}>
			<div className="flex flex-col max-w-96 xs:w-11/12 relative z-20 bg-white xs:shadow-lg sm:shadow-lg xs:p-4 sm:p-4">
				<div
					className={`flex items-center  gap-4 xs:justify-center sm:justify-center
                ${index % 2 == 1 ? "justify-end" : "justify-start"}`}>
					<img src={project.logoUrl} alt="" className="w-12" />
					<h1 className="text-lg font-semibold text-dark">
						{project.name}
					</h1>
				</div>
				<Swiper
					spaceBetween={30}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className="w-full px-4 pt-4 pb-8 rounded-lg shadow-lg bg-white xs:shadow-none sm:shadow-none text-sm text-dark-light">
					{project.description.map((desc: string, index: number) => {
						return (
							<SwiperSlide
								key={index}
								className="xs:w-5/6 sm:w-5/6">
								{desc}
							</SwiperSlide>
						);
					})}
				</Swiper>

				<div className="flex gap-4 text-dark-light pt-3 pb-2">
					{project.technologies.map((tech: string, index: number) => {
						return (
							<p
								key={index}
								className="text-xs font-semibold hover:text-primary hover:scale-110">
								{tech}
							</p>
						);
					})}
				</div>
				<div className="flex gap-4 text-dark-light">
					<a href={project.githubUrl} target="_blank">
						<FiGithub className="hover:text-primary hover:scale-110" />
					</a>
					<a href={project.websiteUrl} target="_blank">
						<FaExternalLinkAlt className="hover:text-primary hover:scale-110" />
					</a>
				</div>
			</div>
			<div
				className={`relative z-10 right-0 w-1/2 xs:w-5/6 sm:w-[80%] sm:translate-x-0 xs:translate-x-0 sm:group-hover:translate-x-0 xs:group-hover:translate-x-0"
            ${
				index % 2 == 1
					? "translate-x-10 group-hover:translate-x-5 duration-500"
					: "-translate-x-10 group-hover:translate-x-[-20px] duration-500"
			}`}>
				<img
					src={project.websiteImgUrl}
					alt=""
					className="rounded-lg shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Project;
