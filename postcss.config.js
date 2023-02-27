const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
		...(process.env.NODE_ENV === "production" ? [purgecss] : []),
	],
};
