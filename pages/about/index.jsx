import React from "react";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";
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
} from "../../utils/motion";

const index = () => {
	return (
		<motion.main
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="containerr">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className="relative w-full bg-[#F6F8FA] py-[7rem] px-6 dark:bg-black-container lg:px-[6rem]"
				>
					<motion.h2
						variants={textVariant(0.5)}
						className="text-center text-[2.2rem] font-semibold leading-10 text-[#121212] dark:text-white md:text-3xl lg:text-6xl lg:leading-[1.3]"
					>
						About Me
					</motion.h2>

					<motion.p
						variants={textVariant(0.6)}
						className="mt-8 mb-8 text-center text-[1.1rem] font-light leading-[1.6] text-[#121212] dark:text-white lg:text-[1.5rem]"
					>
						Not to bore you at all, just few things about me and how far I've
						come
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.28 }}
					className="mx-[auto] mt-20 sm:max-w-[80%]"
				>
					<motion.p
						variants={textVariant(0.3)}
						className="mb-20 text-gray-600 dark:text-black-text"
					>
						Nice to meet you 🤝
					</motion.p>
					<motion.h3
						variants={textVariant(0.4)}
						className="mb-6 text-3xl font-semibold leading-10 text-[#121212] dark:text-white lg:text-6xl lg:leading-tight"
					>
						I'm Gabriel Samuel Aina, a talented and experienced frontend & MERN
						Stack Developer, UI/UX designer, and graphic designer from Nigeria.
						I am also a tutor and a content creator on YouTube with almost 2k
						subscribers and students.
					</motion.h3>
					<motion.p
						variants={textVariant(0.6)}
						className="text-gray-600 dark:text-black-text lg:text-[18px] lg:leading-10"
					>
						and I'm proud to have worked with top brands like Jumia, PEP, Africa
						Strategy Advisor, and JustPerfect Designs, serving clients from all
						over the world.
						<br />
						<br />
						My passion for creating and building things with my own hands from
						scratch led me to pursue a career in graphic design. Despite
						financial challenges that prevented me from completing my education,
						I was determined to succeed and took on many responsibilities as a
						teenager. I quickly transitioned into UI design 7 years ago, and
						established myself as a top UI designer in Nigeria.
						<br />
						<br />
						I didn't stop there, I wanted to bring my designs to life and
						decided to become a frontend developer. Since over 5 years, I've
						become proficient in working with over 15 JavaScript libraries and
						frameworks. I'm known for my ability to get things done quickly, my
						commitment to writing clean efficient code, and my ability to see
						every project and firm as an opportunity to grow and learn.
						<br />
						<br />
						My passion for design and development is matched only by my
						dedication to my family. I come from a family of five, including my
						mother, two sisters, and a late father. Despite the challenges I've
						faced, I've remained focused on my goals and have become a role
						model for young people in Nigeria and around the world.
					</motion.p>
				</motion.div>
				<Footer />
			</div>
		</motion.main>
	);
};

export default index;
