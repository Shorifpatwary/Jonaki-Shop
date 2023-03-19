import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthProvider from "@/tools/Context/authProvider";

import NProgress from "nprogress";

// styles
import "@/styles/main.scss";

import ErrorBoundary from "@/tools/HOC/Error";
import CartProvider from "@/tools/Context/cartProvider";
import MegaHeader from "@/layoutComponent/Mega-Header";
import Footer from "@/layoutComponent/Footer";

const App = ({ Component, pageProps }: AppProps) => {
	const Router = useRouter();
	useEffect(() => {
		// Start the loading bar when a page starts loading
		Router.events.on("routeChangeStart", () => {
			NProgress.start();
		});
		// Stop the loading bar when a page finishes loading
		Router.events.on("routeChangeComplete", () => {
			NProgress.done();
		});

		// Stop the loading bar if an error occurs
		Router.events.on("routeChangeError", () => {
			NProgress.done();
		});
	}, [Router.events]);

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
				{/* loading  */}
				{/* using nprogress for loading   */}
				{/* <Loading /> */}
				{/* Header */}
				<AuthProvider>
					<CartProvider>
						<MegaHeader />
						<Component {...pageProps} />
						{/* <ErrorBoundary> */}
						<Footer />
					</CartProvider>
				</AuthProvider>
				{/* </ErrorBoundary> */}
			</ErrorBoundary>
		</>
	);
};

export default App;
