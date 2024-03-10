"use client";

import React, { useState } from "react";
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
import Modal from "./Modal";
import Link from "next/link";

const Footer = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

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
				<button
					onClick={openModal}
					className="border-none p-0 text-[#121212] outline-none dark:text-white"
				>
					{"<Resume />"}
				</button>
				<Modal isOpen={modalOpen} onClose={closeModal}>
					<div className="grid items-center justify-center gap-3 md:ml-60 md:grid-cols-2">
						<Link
							href="../resume/GABRIEL-SAMUEL-AINA-UI-RESUME.pdf"
							className="bg-green-color-alt py-5 px-8 font-semibold text-white dark:bg-green-color"
							download={"GABRIEL SAMUEL AINA UI DESIGN RESUME"}
							target="_blank"
						>
							Download UI CV
						</Link>
						<Link
							href="../resume/GABRIEL-SAMUEL-AINA-MERN-STACK-RESUME.pdf"
							className="bg-green-color-alt py-5 px-8 font-semibold text-white dark:bg-green-color"
							download={"GABRIEL SAMUEL AINA FRONTEND AND BACKEND RESUME"}
							target="_blank"
						>
							Download MERN CV
						</Link>
					</div>
				</Modal>
			</motion.div>
		</motion.div>
	);
};

export default Footer;
