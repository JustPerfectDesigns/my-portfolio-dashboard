import React from "react";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";
import {motion} from "framer-motion"
import { fadeInUp, stagger, cardVariants, fadeDown, fadeUp, slideIn, staggerContainer, textVariant, leftVariant, rightVariant, fadeIn, opacityVariant } from '../../utils/motion';

const index = () => {
	return (
		<motion.main exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
			<div className="containerr">
				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="w-full py-[7rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem] relative">
					<motion.h2 variants={textVariant(.5)} className="text-[2.2rem] md:text-3xl lg:text-6xl leading-10 lg:leading-[1.3] dark:text-white text-[#121212] font-semibold text-center">
						About Me
					</motion.h2>

					<motion.p variants={textVariant(.6)} className="mt-8 mb-8 text-[1.1rem] lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]">
						Just few things about me and how far I've come
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }} className="mt-20 sm:max-w-[80%] mx-[auto]">
					<motion.p variants={textVariant(.3)} className="text-gray-600 dark:text-black-text mb-20">Nice to meet you 🤝</motion.p>
					<motion.h3 variants={textVariant(.4)} className="text-3xl lg:text-6xl text-[#121212] dark:text-white font-semibold mb-6 leading-10 lg:leading-tight">
						I'm Gabriel Samuel Aina, a talented and experienced frontend developer, graphic designer, and UI/UX designer from Nigeria. With over a decade of experience in the graphic design industry,
					</motion.h3>
					<motion.p variants={textVariant(.6)} className="text-gray-600 dark:text-black-text lg:text-[18px] lg:leading-10">
					and I'm proud to have worked with top brands like Jumia, serving clients from all over the world.
						<br />
						<br />
						My passion for creating and building things with my own hands from scratch led me to pursue a career in graphic design. Despite financial challenges that prevented me from completing my education, I was determined to succeed and took on many responsibilities as a teenager. I quickly transitioned into UI design and established myself as a top UI designer in Nigeria.
						<br />
						<br />
						I didn't stop there, I wanted to bring my designs to life and decided to become a frontend developer. Since then, I've become proficient in working with over 15 JavaScript libraries and frameworks. I'm known for my ability to get things done quickly and my commitment to writing clean, efficient code.
						<br />
						<br />
						My passion for design and development is matched only by my dedication to my family. I come from a family of five, including my mother, two sisters, and a late father. Despite the challenges I've faced, I've remained focused on my goals and have become a role model for young people in Nigeria and around the world.
					</motion.p>
				</motion.div>
				<Footer />
			</div>
		</motion.main>
	);
};

export default index;
