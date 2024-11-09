import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/theme.js";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode ? JSON.parse(savedMode) : false;
	});

	const toggleDarkMode = (isDarkMode) => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("darkMode", newMode);
			return newMode;
		});
	};

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	return (
		<ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
			<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
				<header className="bg-white dark:bg-gray-900 shadow-sm">
					<Navbar />
				</header>

				<section className="bg-white dark:bg-gray-900">
					<Hero />
				</section>

				<About />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
