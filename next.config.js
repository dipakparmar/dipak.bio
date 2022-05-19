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
        ]
    },
    images: {
        domains: ['github.com', 'avatars.githubusercontent.com'],
    },
}