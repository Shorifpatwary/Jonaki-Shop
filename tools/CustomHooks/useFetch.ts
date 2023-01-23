import React, { useEffect, useState } from "react";
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
// <T extends HTTPMethod = "GET"> || avoiding default value for auto suggestion
interface UseFetchType {
	<T extends HTTPMethod>(
		url: string,
		method: T,
		body?: {},
		headers?: { [key: string]: any }
	): {
		data: {};
		error: string;
		isLoading: boolean;
		isError: boolean;
	};
}
const useFetch: UseFetchType = (
	url,
	method,
	body,
	headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
	}
) => {
	const [data, setData] = useState({});
	const [error, setError] = useState<string>("");
	const [isLoading, setLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	// fetch function
	const fetchAPI = async () => {
		setLoading(true);
		setIsError(false);
		try {
			const response = await fetch(url, {
				method: method,
				headers: headers,
				body: JSON.stringify(body),
			});
			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error as string);
			setIsError(true);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchAPI();
	}, [url]);

	return { data, error, isLoading, isError };
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
