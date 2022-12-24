import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Style from "./style.module.scss";
const Loading = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url) => url !== router.asPath && setLoading(true);
		const handleComplete = (url) =>
			url === router.asPath &&
			setTimeout(() => {
				setLoading(false);
			}, 5000);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	});
	return (
		loading && (
			<div className={`${Style.spinner__wrapper}`}>
				<div className={`${Style.spinner}`}>{/* <h2>Loading </h2> */}</div>
			</div>
		)
	);
};

export default Loading;
