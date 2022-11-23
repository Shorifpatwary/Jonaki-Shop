import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useSWR(url) {
	const { data, error } = useSWR({ url }, fetcher);
	return {
		user: data,
		isLoading: !error && !data,
		isError: error,
	};
}
export default useSWR;
//   use
// function Avatar({ id }) {
// 	const { user, isLoading, isError } = useSWR(id);

// 	if (isLoading) return <Spinner />;
// 	if (isError) return <Error />;
// 	return <img src={user.avatar} />;
// }
