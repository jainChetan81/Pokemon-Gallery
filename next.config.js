const withPWA = require("next-pwa");

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io"],
	},
};

module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	},
});
