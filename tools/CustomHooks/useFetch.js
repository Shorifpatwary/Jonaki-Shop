import React, { useEffect, useState } from "react";

const useFetch = (
	url,
	method = "GET",
	headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
	}
) => {
	const [data, setData] = useState({});
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(false);
	// fetch function
	const fetchAPI = async () => {
		try {
			const response = await fetch(url, {
				method: method,
				headers: headers,
			});
			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		setLoading(true);
		fetchAPI();
	}, [url]);

	return { data, error, loading };
};
export default useFetch;
/**
 *  how to use this  hook .
 * @returns app component
 */

// const App = () => {
// 	const { response, loading, error } = useAxios({
// 		method: "post",
// 		url: "/posts",
// 		headers: JSON.stringify({ accept: "*/*" }),
// 		body: JSON.stringify({
// 			userId: 1,
// 			id: 19392,
// 			title: "title",
// 			body: "Sample text",
// 		}),
// 	});
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		if (response !== null) {
// 			setData(response);
// 		}
// 	}, [response]);

// 	return (
// 		<div className="App">
// 			<h1>Posts</h1>

// 			{loading ? (
// 				<p>loading...</p>
// 			) : (
// 				<div>
// 					{error && (
// 						<div>
// 							<p>{error.message}</p>
// 						</div>
// 					)}
// 					<div>{data && <p>{data.id}</p>}</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// // export default App;
