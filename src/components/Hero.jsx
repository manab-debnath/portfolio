import React from "react";
import useTheme from "../contexts/theme";

const Hero = () => {
	const { isDarkMode } = useTheme();

	return (
		<div className="max-w-6xl mx-auto px-4 pt-24 pb-12 sm:py-28 md:py-32">
			<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
				{/* Text Content */}
				<div className="flex-1 text-center md:text-left">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
						Full Stack Developer
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl">
						Building beautiful, responsive, and user-friendly web applications
					</p>
					<a
						href="#contact"
						className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
					>
						Get in touch
					</a>
				</div>

				{/* Image Container */}
				<div className="flex-1 flex justify-center md:justify-end">
					<img
						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
						alt="Developer workspace"
						className="rounded-lg shadow-xl w-full max-w-md object-cover hover:shadow-2xl transition-shadow duration-300"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
