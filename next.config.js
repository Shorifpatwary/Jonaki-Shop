/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.chec.io",
			},
		],
	},
	typescript: {
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
