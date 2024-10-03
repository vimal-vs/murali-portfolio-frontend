"use client"

import top from "@assets/secPagesTop.svg";
import Image from "next/image";
import BlogPage from "@components/BlogPage";
import { useSearchParams } from 'next/navigation';

// export const metadata = {
//     title: meta.blogs.title,
//     description: meta.blogs.description,
//     keywords: meta.blogs.keywords,
//     author: meta.blogs.author,
//     url: meta.blogs.url,
//     image: meta.blogs.image,
//     twitterCard: meta.blogs.twitterCard,
// };

export default function BlogsPage() {
    const id = useSearchParams().getAll("id");

    return (
        <>
            <div className="relative">
                <Image src={top} alt="Top Banner" className="size-full mt-16 md:-mt-32" />
                <BlogPage id={id} />
            </div>
        </>
    );
} 