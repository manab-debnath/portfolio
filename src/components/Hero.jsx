import React from "react";
// import useTheme from "../contexts/theme";

const Hero = () => {
	// const { isDarkMode, toggleDarkMode } = useTheme();

	return (
		<>
			<div className="max-w-6xl mx-auto px-4 py-20">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="flex-1">
						<h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 font-heading">
							Full Stack Developer
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-100 mb-8 font-sans">
							Building beautiful, responsive, and user-friendly web applications
						</p>
						<a
							href="#contact"
							className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-heading"
						>
							Get in touch
						</a>
					</div>
					<div className="flex-1">
						<img
							src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
							alt="Developer workspace"
							className="rounded-lg shadow-xl"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
