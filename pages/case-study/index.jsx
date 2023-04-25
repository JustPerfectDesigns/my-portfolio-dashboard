import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";

import { client, urlFor } from "../../lib/client";
import { motion } from "framer-motion";
import {
	cardVariants,
	staggerContainer,
	textVariant,
	leftVariant,
	rightVariant,
} from "../../utils/motion";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const index = ({ portfolios }) => {
	const router = useRouter();
	const [mappedPortfolio, setMappedPortfolio] = useState([]);

	useEffect(() => {
		if (portfolios.length) {
			const imgBuilder = imageUrlBuilder({
				projectId: "r5dols4o",
				dataset: "production",
			});

			setMappedPortfolio(
				portfolios.map((p) => {
					return {
						...p,
						image: imgBuilder.image(p.image),
					};
				})
			);
		} else {
			setMappedPortfolio([]);
		}
	}, [portfolios]);

	return (
		<motion.main
			className="t"
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className="containerr">
				{/* {console.log(portfolio)} */}
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
						All My Projects
					</motion.h2>

					<motion.p
						variants={textVariant(0.6)}
						className="mt-8 mb-8 text-center text-[1.1rem] font-light leading-[1.6] text-[#121212] dark:text-white lg:text-[1.5rem]"
					>
						Both Fictional and Real Life
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<motion.div className="portfolio mt-20">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.35 }}
					>
						<motion.h2
							variants={leftVariant(0.6)}
							className="text-center text-2xl font-semibold text-[#121212] dark:text-white"
						>
							Projects
						</motion.h2>
						<motion.div
							variants={rightVariant(0.6)}
							className="line mx-[auto] mt-4 h-[1px] w-[60px] bg-green-color-alt dark:bg-green-color"
						></motion.div>
					</motion.div>
					<motion.div className="portfolio__container mt-20">
						{mappedPortfolio.length ? (
							mappedPortfolio.map((p, index) => (
								<motion.article
									key={index}
									variants={cardVariants}
									initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.1 }}
								>
									<motion.div
										whileHover={{ borderRadius: 300 }}
										className="img h-[200px] cursor-pointer overflow-hidden md:h-[310px] lg:h-[450px] xl:h-[590px]"
										onClick={() => router.push(`/case-study/${p.slug.current}`)}
									>
										<motion.img
											src={p.image}
											alt={p.name}
											className="aspect-auto h-[100%] w-[100%] bg-contain object-cover"
											whileHover={{ scale: 1.1 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 10,
											}}
										/>
									</motion.div>
									<div className="work__content lg:flex-no-wrap mt-8 flex flex-wrap items-start justify-start gap-4 lg:mt-14">
										<div className="work__detail flex min-w-[270px] items-center justify-start gap-4 lg:min-w-[200px]">
											<span className="text-sm text-[#121212] dark:text-white">
												{p.type}
											</span>
											<div className="line h-[1px] w-[40px] bg-[#4F4F54]"></div>
										</div>
										<div className="work__name">
											<h3 className="text-3xl font-semibold text-[#121212] dark:text-white md:text-4xl lg:mt-[-6px] lg:text-6xl">
												{p.name}
											</h3>
											<p className="desc mt-1 text-sm leading-[1.6] text-[#7E7E86] lg:ml-[5px] lg:mt-6 lg:max-w-[500px]">
												{p.description}
											</p>
										</div>
									</div>
									<div className="line mx-[auto] mt-24 mb-10 h-[1px] w-[100%] bg-[#4F4F54]"></div>
								</motion.article>
							))
						) : (
							<>No Posts Yet</>
						)}
					</motion.div>
				</motion.div>
				<Footer />
			</div>
		</motion.main>
	);
};

// This code for getServerSideProps sort the portfolio items ramdomly anytime you refresh or reload the page
// export const getServerSideProps = async () => {
// 	const query = '*[_type == "portfolio"] | order(_createdAt desc)';
// 	const portfolio = await client.fetch(query);

// 	return {
// 		props: { portfolio },
// 	};
// };

// // This code for getServerSideProps sort the portfolio items ramdomly anytime you refresh or reload the page
// export const getServerSideProps = async () => {
// 	const query = '*[_type == "portfolio"] | order(_createdAt desc)';
// 	const portfolio = await client.fetch(query);

// 	// custom comparison function to shuffle the order of elements randomly
// 	const shuffleCompareFn = () => Math.random() - 0.5;

// 	// shuffle the order of elements randomly
// 	portfolio.sort(shuffleCompareFn);

// 	return {
// 		props: { portfolio },
// 	};
// };

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent(
		'*[ _type == "portfolio" ] | order(_createdAt desc)'
	);
	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());

	if (!result.result || !result.result.length) {
		return {
			props: {
				portfolios: [],
			},
		};
	} else {
		return {
			props: {
				portfolios: result.result,
			},
		};
	}
};

export default index;
