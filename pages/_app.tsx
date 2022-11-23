import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/main.scss";
import ErrorBoundary from "@/tools/HOC/Error";
import MegaHeader from "@/layoutComponent/Mega-Header";
import Footer from "@/layoutComponent/Footer";
import BtnPrimary from "@/Tags/Button/Primary";
import H1 from "@/Tags/Heading/H1";
import H2 from "@/Tags/Heading/H2";
import H3 from "@/Tags/Heading/H3";
import H4 from "@/Tags/Heading/H4";
import H5 from "@/Tags/Heading/H5";
import H6 from "@/Tags/Heading/H6";

import P3 from "@/Tags/P/P3";

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
				</Head>
				{/* Header */}
				<MegaHeader />
				<h1>Hello this is a heading 1 </h1>

				<div className="flex__center-se">
					<BtnPrimary size="lg"> Hello Large </BtnPrimary>
					<BtnPrimary size="md"> Hello Mdlk, </BtnPrimary>
					<BtnPrimary size="sm"> Hello Smlkd </BtnPrimary>
				</div>
				{/* <div className="flex__column-center"> */}
				<H1> Hello h1 tag </H1>
				<H2> Hello h2 tag </H2>
				<H3> Hello h3 tag</H3>
				<H4> Hello h4 tag</H4>
				<H5> Hello h5 tag</H5>
				<H6> Hello h6 tag</H6>
				<h1> Hello this is heading one </h1>
				<h2> Hello this is heading two </h2>
				<h3> Hello this is heading three </h3>
				<h4> Hello this is heading four </h4>
				<h5> Hello this is heading five </h5>
				<h6> Hello this is heading six </h6>
				<P3>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
					dolore, quidem dignissimos inventore harum voluptas blanditiis quo
					aliquid obcaecati adipisci vel pariatur quia sit neque saepe ducimus
					soluta! Repellendus, quasi veritatis! Sapiente tempore assumenda ipsa
					laboriosam fuga optio recusandae laborum officiis distinctio,
					molestias quidem tempora?
				</P3>
				{/* </div> */}
				{/* pages */}
				<Component {...pageProps} />
				{/* <ErrorBoundary> */}
				<Footer />
				{/* </ErrorBoundary> */}
			</ErrorBoundary>
		</>
	);
};

export default App;
