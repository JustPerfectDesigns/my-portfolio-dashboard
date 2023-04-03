import {HiOutlineArrowLongDown} from "react-icons/hi2"
import Link from "next/link";
import { client, urlFor } from "../../lib/client";
import Footer from "../../components/Footer"
import {motion} from "framer-motion"
import { fadeDownVariant, staggerContainer, textVariant, } from '../../utils/motion';

import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';

export default function CaseStudy({ image, name, overviewSubTitle, overviewTitle, overviewDesc, overviewImg01, overviewImg02, overviewImg03, challengeSubTitle, challengeTitle, challengeDesc, solutionSubTitle, solutionTitle, solutionDesc, littleDescSubTitle, littleDescTitle, impactSubTitle, impactTitle, impactDesc }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'r5dols4o',
      dataset: 'production',
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
    <motion.div className="" exit={{y: 70, opacity: 0}} initial={{y: 70, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, ease: easeOutBounce}}>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="w-[100%] h-[50vh] lg:h-[60vh] overflow-hidden mb-20">
        {imageUrl && <img
        src={imageUrl} alt={name}
        className="aspect-auto h-[100%] w-[auto] lg:w-[100%] object-cover"
        variants={textVariant(.3)}
        />}
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="lg:grid lg:grid-cols-4">
        <motion.div variants={textVariant(.6)} className="max-[1015px]:hidden flex justify-start items-center lg:col-span-1">
          <HiOutlineArrowLongDown className="bg-green-color p-5 lg:text-7xl text-[#121212] rounded-full" />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="lg:col-span-3">
          <motion.h1 variants={fadeDownVariant(.6)} className="case-title text-6xl md:text-7xl lg:text-8xl font-semibold mb-14">{name}</motion.h1>

          {/* <div className="case-details grid grid-cols-2 gap-12"> */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-details flex justify-between flex-wrap gap-8 w-[90%] md:w-[80%] lg:w-[80%] md:gap-12">
            <motion.div variants={textVariant(.6)} className="w-[70%] lg:w-[280px]">
              <span className="text-[14px] md:text-[16px] text-[#A9A9A9] font-semibold mb-3 block">Role</span>
              <p className="uppercase text-[15px] md:text-[18px]">BRANDING, CREATIVE DIRECTION, VISUAL IDENTITY</p>
            </motion.div>
            <motion.div variants={textVariant(.6)} className="">
              <span className="text-[14px] md:text-[16px] text-[#A9A9A9] font-semibold mb-3 block">Year</span>
              <p className="uppercase text-[15px] md:text-[18px]">2021</p>
            </motion.div>
            <motion.div variants={textVariant(.6)}>
              <span className="text-[14px] md:text-[16px] text-[#A9A9A9] font-semibold mb-3 block">Niche</span>
              <p className="uppercase text-[15px] md:text-[18px]">Medical</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* {console.log(currentPortfolio)} */}

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-overview mt-36 lg:mt-56">
        <motion.div variants={textVariant(.1)} className="lg:grid lg:grid-cols-4">
          <span className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 lg:mb-0 block font-semibold lg:col-span-1">{overviewSubTitle}</span>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug mb-8 lg:-mt-4 font-semibold">{overviewTitle}</h2>
            <p className="text-[#A9A9A9] md:text-[18px]">{overviewDesc}</p>
          </div>
        </motion.div>

        <motion.div variants={textVariant(.1)} className="case-overview-images mt-36 lg:mt-56">
          <div className="md:flex md:gap-x-7 lg:gap-x-12">
            <div className="w-[100%] h-[350px] lg:h-[650px] overflow-hidden mb-7 md:-mb-0">
              <img
                src={urlFor(overviewImg01)}
                alt={name}
                className="aspect-auto md:h-[100%] md:w-[100%] object-cover"
              />
            </div>
            <div className="w-[100%] h-[350px] lg:h-[650px] overflow-hidden">
              <img
                src={urlFor(overviewImg02)}
                alt={name}
                className="aspect-auto md:h-[100%] md:w-[100%] object-cover"
              />
            </div>
          </div>
            <div className="w-[100%] h-[350px] lg:h-[650px] overflow-hidden mt-7 md:mb-0 lg:mt-12">
              <img
                src={urlFor(overviewImg03)}
                alt={name}
                className="aspect-auto md:h-[100%] md:w-[100%] object-cover"
              />
            </div>
        </motion.div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-challenge mt-36 lg:mt-56">
        <motion.div variants={textVariant(.1)} className="lg:grid lg:grid-cols-4">
          <span className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 block font-semibold lg:col-span-1">{challengeSubTitle}</span>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug mb-8 lg:-mt-4 font-semibold">{challengeTitle}</h2>
            <p className="text-[#A9A9A9] md:text-[18px]">{challengeDesc}</p>
          </div>
          {/* <p className="text-[#A9A9A9] md:text-[18px]">{challengeDesc}</p> */}
        </motion.div>

        <motion.div variants={textVariant(.1)} className="case-challenge-images mt-36 lg:mt-56">
            <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100 mb-7 lg:mb-12"></div>
            <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100"></div>
        </motion.div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-solution mt-36 lg:mt-56">
        <motion.div variants={textVariant(.1)} className="lg:grid lg:grid-cols-4">
          <span className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 block font-semibold lg:col-span-1">{solutionSubTitle}</span>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug mb-8 lg:-mt-4 font-semibold">{solutionTitle}</h2>
            <p className="text-[#A9A9A9] md:text-[18px]">{solutionDesc}</p>
          </div>
        </motion.div>

        <motion.div variants={textVariant(.1)} className="case-solution-images mt-36 lg:mt-56">
          <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100 mb-7 lg:mb-12"></div>
          <div className="md:flex md:gap-x-7 lg:gap-x-12">
            <div className="w-[100%] h-[350px] lg:h-[650px] overflow-hidden mb-7 md:-mb-0 bg-slate-100">
              {/* <img
                src={urlFor(overviewImg01)}
                alt={name}
                className="aspect-auto md:h-[100%] md:w-[100%] object-cover"
              /> */}
            </div>
            <div className="w-[100%] h-[350px] lg:h-[650px] overflow-hidden bg-slate-100">
              {/* <img
                src={urlFor(overviewImg02)}
                alt={name}
                className="aspect-auto md:h-[100%] md:w-[100%] object-cover"
              /> */}
            </div>
          </div>
            <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100 mt-7 lg:mt-12"></div>
        </motion.div>
      </motion.div>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-little-details mt-36 lg:mt-56">
        <motion.span variants={textVariant(.1)} className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 flex text-center justify-center items-center font-semibold">{littleDescSubTitle}</motion.span>
        <motion.div variants={textVariant(.1)}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug mb-8 font-semibold text-center">{littleDescTitle}</h2>
        </motion.div>

        <motion.div variants={textVariant(.1)} className="case-little-details-images mt-36 lg:mt-56">
          <div className="w-[100%] h-[350px] lg:h-[650px] bg-slate-100"></div>
        </motion.div>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="case-impact mt-36 lg:mt-56">
        <motion.div variants={textVariant(.1)} className="lg:grid lg:grid-cols-4">
          <span className="text-[#A9A9A9] uppercase text-[14px] md:text-[16px] mb-6 block font-semibold lg:col-span-1">{impactSubTitle}</span>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-snug font-semibold mb-8 lg:-mt-4">{impactTitle}</h2>
            <p className="text-[#A9A9A9] md:text-[18px]">{impactDesc}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Render a link to the next portfolio item */}
      {/* <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-40 w-[100%] h-[350px] lg:h-[650px] bg-black-container flex justify-center items-center flex-col gap-6">
        <motion.span variants={textVariant(.1)} className="flex text-center text-[#A9A9A9] font-semibold">Next Project</motion.span>
        <motion.div variants={textVariant(.1)}>
          <Link href={`/case-study/${nextPortfolio._id}`} passHref className="text-4xl lg:text-7xl font-semibold flex justify-center items-center text-center">
            {nextPortfolio.name}
          </Link>
        </motion.div>
      </motion.div> */}

      <Footer />
    </motion.div>
  );
}

