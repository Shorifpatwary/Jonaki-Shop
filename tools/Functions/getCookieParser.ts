// // get cookie value function
// const getCookieParser = (cookieName: string): string | null => {
// 	const cookies = document.cookie.split("; ");
// 	const cookieValue = cookies.find((cookie) =>
// 		cookie.startsWith(`${cookieName}=`)
// 	);
// 	if (!cookieValue) {
// 		return null;
// 	}
// 	return cookieValue.split("=")[1];
// };
// export default getCookieParser;
