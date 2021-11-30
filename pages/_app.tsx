import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Top app</title>
				<link key={1} rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;