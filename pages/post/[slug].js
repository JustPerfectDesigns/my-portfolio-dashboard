// import React from "react"
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import dynamic from 'next/dynamic';
// import "../../public/post.module.css"

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'r5dols4o',
      dataset: 'production',
    });
    
    setImageUrl(imgBuilder.image(image));
  }, [image]);
  
  const BlockContent = dynamic(() => import('@sanity/block-content-to-react'), { ssr: false });

  const serializers = {
    types: {
      block: props => {
        switch (props.node.style) {
          case 'h1':
            return <h1>{props.children}</h1>;
          case 'h2':
            return <h2>{props.children}</h2>;
          case 'h3':
            return <h3>{props.children}</h3>;
          case 'h4':
            return <h4>{props.children}</h4>;
          case 'bulletlist':
            return <ul>{props.children.map(child => <li>{child}</li>)}</ul>;
          case 'orderedlist':
            return <ol>{props.children.map((child, index) => <li value={index+1}>{child}</li>)}</ol>;
          case 'underline':
            return <u>{props.children}</u>;
          case 'blockquote':
            return <blockquote>{props.children}</blockquote>;
          case 'italic':
            return <em>{props.children}</em>;
          case 'code':
            return <pre><code>{props.children}</code></pre>;
          case 'link':
            return <a href={props.node.url}>{props.children}</a>;
          default:
            return <p>{props.children}</p>;
        }
      }
    }
  };
  

  return (
    <div className='grid gap-16'>
      <section className='w-full'>
        <div className='hero'>
          <span>Put the header with advertising yourself here</span>
        </div>
        <div className='line bg-green-color w-20 h-[2px] mt-9'></div>

        <div className="post">
          <h1 className="text-3xl font-semibold my-6">{title}</h1>
            <div className='breadcrumb'><Link href='/post'>Blog</Link>
              <span>{title}</span>
            </div>
          {imageUrl && <img className="mt-12 mb-9" src={imageUrl} />}

          <div className="">
            <noSSR>
              <BlockContent
                blocks={body}
                className="blockc leading-7"
                serializers={serializers}
                imageOptions={{w: 1000, h: 760, fit: "max"}}
                projectId={"r5dols4o"}
                dataset={"production"}
                // className="leading-7"
              />
               <style>{`
                  .blockc h1 {
                    font-size: 32px;
                    font-weight: 600;
                  }
                  .blockc h2 {
                    font-size: 24px;
                    font-weight: 600;
                  }
                  .blockc h3 {
                    font-size: 18px;
                    font-weight: 600;
                  }
                  .blockc h4 {
                    font-size: 16px;
                    font-weight: 600;
                  }
                  .blockc p {
                    // color: blue;
                  }
                  .blockc a {
                    color: blue;
                  }
              `}</style>
            </noSSR>
          </div>
        </div>
      </section>
      <aside className='sticky bg-slate-100 h-[10rem] w-full'>
        <h1>Gabriel</h1>
      </aside>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://r5dols4o.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      }
    }
  }
};

export default Post;