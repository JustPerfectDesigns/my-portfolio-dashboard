import React from "react";
import Footer from "../../components/Footer";

import frontendSkills from "../../data/frontendSkills";
import backendSkills from "../../data/backendSkills";
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
					className="relative w-full bg-[#F6F8FA] py-[7rem] px-6 dark:bg-black-container lg:px-[6rem]"
				>
					<motion.h2
						variants={textVariant(0.5)}
						className="text-center text-[2.2rem] font-semibold leading-10 text-[#121212] dark:text-white md:text-3xl lg:text-6xl lg:leading-[1.3]"
					>
						My Skills & Softwares
					</motion.h2>

					<motion.p
						variants={textVariant(0.6)}
						className="mt-8 mb-8 text-center text-[1.1rem] font-light leading-[1.6] text-[#121212] dark:text-white lg:text-[1.5rem]"
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
							className="text-center text-2xl font-semibold text-[#121212] dark:text-white"
						>
							Front-End Skills
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line mx-[auto] mt-4 h-[1px] w-[60px] bg-green-color-alt dark:bg-green-color"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="mx-[auto] mt-14 grid w-4/5 grid-cols-3 gap-y-10 gap-x-8 sm:grid-cols-5 lg:grid-cols-6"
					>
						{frontendSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col items-center justify-start text-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob mb-4 grid h-[105px] w-[80px] place-items-center rounded-[3rem] bg-[#F6F8FA] ease-in dark:bg-black-container">
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
								<h3 className="skills__name font-serif text-sm font-semibold text-[#121212] dark:text-white">
									{skill.title}
								</h3>
								<span className="skills__subtitle text-[.6rem] text-[#666666]">
									{skill.desc}
								</span>
							</motion.div>
						))}
					</motion.div>
				</div>

				<div className="mt-24">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.28 }}
					>
						<motion.h2
							variants={leftVariant(0.3)}
							className="text-center text-2xl font-semibold text-[#121212] dark:text-white"
						>
							Back-End Skills
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line mx-[auto] mt-4 h-[1px] w-[60px] bg-green-color-alt dark:bg-green-color"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="mx-[auto] mt-14 grid w-4/5 grid-cols-3 gap-y-10 gap-x-8 sm:grid-cols-5 lg:grid-cols-6"
					>
						{backendSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col items-center justify-start text-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob mb-4 grid h-[105px] w-[80px] place-items-center rounded-[3rem] bg-[#F6F8FA] ease-in dark:bg-black-container">
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
								<h3 className="skills__name font-serif text-sm font-semibold text-[#121212] dark:text-white">
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
							className="text-center text-2xl font-semibold text-[#121212] dark:text-white"
						>
							Ui/Ux Tools
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line mx-[auto] mt-4 h-[1px] w-[60px] bg-green-color-alt dark:bg-green-color"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="mx-[auto] mt-14 grid w-4/5 grid-cols-3 gap-y-10 gap-x-8 sm:grid-cols-5 lg:grid-cols-6"
					>
						{uiSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col items-center justify-start text-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob mb-4 grid h-[105px] w-[80px] place-items-center rounded-[3rem] bg-[#F6F8FA] ease-in dark:bg-black-container">
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
								<h3 className="skills__name font-serif text-sm font-semibold text-[#121212] dark:text-white">
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
							className="text-center text-2xl font-semibold text-[#121212] dark:text-white"
						>
							Others
						</motion.h2>
						<motion.div
							variants={rightVariant(0.3)}
							className="line mx-[auto] mt-4 h-[1px] w-[60px] bg-green-color-alt dark:bg-green-color"
						></motion.div>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.9 }}
						className="mx-[auto] mt-14 grid w-4/5 grid-cols-3 gap-y-10 gap-x-8 sm:grid-cols-5 lg:grid-cols-6"
					>
						{otherSkills.map((skill) => (
							<motion.div
								key={skill.id}
								className="skills__data flex flex-col items-center justify-start text-center"
								variants={cardVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.6 }}
							>
								<div className="skills__blob mb-4 grid h-[105px] w-[80px] place-items-center rounded-[3rem] bg-[#F6F8FA] ease-in dark:bg-black-container">
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
								<h3 className="skills__name font-serif text-sm font-semibold text-[#121212] dark:text-white">
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
