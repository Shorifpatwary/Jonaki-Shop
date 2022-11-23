// useAxios hook

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = ({ url, method, body = null, headers = null }) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		axios[method](url, JSON.parse(headers), JSON.parse(body))
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, [method, url, body, headers]);

	return { response, error, loading };
};

// export default useAxios;

/**
 *  how to use this  hook .
 * @returns app component
 */

const App = () => {
	const { response, loading, error } = useAxios({
		method: "post",
		url: "/posts",
		headers: JSON.stringify({ accept: "*/*" }),
		body: JSON.stringify({
			userId: 1,
			id: 19392,
			title: "title",
			body: "Sample text",
		}),
	});
	const [data, setData] = useState([]);

	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);

	return (
		<div className="App">
			<h1>Posts</h1>

			{loading ? (
				<p>loading...</p>
			) : (
				<div>
					{error && (
						<div>
							<p>{error.message}</p>
						</div>
					)}
					<div>{data && <p>{data.id}</p>}</div>
				</div>
			)}
		</div>
	);
};

export default App;
