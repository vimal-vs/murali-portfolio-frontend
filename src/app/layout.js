import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/utils/cn';
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { CommonProvider } from "@contexts/CommonContext";
import PageTransition from '@/components/reusable/PageTransition';
import { meta, defaultMeta } from "@/utils/meta";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: meta.landing.title,
  description: meta.landing.description,
  keywords: meta.landing.keywords,
  author: meta.landing.author,
  url: meta.landing.url,
  image: meta.landing.image,
  twitterCard: meta.landing.twitterCard,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.url} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": metadata.author,
              "url": metadata.url,
              "sameAs": [
                defaultMeta.socialLinks.linkedIn,
                defaultMeta.socialLinks.twitter,
                defaultMeta.socialLinks.github
              ],
              "jobTitle": "Founder & Trainer",
              "worksFor": {
                "@type": "Organization",
                "name": defaultMeta.organization.name,
                "url": defaultMeta.organization.url
              },
              "description": defaultMeta.description,
              "image": defaultMeta.image,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": defaultMeta.address.locality,
                "addressRegion": defaultMeta.address.region,
                "postalCode": defaultMeta.address.postalCode,
                "addressCountry": defaultMeta.address.country
              }
            })
          }}
        />
      </head>
      <body className={cn(inter.className, "flex flex-col w-full min-h-screen")}>
        <CommonProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </CommonProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_GA_ID} />
    </html>
  );
}