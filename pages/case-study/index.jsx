import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";

import { client, urlFor } from "../../lib/client";
import {motion} from "framer-motion"
import { cardVariants, staggerContainer, textVariant, leftVariant, rightVariant } from '../../utils/motion';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const index = ({portfolios}) => {
	const router = useRouter();
	const [mappedPortfolio, setMappedPortfolio] = useState([]);
 
	useEffect(() => {
	  if (portfolios.length) {
		 const imgBuilder = imageUrlBuilder({
			projectId: 'r5dols4o',
			dataset: 'production',
		 });
 
		 setMappedPortfolio(
			portfolios.map(p => {
			  return {
				 ...p,
				 image: imgBuilder.image(p.image),
			  }
			})
		 );
	  } else {
		 setMappedPortfolio([]);
	  }
	}, [portfolios]);

	return (
		<motion.main className="t" exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
			<div className="containerr">
				{/* {console.log(portfolio)} */}
				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="w-full py-[7rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem] relative">
					<motion.h2 variants={textVariant(.5)} className="text-2xl md:text-3xl lg:text-6xl leading-[1.6] dark:text-white text-[#121212] font-semibold text-center">
						All My Projects
					</motion.h2>

					<motion.p variants={textVariant(.6)} className="mt-8 mb-8 lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]">
						Both Fictional and Real Life
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<motion.div className="portfolio mt-20">
				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: .35 }}>
							<motion.h2 variants={leftVariant(.6)} className="text-center text-2xl dark:text-white text-[#121212] font-medium">
								Projects
							</motion.h2>
							<motion.div variants={rightVariant(.6)} className="line w-[60px] h-[1px] bg-green-color-alt dark:bg-green-color mt-4 mx-[auto]"></motion.div>
						</motion.div>
							<motion.div className="portfolio__container mt-20">
								{mappedPortfolio.length ? mappedPortfolio.map((p, index) => (
									<motion.article key={index} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.1 }}>
										<motion.div
											whileHover={{ borderRadius: 300 }}
											className="img h-[200px] md:h-[310px] lg:h-[450px] xl:h-[590px] overflow-hidden cursor-pointer"
											onClick={() => router.push(`/case-study/${p.slug.current}`)}
										>
											<motion.img
												src={p.image}
												alt={p.name}
												className="h-[100%] w-[auto] aspect-auto"
												whileHover={{ scale: 1.1 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 10,
												}}
											/>
										</motion.div>
										<div className="work__content flex flex-wrap lg:flex-no-wrap gap-4 items-start justify-start mt-8 lg:mt-14">
												<div className="work__detail flex justify-start items-center gap-4 min-w-[270px] lg:min-w-[200px]">
													<span className="dark:text-white text-[#121212] text-sm">
														{p.type}
													</span>
													<div className="line w-[40px] h-[1px] bg-[#4F4F54]"></div>
												</div>
												<div className="work__name">
													<h3 className="dark:text-white text-[#121212] text-4xl lg:text-6xl lg:mt-[-6px] font-medium">
														{p.name}
													</h3>
													<p className="desc mt-1 text-[#7E7E86] text-sm leading-[1.6] lg:max-w-[500px] lg:ml-[5px] lg:mt-6">
														{p.description}
													</p>
												</div>
											</div>
											<div className="line w-[100%] h-[1px] bg-[#4F4F54] mt-24 mb-10 mx-[auto]"></div>
									</motion.article>
								)) : <>No Posts Yet</>}
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

export const getServerSideProps = async pageContext => {
	const query = encodeURIComponent('*[ _type == "portfolio" ] | order(_createdAt desc)');
	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then(res => res.json());
 
	if (!result.result || !result.result.length) {
	  return {
		 props: {
			portfolios: [],
		 }
	  }
	} else {
	  return {
		 props: {
			portfolios: result.result,
		 }
	  }
	}
 };

export default index;
