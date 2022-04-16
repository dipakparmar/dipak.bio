module.exports = {
    async rewrites() {
        return [
            {
                source: '/links',
                destination: '/',
            },
        ]
    },
}