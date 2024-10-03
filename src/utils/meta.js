const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const defaultMeta = {
    siteName: "Muralidharan | Connect Training Solutions",
    author: "Muralidharan R",
    image: `${baseUrl}/photo.png`,
    keywords: "Portfolio, Connect Murali, Muralidharan, Trainer, Corporate Trainer, Blogs, Podcasts, Gallery",
    twitterCard: "summary_large_image",
    socialLinks: {
        linkedIn: "https://www.linkedin.com/in/muralidharan",
        twitter: "https://twitter.com/muralidharan",
        github: "https://github.com/muralidharan",
    },
    organization: {
        name: "Connect Training Solutions",
        url: baseUrl,
    },
    address: {
        locality: "Tirunelveli",
        region: "Tamil Nadu",
        postalCode: "627001",
        country: "India",
    },
};

export const meta = {
    landing: {
        title: "Muralidharan | Connect Training Solutions",
        description: "Personal portfolio website of Muralidharan showcasing skills, blogs, podcasts, and more.",
        url: `${baseUrl}/`,
        ...defaultMeta,
    },
    blogs: {
        title: "Blogs | Muralidharan",
        description: "Explore blogs by Muralidharan R on corporate training, soft skills, and personal development.",
        url: `${baseUrl}/blogs`,
        keywords: "Blogs, Muralidharan, Corporate Training, Soft Skills, Personal Development",
        ...defaultMeta,
    },
    gallery: {
        title: "Gallery | Muralidharan",
        description: "Browse through Muralidharan's project galleries and corporate training visuals.",
        url: `${baseUrl}/gallery`,
        keywords: "Gallery, Projects, Muralidharan, Corporate Training",
        ...defaultMeta,
    },
    podcasts: {
        title: "Podcasts | Muralidharan",
        description: "Listen to Muralidharan's podcasts on corporate training, leadership, and skill development.",
        url: `${baseUrl}/podcasts`,
        keywords: "Podcasts, Leadership, Corporate Training, Soft Skills, Muralidharan",
        ...defaultMeta,
    },
};
