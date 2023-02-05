import Link from "next/link";

const PageNotFound = () => {
	return (
		<>
			<div className="flex__column-center gap__3">
				<h2>Your Enter a incorrect URL . </h2>
				<h1>Page 404</h1>
				<Link href="/">Go Home Page</Link>
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
			<Link href="/"> Go Back </Link>
			{/* <Footer /> */}
		</>
	);
};
