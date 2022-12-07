import Head from "next/head";
// styles
import "@/styles/main.scss";
// additional styles from third party libraries .
import "react-multi-carousel/lib/styles.css";

// components
import ErrorBoundary from "@/tools/HOC/Error";
import MegaHeader from "@/layoutComponent/Mega-Header";
import Footer from "@/layoutComponent/Footer";

const App = ({ Component, pageProps }: AppProps) => {
	// return <Component {...pageProps} />;
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}
	return (
		<>
			<ErrorBoundary>
				<Head>
					<title>Jonaki Shop Website </title>
					<meta
						name="description"
						content="This is a next js Wocommerce website by shoriful islam "
					/>

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;1,500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				{/* Header */}
				<MegaHeader />
				<Component {...pageProps} />
				{/* <ErrorBoundary> */}
				<Footer />
				{/* </ErrorBoundary> */}
			</ErrorBoundary>
		</>
	);
};

export default App;