// The New ServerSide 
export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "portfolio" && slug.current == "${pageSlug}" ]`);
  const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const portfolio = result.result[0];

  if (!portfolio) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        name: portfolio.name,
        image: portfolio.image,
        overviewSubTitle: portfolio.content.overviewSubTitle,
        overviewTitle: portfolio.content.overviewTitle,
        overviewDesc: portfolio.content.overviewDesc,
        overviewImg01: portfolio.content.overviewImg01,
        overviewImg02: portfolio.content.overviewImg02,
        overviewImg03: portfolio.content.overviewImg03,
        challengeSubTitle: portfolio.content.challengeSubTitle,
        challengeTitle: portfolio.content.challengeTitle,
        challengeDesc: portfolio.content.challengeDesc,
        solutionSubTitle: portfolio.content.solutionSubTitle,
        solutionTitle: portfolio.content.solutionTitle,
        solutionDesc: portfolio.content.solutionDesc,
        littleDescSubTitle: portfolio.content.littleDescSubTitle,
        littleDescTitle: portfolio.content.littleDescTitle,
        impactSubTitle: portfolio.content.impactSubTitle,
        impactTitle: portfolio.content.impactTitle,
        impactDesc: portfolio.content.impactDesc,
      }
    }
  }
};

// End of The New ServerSide