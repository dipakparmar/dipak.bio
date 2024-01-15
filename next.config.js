const ContentSecurityPolicy = `
	default-src 'self';
	script-src 'self' https://cdn.splitbee.io https://analytics.dipak.io https://hive.splitbee.io https://va.vercel-scripts.com https://www.googletagmanager.com 'unsafe-eval' 'unsafe-inline';
	style-src 'self' https://rsms.me https://fonts.googleapis.com 'unsafe-inline';
	child-src ;
	frame-src ;
	connect-src 'self' https://www.google-analytics.com http://127.0.0.1:*;
	img-src 'self' https://github.com https://avatars.githubusercontent.com data:;
	media-src 'self' https://avatars.githubusercontent.comm;
	font-src 'self' https://rsms.me https://fonts.gstatic.com;
`;

const securityHeaders = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=()",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
	},
];

/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
    return [
        {
          source: "/:path*",
        headers: securityHeaders
        },
      ];
  },
	async rewrites() {
		return [
			{
				source: "/links",
				destination: "/",
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
		];
	},
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'github.com',
		},{
			protocol: 'https',
			hostname: 'avatars.githubusercontent.com',
		}],
	},
};

module.exports = nextConfig;
