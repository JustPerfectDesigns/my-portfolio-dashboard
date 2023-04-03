import React from "react";
import Footer from "../../components/Footer";
import FloatingAnimation from "../../components/FloatingAnimation";
import {motion} from "framer-motion"
import { fadeInUp, stagger, cardVariants, fadeDown, fadeUp, slideIn, staggerContainer, textVariant, leftVariant, rightVariant, fadeIn, opacityVariant } from '../../utils/motion';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const index = ({ posts }) => {
	const router = useRouter();
	const [mappedPosts, setMappedPosts] = useState([]);
 
	useEffect(() => {
	  if (posts.length) {
		 const imgBuilder = imageUrlBuilder({
			projectId: 'r5dols4o',
			dataset: 'production',
		 });
 
		 setMappedPosts(
			posts.map(p => {
			  return {
				 ...p,
				//  mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
				 mainImage: imgBuilder.image(p.mainImage),
			  }
			})
		 );
	  } else {
		 setMappedPosts([]);
	  }
	}, [posts]);

	return (
		<motion.main exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
			<div className="containerr">
				<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="w-full py-[7rem] dark:bg-black-container bg-[#F6F8FA] px-6 lg:px-[6rem] relative">
					<motion.h2 variants={textVariant(.5)} className="text-2xl md:text-3xl lg:text-6xl leading-10 lg:leading-[1.3] dark:text-white text-[#121212] font-semibold text-center">
						Blog
					</motion.h2>

					<motion.p variants={textVariant(.6)} className="mt-8 mb-8 lg:text-[1.5rem] dark:text-white text-[#121212] font-light text-center leading-[1.6]">
						I just enjoy writing, I hope you do too. <br /> New blog posts every week!
					</motion.p>

					<FloatingAnimation />
				</motion.div>

				<motion.div className="mt-20" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }}>
					<motion.h2 variants={leftVariant(.6)} className="text-center text-2xl dark:text-white text-[#121212] font-medium">
						I Blog Too ✌️
					</motion.h2>
					<motion.div variants={rightVariant(.6)} className="line w-[60px] h-[1px] bg-green-color-alt dark:bg-green-color mt-4 mx-[auto]"></motion.div>
					<motion.div variants={staggerContainer}	initial="hidden" whileInView="show"	viewport={{ once: true, amount: 0.8 }} className="grid gap-[3rem] mt-20 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
						{mappedPosts.length ? mappedPosts.map((p, index) => (
							<motion.div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className="dark:bg-black-container bg-[#F6F8FA] cursor-pointer hover:shadow-sm" variants={cardVariants} initial="offscreen"	whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: "-15px", rotate: 1.5 }}>
								<img className="" src={p.mainImage} />
								<h3 className="pt-[15px] px-[15px] text-lg lg:text-[19px] font-medium">{p.title}</h3>
								{/* <span>{p.publishedAt}</span> */}
								<span className="text-[#919191] block text-xs py-[20px] px-[15px] text-1xl font-semibold">{new Date(p.publishedAt).toLocaleString('default', { month: 'short' }) + '.'} {new Date(p.publishedAt).getDate()}, {new Date(p.publishedAt).getFullYear()}</span>
							</motion.div>
						)) : <>No Posts Yet</>}
					</motion.div>
    		  	</motion.div>
				<Footer />
			</div>
		</motion.main>
	);
};

export const getServerSideProps = async pageContext => {
	const query = encodeURIComponent('*[ _type == "post" ] | order(_createdAt desc)');
	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then(res => res.json());
 
	if (!result.result || !result.result.length) {
	  return {
		 props: {
			posts: [],
		 }
	  }
	} else {
	  return {
		 props: {
			posts: result.result,
		 }
	  }
	}
 };

export default index;
