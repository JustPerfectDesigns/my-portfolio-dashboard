import React from "react";
import { motion } from "framer-motion";
import {
	fadeInUp,
	stagger,
	cardVariants,
	fadeDown,
	fadeUp,
	slideIn,
	staggerContainer,
	textVariant,
	leftVariant,
	rightVariant,
	fadeIn,
	opacityVariant,
} from "../utils/motion";

const Footer = () => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="mt-[17rem] pb-[17rem]"
		>
			<motion.h2
				variants={textVariant(0.3)}
				className="mb-12 text-center text-5xl font-medium text-[#121212] dark:text-white md:text-7xl"
			>
				Let's talk.
			</motion.h2>
			<motion.div
				variants={textVariant(0.4)}
				className="social__contact flex flex-wrap items-center justify-center gap-6"
			>
				<a
					href="https://www.linkedin.com/in/gabriel-aina/"
					target="_blank"
					className="text-[#121212] dark:text-white"
				>
					{"<LinkedIn />"}
				</a>
				{/* <a
					href="https://dribbble.com/justperfectdesigns"
					target="_blank"
					className="text-[#121212] dark:text-white"
				>
					{"<Dribbble />"}
				</a> */}
				<a
					href="https://www.behance.net/justperfectdesigns"
					target="_blank"
					className="text-[#121212] dark:text-white"
				>
					{"<Behance />"}
				</a>
				{/* <a
					href="https://www.instagram.com/justperfect_designs/"
					target="_blank"
					className="text-[#121212] dark:text-white"
				>
					{"<Instagram />"}
				</a> */}
				{/* <a href="" target="_blank" className="text-[#121212] dark:text-white">
					{"<Twitter />"}
				</a> */}
				<a
					href="mailto:gabriel.jpdesigns@gmail.com"
					className="text-[#121212] dark:text-white"
				>
					{"<Email />"}
				</a>
				<a
					href="../resume/GABRIEL-AINA-FRONTEND-BACKEND-UI-RESUME.pdf"
					download={"GABRIEL SAMUEL AINA FRONTEND BACKEND AND UI DESIGN RESUME"}
					className="text-[#121212] dark:text-white"
				>
					{"<Resume />"}
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Footer;
