module.exports = {
    async rewrites() {
        return [
            {
                source: '/links',
                destination: '/',
            },
        ]
    },
    images: {
        domains: ['github.com', 'avatars.githubusercontent.com'],
    },
}