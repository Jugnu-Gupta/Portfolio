import React from "react";
import { PROJECTS } from "../../constants/projects";
import Project from "./Project";

const Projects: React.FC = () => {
	return (
		<section id="projects" className="w-full overflow-hidden pt-16">
			<div className="max-w-6xl mx-auto w-11/12 relative z-10 mb-4">
				<h1 className="mt-4 flex justify-center text-primary text-3xl font-bold text-center">
					<span className="pr-2">Projects</span>
				</h1>
				<div className="h-1 rounded-full w-8 bg-primary mx-auto mb-6 mt-2"></div>

				<div>
					<div>
						{PROJECTS.map((project, index) => {
							return (
								<Project
									key={project.id}
									index={index}
									project={project}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
