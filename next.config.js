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
module.exports = {
	plugins: [
		"postcss-flexbugs-fixes",
		[
			"postcss-preset-env",
			{
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 3,
				features: {
					"custom-properties": false,
				},
			},
		],
		[
			"@fullhuman/postcss-purgecss",
			{
				content: [
					"./pages/**/*.{js,jsx,ts,tsx}",
					"./components/**/*.{js,jsx,ts,tsx}",
				],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
				safelist: ["html", "body"],
			},
		],
	],
};
module.exports = nextConfig;
