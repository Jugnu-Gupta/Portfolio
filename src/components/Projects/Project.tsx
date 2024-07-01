import React from "react";
import type { PROJECT } from "../../constants/projects";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
	index: number;
	project: PROJECT;
}

const Project: React.FC<ProjectProps> = ({ project, index }: ProjectProps) => {
	const animate = index % 2 == 1 ? "fade-left" : "fade-right";

	React.useEffect(() => {
		AOS.init({
			duration: 500,
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<div
			className={`flex justify-center items-center my-16 sm:flex-col-reverse xs:flex-col-reverse group
                ${index % 2 == 1 ? "flex-row-reverse" : ""}`}
			data-aos={animate}>
			<div
				className={twMerge(
					"flex flex-col w-2/5 relative z-20 bg-white xs:shadow-lg sm:shadow-lg xs:rounded-lg sm:rounded-lg xs:py-4 sm:py-4 xs:px-6 sm:px-6 xs:w-5/6 sm:w-5/6",
					index % 2 == 1 ? "pr-8" : "pl-8"
				)}>
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
					className="w-full px-4 pt-4 pb-8 rounded-lg shadow-lg bg-white xs:shadow-none sm:shadow-none text-sm text-dark-light xs:px-0 sm:px-0">
					{project.description.map((desc: string, index: number) => {
						return <SwiperSlide key={index}>{desc}</SwiperSlide>;
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
				className={`relative z-10 right-0 p-1 w-1/2 xs:w-5/6 sm:w-5/6 sm:translate-x-0 xs:translate-x-0 sm:group-hover:translate-x-0 xs:group-hover:translate-x-0"
            ${
				index % 2 == 1
					? "translate-x-10 group-hover:translate-x-5 duration-500"
					: "-translate-x-10 group-hover:translate-x-[-20px] duration-500"
			}`}>
				<img
					src={project.websiteImgUrl}
					alt="Project website image"
					className="rounded-lg shadow-lg"
				/>
			</div>
		</div>
	);
};

export default Project;
