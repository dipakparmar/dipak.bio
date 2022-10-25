import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
	return (
		<>
			{process.env.NEXT_PUBLIC_GA_TAG_ID && process.env.NODE_ENV === 'production' ? <><Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TAG_ID}`}
			/>
				<Script id="google-analytics" strategy="lazyOnload">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TAG_ID}', {
              page_path: window.location.pathname,
            });
                `}
				</Script> </> : null}
			{process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production' ? <> <Script strategy="afterInteractive" async data-api="/_hive" src="/bee.js" /> <Script strategy="afterInteractive" async defer data-website-id="048a30df-ed13-46a5-a116-b757128f40cd" data-do-not-track="true" src="/ua.js" /></> : null}
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}

export default MyApp