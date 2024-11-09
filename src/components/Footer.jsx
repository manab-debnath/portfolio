import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white border-t border-gray-200 dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 py-8">
				<p className="text-center text-gray-600">
					© {new Date().getFullYear()} Manab Debnath. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
