const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
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
		ignoreBuildErrors: true,
	},
	webpack5: (config, { isServer }) => {
		if (!isServer) {
			config.node = {
				fs: "empty",
			};
		}

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				"style-loader",
				"css-loader",
				{
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							plugins: [
								require("postcss-import"),
								require("tailwindcss"),
								require("autoprefixer"),
								...(process.env.NODE_ENV === "production" ? [purgecss] : []),
							],
						},
					},
				},
				"sass-loader",
			],
		});

		return config;
	},
};
