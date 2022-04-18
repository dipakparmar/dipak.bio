import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
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
			</Script>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp