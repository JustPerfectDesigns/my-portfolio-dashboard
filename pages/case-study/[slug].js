import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import { client, urlFor } from "../../lib/client";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
	fadeDownVariant,
	leftVariant,
	rightVariant,
	staggerContainer,
	textVariant,
} from "../../utils/motion";

import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { NumberCircleThree } from "phosphor-react";
import { useRouter } from "next/router";

export default function CaseStudy({
	image,
	name,
	role,
	year,
	niche,
	link,
	overviewSubTitle,
	overviewTitle,
	overviewDesc,
	overviewImg01,
	overviewImg02,
	overviewImg03,
	challengeSubTitle,
	challengeTitle,
	challengeDesc,
	challengeImg01,
	solutionSubTitle,
	solutionTitle,
	solutionDesc,
	solutionImg01,
	solutionImg02,
	impactSubTitle,
	impactTitle,
	impactDesc,
}) {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		const imgBuilder = imageUrlBuilder({
			projectId: "r5dols4o",
			dataset: "production",
		});

		setImageUrl(imgBuilder.image(image));
	}, [image]);

	// function bounceEase(x) {
	//   const n1 = 7.5625;
	//   const d1 = 2.75;

	//   if (x < 1 / d1) {
	//     return n1 * x * x;
	//   } else if (x < 2 / d1) {
	//     return n1 * (x -= 1.5 / d1) * x + 0.75;
	//   } else if (x < 2.5 / d1) {
	//     return n1 * (x -= 2.25 / d1) * x + 0.9375;
	//   } else {
	//     return n1 * (x -= 2.625 / d1) * x + 0.984375;
	//   }
	// }

	function easeOutBounce(x) {
		const n1 = 7.5625;
		const d1 = 2.75;

		if (x < 1 / d1) {
			return n1 * x * x;
		} else if (x < 2 / d1) {
			return n1 * (x -= 1.5 / d1) * x + 0.75;
		} else if (x < 2.5 / d1) {
			return n1 * (x -= 2.25 / d1) * x + 0.9375;
		} else {
			return n1 * (x -= 2.625 / d1) * x + 0.984375;
		}
	}

	return (
		<motion.div
			className=""
			exit={{ y: 70, opacity: 0 }}
			initial={{ y: 70, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: easeOutBounce }}
		>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="mb-20 h-[50vh] w-[100%] overflow-hidden lg:h-[60vh]"
			>
				{imageUrl && (
					<img
						src={imageUrl}
						alt={name}
						className="aspect-auto h-[100%] w-[auto] object-cover lg:w-[100%]"
						variants={textVariant(0.3)}
					/>
				)}
			</motion.div>

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="lg:grid lg:grid-cols-4"
			>
				<motion.div
					variants={textVariant(0.6)}
					className="flex items-center justify-start max-[1015px]:hidden lg:col-span-1"
				>
					<a href={link} target="_blank">
						<RiExternalLinkLine className="rounded-full bg-green-color p-5 text-[#121212] lg:text-7xl" />
					</a>
				</motion.div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.1 }}
					className="lg:col-span-3"
				>
					<motion.h1
						variants={fadeDownVariant(0.6)}
						className="case-title mb-14 text-6xl font-semibold md:text-7xl lg:text-8xl"
					>
						{name}
					</motion.h1>

					{/* <div className="case-details grid grid-cols-2 gap-12"> */}
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.1 }}
						className="case-details flex w-[90%] flex-wrap justify-between gap-8 md:w-[80%] md:gap-12 lg:w-[80%]"
					>
						<motion.div
							variants={textVariant(0.6)}
							className="w-[70%] lg:w-[280px]"
						>
							<span className="mb-3 block text-[14px] font-semibold text-[#A9A9A9] md:text-[16px]">
								Role
							</span>
							<p className="text-[15px] uppercase md:text-[18px]">{role}</p>
						</motion.div>
						<motion.div variants={textVariant(0.6)} className="">
							<span className="mb-3 block text-[14px] font-semibold text-[#A9A9A9] md:text-[16px]">
								Year
							</span>
							<p className="text-[15px] uppercase md:text-[18px]">{year}</p>
						</motion.div>
						<motion.div variants={textVariant(0.6)}>
							<span className="mb-3 block text-[14px] font-semibold text-[#A9A9A9] md:text-[16px]">
								Niche
							</span>
							<p className="text-[15px] uppercase md:text-[18px]">{niche}</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* {console.log(currentPortfolio)} */}

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="case-overview mt-36 lg:mt-56"
			>
				<motion.div
					variants={textVariant(0.1)}
					className="lg:grid lg:grid-cols-4"
				>
					<span className="mb-6 block text-[14px] font-semibold uppercase text-[#A9A9A9] md:text-[16px] lg:col-span-1 lg:mb-0">
						{overviewSubTitle}
					</span>
					<div className="lg:col-span-3">
						<h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:-mt-4 lg:text-5xl lg:leading-snug">
							{overviewTitle}
						</h2>
						<p className="text-[#A9A9A9] md:text-[18px]">{overviewDesc}</p>
					</div>
				</motion.div>

				<motion.div
					variants={textVariant(0.1)}
					className="case-overview-images mt-36 lg:mt-56"
				>
					<div className="mb-7 h-[192.600] w-[100%] overflow-hidden md:mb-0 md:h-[350px] lg:mb-12 lg:h-[650px]">
						<img
							src={urlFor(overviewImg01)}
							alt={name}
							className="aspect-auto object-cover md:h-[100%] md:w-[100%]"
						/>
					</div>
					<div className="md:flex md:gap-x-7 lg:gap-x-12">
						<div className="mb-7 h-[350px] w-[100%] overflow-hidden md:-mb-0 lg:h-[650px]">
							<img
								src={urlFor(overviewImg02)}
								alt={name}
								className="aspect-auto object-cover md:h-[100%] md:w-[100%]"
							/>
						</div>
						<div className="h-[350px] w-[100%] overflow-hidden lg:h-[650px]">
							<img
								src={urlFor(overviewImg03)}
								alt={name}
								className="aspect-auto object-cover md:h-[100%] md:w-[100%]"
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="case-challenge mt-36 lg:mt-56"
			>
				<motion.div
					variants={textVariant(0.1)}
					className="lg:grid lg:grid-cols-4"
				>
					<span className="mb-6 block text-[14px] font-semibold uppercase text-[#A9A9A9] md:text-[16px] lg:col-span-1">
						{challengeSubTitle}
					</span>
					<div className="lg:col-span-3">
						<h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:-mt-4 lg:text-5xl lg:leading-snug">
							{challengeTitle}
						</h2>
						<p className="text-[#A9A9A9] md:text-[18px]">{challengeDesc}</p>
					</div>
					{/* <p className="text-[#A9A9A9] md:text-[18px]">{challengeDesc}</p> */}
				</motion.div>

				<motion.div
					variants={textVariant(0.1)}
					className="case-challenge-images mt-36 lg:mt-56"
				>
					{/* <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100 mb-7 lg:mb-12"></div> */}
					<div className="h-[644.45px] w-[100%] bg-slate-100 lg:h-[2300px]">
						<img
							src={urlFor(challengeImg01)}
							alt={name}
							className="aspect-auto md:w-[100%]"
						/>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="case-solution mt-36 lg:mt-56"
			>
				<motion.div
					variants={textVariant(0.1)}
					className="lg:grid lg:grid-cols-4"
				>
					<span className="mb-6 block text-[14px] font-semibold uppercase text-[#A9A9A9] md:text-[16px] lg:col-span-1">
						{solutionSubTitle}
					</span>
					<div className="lg:col-span-3">
						<h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:-mt-4 lg:text-5xl lg:leading-snug">
							{solutionTitle}
						</h2>
						<p className="text-[#A9A9A9] md:text-[18px]">{solutionDesc}</p>
					</div>
				</motion.div>

				<motion.div
					variants={textVariant(0.1)}
					className="case-solution-images mt-36 lg:mt-56"
				>
					<div className="mb-7 h-[228.2px] w-[100%] bg-slate-100 lg:mb-12 lg:h-[700px]">
						<img
							src={urlFor(solutionImg01)}
							alt={name}
							className="aspect-auto object-cover md:h-[100%] md:w-[100%]"
						/>
					</div>
					<div className="mt-7 h-[246.1px] w-[100%] bg-slate-100 lg:mt-12 lg:h-[750px]">
						<img
							src={urlFor(solutionImg02)}
							alt={name}
							className="aspect-auto object-cover md:h-[100%] md:w-[100%]"
						/>
					</div>
				</motion.div>
			</motion.div>

			{/* <motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="case-little-details mt-36 lg:mt-56"
			>
				<motion.span
					variants={textVariant(0.1)}
					className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 flex text-center justify-center items-center font-semibold"
				>
					{littleDescSubTitle}
				</motion.span>
				<motion.div variants={textVariant(0.1)}>
					<h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug mb-8 font-semibold text-center">
						{littleDescTitle}
					</h2>
				</motion.div>

				<motion.div
					variants={textVariant(0.1)}
					className="case-little-details-images mt-36 lg:mt-56"
				>
					<div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100"></div>
				</motion.div>
			</motion.div> */}

			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.1 }}
				className="case-impact mt-36 lg:mt-56"
			>
				<motion.div
					variants={textVariant(0.1)}
					className="lg:grid lg:grid-cols-4"
				>
					<span className="mb-6 block text-[14px] font-semibold uppercase text-[#A9A9A9] md:text-[16px] lg:col-span-1">
						{impactSubTitle}
					</span>
					<div className="lg:col-span-3">
						<h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:-mt-4 lg:text-5xl lg:leading-snug">
							{impactTitle}
						</h2>
						<p className="text-[#A9A9A9] md:text-[18px]">{impactDesc}</p>
					</div>
				</motion.div>
			</motion.div>

			<Footer />
		</motion.div>
	);
}

