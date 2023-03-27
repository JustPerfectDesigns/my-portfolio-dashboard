import React from "react";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";
import {motion} from "framer-motion"
import { fadeInUp, stagger, cardVariants, fadeDown, fadeUp, slideIn, staggerContainer, textVariant, leftVariant, rightVariant, fadeIn, opacityVariant } from '../../utils/motion';
import { getCaptions } from "../../utils/ytapi";

const index = ({ captions }) => {
	return (
		<motion.main exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
			<div className="containerr">
				<div className="w-full py-[6rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem]">
					<h2 className="text-2xl md:text-3xl lg:text-6xl leading-[1.6] dark:text-white text-[#121212] font-semibold text-center mt-8">
						My YouTube Channel
					</h2>

					<p className="mt-8 lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]">
						Here are my recent videos on my{" "}
						<a
							href="https//youtube.com/@justperfectdesigns"
							target="_blank"
							className="underline decoration-green-color"
						>
							YouTube Channel
						</a>
					</p>
				</div>

				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="w-full py-[7rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem] relative">
					<motion.h2 variants={textVariant(.5)} className="text-2xl md:text-3xl lg:text-6xl leading-[1.6] dark:text-white text-[#121212] font-semibold text-center">
						My YouTube Channel
					</motion.h2>

					<motion.p variants={textVariant(.6)} className="mt-8 mb-8 lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]">
						Here are my recent videos on my{" "}
							<a
								href="https//youtube.com/@justperfectdesigns"
								target="_blank"
								className="underline decoration-green-color"
							>
								YouTube Channel
							</a>
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<div>{JSON.stringify(captions.items.kind)}</div>

				<Footer />
			</div>
		</motion.main>
	);
};

export async function getStaticProps() {
	const captions = await getCaptions();
	return { props: { captions } };
 }

export default index;
