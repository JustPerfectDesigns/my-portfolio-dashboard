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
				className="text-5xl md:text-7xl font-medium text-center dark:text-white text-[#121212] mb-12"
			>
				Let's talk.
			</motion.h2>
			<motion.div
				variants={textVariant(0.4)}
				className="social__contact flex flex-wrap items-center justify-center gap-6"
			>
				<a href="" className="dark:text-white text-[#121212]">
					LinkedIn
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Dribbble
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Behance
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Instagram
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Twitter
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Email
				</a>
				<a href="" className="dark:text-white text-[#121212]">
					Resume
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Footer;