// The New ServerSide
export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "portfolio" && slug.current == "${pageSlug}" ]`
	);
	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const portfolio = result.result[0];

	if (!portfolio) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				name: portfolio.name,
				image: portfolio.image,
				role: portfolio.content.role,
				year: portfolio.content.year,
				niche: portfolio.content.niche,
				link: portfolio.content.link,
				overviewSubTitle: portfolio.content.overviewSubTitle,
				overviewTitle: portfolio.content.overviewTitle,
				overviewDesc: portfolio.content.overviewDesc,
				overviewImg01: portfolio.content.overviewImg01,
				overviewImg02: portfolio.content.overviewImg02,
				overviewImg03: portfolio.content.overviewImg03,
				challengeSubTitle: portfolio.content.challengeSubTitle,
				challengeTitle: portfolio.content.challengeTitle,
				challengeDesc: portfolio.content.challengeDesc,
				challengeImg01: portfolio.content.challengeImg01,
				solutionSubTitle: portfolio.content.solutionSubTitle,
				solutionTitle: portfolio.content.solutionTitle,
				solutionDesc: portfolio.content.solutionDesc,
				solutionImg01: portfolio.content.solutionImg01,
				solutionImg02: portfolio.content.solutionImg02,
				impactSubTitle: portfolio.content.impactSubTitle,
				impactTitle: portfolio.content.impactTitle,
				impactDesc: portfolio.content.impactDesc,
			},
		};
	}
};

// export const getServerSideProps = async (pageContext) => {
// 	const query = encodeURIComponent(
// 		'*[ _type == "portfolio" ] | order(_createdAt desc) [0...3]'
// 	);
// 	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;
// 	const result = await fetch(url).then((res) => res.json());

// 	if (!result.result || !result.result.length) {
// 		return {
// 			props: {
// 				portfolios: [],
// 			},
// 		};
// 	} else {
// 		return {
// 			props: {
// 				portfolios: result.result,
// 			},
// 		};
// 	}
// };

// End of The New ServerSide
