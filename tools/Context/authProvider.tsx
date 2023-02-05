import { createContext } from "react";

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthContext = createContext<{}>({});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	// request header
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_SECRET_KEY_LIVE as string,
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	// const [userCookieState, setUserCookieState] = useState({
	// 	customerId: "",
	// 	JWT: "",
	// });
	// commerce js issue and login token
	const issueAndLogin = async (email: string, base_url: string) => {
		try {
			const res = await fetch(`https://api.chec.io/v1/customers/issue-token`, {
				method: "POST",
				body: JSON.stringify({ email, base_url }),
				headers: headers,
			});
			const data = await res.json();

			return data;
		} catch (error) {
			console.log(error);
		}
	};
	// commerce js issue and login token
	const emailAndLogin = async (email: string, base_url: string) => {
		try {
			const res = await fetch(`https://api.chec.io/v1/customers/email-token`, {
				method: "POST",
				headers: headers,
				body: JSON.stringify({ email, base_url }),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	// commerce js  and login token
	const exchangeToken = async (token: string) => {
		try {
			const res = await fetch(
				`https://api.chec.io/v1/customers/exchange-token`,
				{
					method: "POST",
					headers: headers,
					body: JSON.stringify({ token }),
				}
			);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	// SET USER COOKIE FUNCTION
	// const setUserCookie = (customerId: string, JWT: string) => {
	// 	// get expires data
	// 	var expires = new Date();
	// 	expires.setDate(expires.getDate() + 30);
	// 	// set cookie
	// 	// add customer id to the cookie
	// 	document.cookie = `customerId=${customerId}; expires=${expires.toUTCString()};`;
	// 	// add customer JWT to the cookie
	// 	document.cookie = `JWT=${JWT}; expires=${expires.toUTCString()};`;
	// 	// Set user cookie state
	// 	// setUserCookieState({
	// 	// 	customerId: customerId,
	// 	// 	JWT: JWT,
	// 	// });
	// };

	// DELETE USER COOKIE FUNCTION
	// const deleteUserCookie = () => {
	// 	var expires = new Date();
	// 	expires.setDate(expires.getDate() - 30);
	// 	// delete customer id
	// 	document.cookie = `customerId=""; expires=${expires.toUTCString()};`;
	// 	// delete JWT
	// 	document.cookie = `JWT=""; expires=${expires.toUTCString()};`;
	// 	// SET user cookie state
	// 	// setUserCookieState({
	// 	// 	customerId: "",
	// 	// 	JWT: "",
	// 	// });
	// };
	// SET USER COOKIE ON FIRST RENDER
	// useEffect(() => {
	// 	setUserCookieState({
	// 		customerId: getCookieParser("customerId") || "",
	// 		JWT: getCookieParser("JWT") || "",
	// 	});
	// }, []);

	return (
		<AuthContext.Provider
			value={{
				issueAndLogin,
				exchangeToken,
				emailAndLogin,
				// setUserCookie,
				// deleteUserCookie,
				// userCookieState,
				// setUserCookieState,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
