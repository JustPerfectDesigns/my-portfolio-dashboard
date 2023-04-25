// import React from "react"
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import dynamic from "next/dynamic";
// import "../../public/post.module.css"
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import {
	fadeInUp,
	stagger,
	cardVariants,
	fadeDownVariant,
	fadeUp,
	slideIn,
	staggerContainer,
	textVariant,
	leftVariant,
	rightVariant,
	fadeIn,
	opacityVariant,
} from "../../utils/motion";
import Gab from "../../public/images/gab.png";
import Image from "next/image";

export const Post = ({ title, body, image }) => {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		const imgBuilder = imageUrlBuilder({
			projectId: "r5dols4o",
			dataset: "production",
		});

		setImageUrl(imgBuilder.image(image));
	}, [image]);

	const BlockContent = dynamic(() => import("@sanity/block-content-to-react"), {
		ssr: false,
	});

	const serializers = {
		types: {
			block: (props) => {
				switch (props.node.style) {
					case "h1":
						return <h1>{props.children}</h1>;
					case "h2":
						return <h2>{props.children}</h2>;
					case "h3":
						return <h3>{props.children}</h3>;
					case "h4":
						return <h4>{props.children}</h4>;
					case "bulletlist":
						return (
							<ul>
								{props.children.map((child) => (
									<li>{child}</li>
								))}
							</ul>
						);
					case "orderedlist":
						return (
							<ol>
								{props.children.map((child, index) => (
									<li value={index + 1}>{child}</li>
								))}
							</ol>
						);
					case "underline":
						return <u>{props.children}</u>;
					case "blockquote":
						return <blockquote>{props.children}</blockquote>;
					case "italic":
						return <em>{props.children}</em>;
					case "code":
						return (
							<pre>
								<code>{props.children}</code>
							</pre>
						);
					case "link":
						return <a href={props.node.url}>{props.children}</a>;
					default:
						return <p>{props.children}</p>;
				}
			},
		},
	};

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
			exit={{ y: 70, opacity: 0 }}
			initial={{ y: 70, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: easeOutBounce }}
		>
			<motion.div className="grid gap-16 lg:grid-cols-3">
				<section className="w-full lg:col-span-2">
					<div className="hero flex items-center gap-7">
						{/* <span>Put the header with advertising yourself here</span> */}
						<div className="min-h-[80px] min-w-[80px] overflow-hidden rounded-full bg-red-400 md:min-h-[75px] md:w-[75px]">
							<Image src={Gab} alt="Gabriel Samuel Aina" className="w-[100%]" />
						</div>
						<div className='relative w-[100%] border-2 border-[#f2f2f2] bg-[#f4f6f8] py-[15px] px-[15px] text-[#44464c] before:absolute before:top-[50%] before:left-0 before:mt-[-11px] before:ml-[-11px] before:block before:h-[22px] before:w-[22px] before:rotate-45 before:border-b-2 before:border-l-2 before:border-[#f2f2f2] before:bg-inherit before:content-[""] dark:border-[#252528] dark:bg-black-container dark:text-white dark:before:border-[#252528] md:py-[15px] md:px-[25px] lg:py-[20px] lg:px-[43px]'>
							<span className="mb-[5px] block text-[16px] font-semibold md:text-[18px] md:leading-[1.6]">
								Hey! 👋 I hope you enjoy reading this blog post.
							</span>
							<span className="md:text-normal mb-[5px] block text-sm">
								If you need me to help with your website, web app or branding,{" "}
								<a
									href="https://neilpatel.com/consulting/"
									className="font-medium text-[#45C87F]"
								>
									click here
								</a>{" "}
							</span>
						</div>
					</div>
					<div className="line mt-14 h-[2px] w-16 bg-green-color"></div>

					<div className="post">
						<h1 className="my-11 text-3xl font-semibold lg:text-4xl">
							{title}
						</h1>
						<div className="breadcrumb text-sm">
							<Link
								href="/post"
								className="font-semibold text-green-color underline"
							>
								Blog
							</Link>
							<span className="opacity-50">
								{" "}
								{"</>"} {title}
							</span>
						</div>
						{imageUrl && <img className="mt-12 mb-9 w-full" src={imageUrl} />}

						<div className="">
							<noSSR>
								<BlockContent
									blocks={body}
									className="blockc leading-loose text-[#121212] dark:text-[#E7E7E7]"
									serializers={serializers}
									imageOptions={{ w: 1000, h: 760, fit: "max" }}
									projectId={"r5dols4o"}
									dataset={"production"}
									// className="leading-7"
								/>
								<style>{`
                  .blockc h1 {
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 1.2;
                    margin: 1.5rem 0
                  }
                  .blockc h2 {
                    font-size: 24px;
                    font-weight: 600;
                    margin: 1.5rem 0
                  }
                  .blockc h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 1.5rem 0
                  }
                  .blockc h4 {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 1.5rem 0
                  }
                  .blockc p {
                    font-weight: 400;
                  }
                  .blockc a {
                    color: #45C87F;
                    font-weight: 500;
                  }
                  .blockc img {
                    margin: 1.5rem 0;
                  }

                  .blockc ul {
                    margin: 2rem 0 2rem 1.4rem;
                  }

                  .blockc ul li {
                    list-style: none;
                    position: relative;
                    padding: 0 0 0 1.5rem;
                    margin: 1rem 0;
                  }

                  .blockc ul li::before {
                    content: "";
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #45C87F;
                    position: absolute;
                    top: .9rem;
                    left: 0;
                    margin-top: -4px;
                  }

                  .blockc ol {
                    margin: 2rem 0 2rem 1.4rem;
                  }

                  .blockc ol li {
                    list-style: number;
                    position: relative;
                    padding: 0 0 0 1.5rem;
                    margin: 1rem 0;
                  }

                  // .blockc ol li::before {
                  //   content: "";
                  //   display: block;
                  //   width: 8px;
                  //   height: 8px;
                  //   border-radius: 50%;
                  //   background: #45C87F;
                  //   position: absolute;
                  //   top: .9rem;
                  //   left: 0;
                  //   margin-top: -4px;
                  // }

                  @media screen and (min-width: 1024px) {
                    .blockc img {
                      margin: 2.5rem 0;
                    }

                    .blockc p {
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 2;
                    }
                  }
              `}</style>
							</noSSR>
						</div>
					</div>
				</section>
				<aside className="h-[10rem] w-full lg:sticky lg:top-[2rem]">
					<div className="h-[200px] w-full border-2 border-[#f2f2f2] bg-[#f4f6f8] p-6 text-[#44464c] dark:border-[#252528] dark:bg-black-container dark:text-white">
						This section is still not done. Remember!
					</div>
				</aside>
			</motion.div>
			<Footer />
		</motion.div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug;

	if (!pageSlug) {
		return {
			notFound: true,
		};
	}

	const query = encodeURIComponent(
		`*[ _type == "post" && slug.current == "${pageSlug}" ]`
	);
	const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const post = result.result[0];

	if (!post) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				body: post.body,
				title: post.title,
				image: post.mainImage,
			},
		};
	}
};

export default Post;
