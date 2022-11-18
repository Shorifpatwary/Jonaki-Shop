import React from "react";
import { useRouter } from "next/router";
// import Footer from "../components/Footer";
const PageNotFound = () => {
	const router = useRouter();
	const goHomePage = () => {
		router.replace("/");
	};
	return (
		<>
			<div className="flex__column-center gap__3">
				<h2>Your Enter a incorrect URL . </h2>
				<h1>Page 404</h1>
				<button onClick={goHomePage}>Go Home Page </button>
			</div>
		</>
	);
};

export default PageNotFound;
// remove header and footer for 404 page only
PageNotFound.getLayout = (page) => {
	return (
		<>
			{page}
			<h2>Add Footer only </h2>
			{/* <Footer /> */}
		</>
	);
};
