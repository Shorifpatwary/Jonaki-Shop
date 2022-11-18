import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/main.scss";
const App = ({ Component, pageProps }: AppProps) => {
	// return <Component {...pageProps} />;
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<>
			<Head>
				<title>Shoriful islam next js practice website </title>
				<meta
					name="description"
					content="This is a next js website by shoriful islam "
				/>
			</Head>
			<h2>something </h2>
			{/* <Header /> */}
			<Component {...pageProps} />
			{/* <Footer /> */}
		</>
	);
};

export default App;
