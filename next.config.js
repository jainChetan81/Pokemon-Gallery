const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io", "assets.pokemon.com"],
		minimumCacheTTL: 60,
		disableStaticImages: true,
	},
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			"/": { page: "/" },
			"/menu": { page: "/menu" },
			"/about": { page: "/about" },
		};
	},
});
