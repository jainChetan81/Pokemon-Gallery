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
		minimumCacheTTL: 3600,
		disableStaticImages: true,
	},
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			"/": { page: "/" },
			"/404": { page: "/404" },
			"/_offline": { page: "/_offline" },
			"/[id]": { page: "/pokemon/[id]" },
		};
	},
	swcMinify: true,
	webpack5: true,
});
