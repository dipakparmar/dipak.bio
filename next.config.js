module.exports = {
    async rewrites() {
        return [
            {
                source: '/links',
                destination: '/',
            },
						{
							source: "/bee.js",
							destination: "https://cdn.splitbee.io/sb.js",
						},
						{
							source: "/_hive/:slug",
							destination: "https://hive.splitbee.io/:slug",
						},
						{
							source: "/ua.js",
							destination: "https://analytics.dipak.io/umami.js",
						},
						{
							source: "/api/collect",
							destination: "https://analytics.dipak.io/api/collect",
						},
        ]
    },
    images: {
        domains: ['github.com', 'avatars.githubusercontent.com'],
    },
}