import React from "react";
import useTheme from "../contexts/theme";

const About = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();

	return (
		<section id="about" className="py-20 dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 dark:bg-gray-900">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
					About Me
				</h2>
				<div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-dark p-8">
					<p className="text-gray-600 dark:text-gray-100 leading-relaxed mb-6">
						I'm a passionate Full Stack Developer with 5+ years of experience in
						building web applications. I specialize in React, Node.js, and
						modern web technologies, focusing on creating efficient, scalable,
						and maintainable solutions. My approach combines technical expertise
						with a keen eye for design and user experience.
					</p>
					<p className="text-gray-600 dark:text-gray-100 leading-relaxed">
						When I'm not coding, you can find me contributing to open-source
						projects, writing technical articles, or exploring new technologies
						to stay at the forefront of web development.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
