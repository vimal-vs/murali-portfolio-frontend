"use client"

import { useEffect, useState } from 'react';
import { getBlog } from '@actions/blogs';
import parser from "html-react-parser";
import Head from "next/head";
import { meta } from "@/utils/meta";
import Image from 'next/image';
import { cn } from '@utils/cn';
import { Nova_Mono } from "next/font/google"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function BlogPage({ id }) {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const data = await getBlog({ id });
                setBlog(data)
            }
            fetchData()
        }
    }, [id]);
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="author" content={meta.author} />
                <link rel="canonical" href={meta.url} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content={meta.twitterCard} />
                <meta name="twitter:url" content={meta.url} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute top-5 md:top-48 w-full mx-auto">
                <h1
                    className={cn(
                        novamono.className,
                        "text-center text-5xl md:text-8xl md:underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]"
                    )}
                >
                    BLOG
                </h1>
            </div>
            <div className="container mx-auto px-4 py-8">
                {blog && (
                    <article className="">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-lg text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                        <Image src={blog.thumbnail} alt="Blog Thumbnail" className="w-full h-60 object-cover rounded-md mb-4" />
                        <div className="mb-6">{parser(blog.content)}</div>
                    </article>
                )}
            </div>
        </>
    )
}
