import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>Courses information portal</title>
			<link key={1} rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
			<meta name="description" content="Home" />
			<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property="og:locale" content="ru_RU" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;