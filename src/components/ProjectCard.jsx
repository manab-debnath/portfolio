import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
	return (
		<div className="bg-white dark:bg-gray-900 rounded-xl shadow-light dark:shadow-dark overflow-hidden hover:shadow-xl dark:hover:shadow-darkHover transition-shadow">
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
					{project.title}
				</h3>
				<p className="text-gray-600 dark:text-gray-100 mb-4">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech, i) => (
						<span
							key={i}
							className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
						>
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-4">
					<a
						href={project.demo}
						className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
					>
						<ExternalLink size={16} /> Live Demo
					</a>
					<a
						href={project.code}
						className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
					>
						<Github size={16} /> View Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
