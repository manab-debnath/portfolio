import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Menu, X } from "lucide-react";
import useTheme from "../contexts/theme";

const Navbar = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuItems = [
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		menuItems.forEach(({ href }) => {
			const section = document.querySelector(href);
			if (section) observer.observe(section);
		});

		return () => {
			menuItems.forEach(({ href }) => {
				const section = document.querySelector(href);
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	const getLinkClasses = (href) => {
		const baseClasses = "transition-colors duration-300";
		const isActive = activeSection === href.slice(1);

		return `${baseClasses} ${
			isActive
				? "text-blue-600 dark:text-blue-400 font-medium"
				: "text-gray-600 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
		}`;
	};

	return (
		<nav className="bg-white dark:bg-gray-900 w-full fixed z-50 font-heading">
			<div className="max-w-6xl mx-auto px-4 py-6">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold font-heading text-gray-900 dark:text-gray-100">
						Manab Debnath
					</h1>

					<div className="flex items-center">
						<DarkModeSwitch
							checked={isDarkMode}
							onChange={toggleDarkMode}
							sunColor="black"
							moonColor="white"
							className="mr-4"
						/>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-6">
							{menuItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className={getLinkClasses(item.href)}
								>
									{item.label}
								</a>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={toggleMenu}
							className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6 text-gray-600 dark:text-gray-100" />
							) : (
								<Menu className="w-6 h-6 text-gray-600 dark:text-gray-100" />
							)}
						</button>
					</div>
				</div>

				{/* Overlay - Moved before sidebar and lowered z-index */}
				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
						onClick={() => setIsMenuOpen(false)}
						style={{ marginTop: "5rem" }}
					/>
				)}

				{/* Mobile Sidebar - Increased z-index */}
				<div
					className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					} md:hidden shadow-lg z-50`}
					style={{ marginTop: "5rem" }}
				>
					<div className="flex flex-col space-y-4 p-6">
						{menuItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
								className={`${getLinkClasses(
									item.href
								)} py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
