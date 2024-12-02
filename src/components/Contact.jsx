import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
	const handleClick = (e) => {
		e.preventDefault();
	};

	return (
		<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl mb-4 font-bold font-heading text-gray-900 dark:text-gray-100">
					Get in Touch
				</h2>
				<div className="bg-white font-sans dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-md p-8 hover:shadow-xl dark:hover:shadow-light transition-shadow">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<a
								href="mailto:john@example.com"
								className="flex items-center gap-3 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 dark:text-gray-300 transition-colors"
							>
								<Mail className="text-blue-600" />
								manab_debnath@outlook.com
							</a>
							<a
								href="tel:+1234567890"
								className="flex items-center gap-3 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 dark:text-gray-300 transition-colors"
							>
								<Phone className="text-blue-600" />
								(123) 456-7890
							</a>
							<a
								href="https://github.com/johndoe"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 dark:text-gray-300 transition-colors"
							>
								<Github className="text-blue-600" />
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/johndoe"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 dark:text-gray-300 transition-colors"
							>
								<Linkedin className="text-blue-600" />
								LinkedIn
							</a>
						</div>
						<form className="space-y-4" onClick={handleClick}>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors dark:text-white dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 dark:focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors dark:text-white dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 dark:focus:border-transparent"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors dark:text-white dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 dark:focus:border-transparent"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
