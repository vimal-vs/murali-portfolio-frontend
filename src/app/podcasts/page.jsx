import top from "@assets/secPagesTop.svg"
import Podcasts from "@components/Podcasts"
import Head from "next/head";
import Image from "next/image"
import { meta } from "@/utils/meta";

export const metadata = {
  title: meta.podcasts.title,
  description: meta.podcasts.description,
  keywords: meta.podcasts.keywords,
  author: meta.podcasts.author,
  url: meta.podcasts.url,
  image: meta.podcasts.image,
  twitterCard: meta.podcasts.twitterCard,
};

export default function page() {

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
      <div className="relative">
        <Image src={top} alt="logo" className="size-full mt-16 md:-mt-12" />
        <Podcasts />
      </div>
    </>
  )
}
