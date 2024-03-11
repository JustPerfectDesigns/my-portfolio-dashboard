"use client";

import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Function to check if user has scrolled enough to show the button
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		// Attach the function to scroll event
		window.addEventListener("scroll", toggleVisibility);

		// Clean up function to remove event listener
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-4 right-4 rounded-md bg-gray-900/80 py-3 px-3 text-white transition-all duration-300 ease-in-out hover:bg-green-color-alt ${
				isVisible ? "block" : "hidden"
			}`}
		>
			<BiChevronUp className="h-6 w-6 md:h-7 md:w-7" />
		</button>
	);
};

export default BackToTopButton;
