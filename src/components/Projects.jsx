import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

const Projects = () => {
	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-8">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
