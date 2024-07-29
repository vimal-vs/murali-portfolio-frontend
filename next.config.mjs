/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '35.223.153.154',
                port: "3001"
            },
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/',
                    name: '[name].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};

export default nextConfig;  