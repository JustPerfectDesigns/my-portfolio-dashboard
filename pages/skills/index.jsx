import React from "react";
import Footer from "../../components/Footer";

import frontendSkills from "../../data/frontendSkills";
import uiSkills from "../../data/uiSkills";
import otherSkills from "../../data/otherSkills";
import FloatingAnimation from "../../components/FloatingAnimation";
import { motion } from "framer-motion";
import {
	cardVariants,
	staggerContainer,
	textVariant,
	leftVariant,
	rightVariant,
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
					className="w-full py-[7rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem] relative"
				>
					<motion.h2
						variants={textVariant(0.5)}
						className="text-[2.2rem] md:text-3xl lg:text-6xl leading-10 lg:leading-[1.3] dark:text-white text-[#121212] font-semibold text-center"
					>
						My Skills & Softwares
					</motion.h2>

					<motion.p
						variants={textVariant(0.6)}
						className="mt-8 mb-8 text-[1.1rem] lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]"
					>
						Here are the skills and all the softwares I use so far, I keep
						adding up my stacks though.
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<div className="mt-24">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.28 }}
					>
						<motion.h2
							variants={leftVariant(0.3)}
							className="text-center text-2xl dark:text-white text-[#121212] font-medium"
						>
							Front-End Skills
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line w-[60px] h-[1px] bg-green-color-alt dark:bg-green-color mt-4 mx-[auto]"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="w-4/5 mx-[auto] mt-14 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-8"
					>
						{frontendSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col justify-start text-center items-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob grid w-[80px] h-[105px] ease-in dark:bg-black-container bg-[#F6F8FA] rounded-[3rem] place-items-center mb-4">
									<motion.div
										className="text-[2.8rem]"
										whileHover={{ scale: 1.1 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										{skill.icon}
									</motion.div>
								</div>
								<h3 className="skills__name font-serif text-sm dark:text-white text-[#121212]">
									{skill.title}
								</h3>
								<span className="skills__subtitle text-[.6rem] text-[#666666]">
									{skill.desc}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				<div className="mt-20">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.28 }}
					>
						<motion.h2
							variants={leftVariant(0.3)}
							className="text-center text-2xl dark:text-white text-[#121212] font-medium"
						>
							Ui/Ux Tools
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line w-[60px] h-[1px] bg-green-color-alt dark:bg-green-color mt-4 mx-[auto]"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="w-4/5 mx-[auto] mt-14 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-8"
					>
						{uiSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col justify-start text-center items-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob grid w-[80px] h-[105px] ease-in dark:bg-black-container bg-[#F6F8FA] rounded-[3rem] place-items-center mb-4">
									<motion.div
										className="text-[2.8rem]"
										whileHover={{ scale: 1.1 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										{skill.icon}
									</motion.div>
								</div>
								<h3 className="skills__name font-serif text-sm dark:text-white text-[#121212]">
									{skill.title}
								</h3>
								<span className="skills__subtitle text-[.6rem] text-[#666666]">
									{skill.desc}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				<div className="mt-20">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.28 }}
					>
						<motion.h2
							variants={leftVariant(0.3)}
							className="text-center text-2xl dark:text-white text-[#121212] font-medium"
						>
							Others
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line w-[60px] h-[1px] bg-green-color-alt dark:bg-green-color mt-4 mx-[auto]"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="w-4/5 mx-[auto] mt-14 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-y-10 gap-x-8"
					>
						{otherSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col justify-start text-center items-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob grid w-[80px] h-[105px] ease-in dark:bg-black-container bg-[#F6F8FA] rounded-[3rem] place-items-center mb-4">
									<motion.div
										className="text-[2.8rem]"
										whileHover={{ scale: 1.1 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										{skill.icon}
									</motion.div>
								</div>
								<h3 className="skills__name font-serif text-sm dark:text-white text-[#121212]">
									{skill.title}
								</h3>
								<span className="skills__subtitle text-[.6rem] text-[#666666]">
									{skill.desc}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>
				<Footer />
			</div>
		</motion.main>
	);
};

export default index;
