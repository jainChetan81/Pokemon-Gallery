const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	future: { webpack5: true },
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io", "assets.pokemon.com"],
		// loader: "default",//default, imgix, cloudinary, akamai, custom
		// path: "/",
		minimumCacheTTL: 60,
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
});
