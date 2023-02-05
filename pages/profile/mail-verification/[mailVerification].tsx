import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AuthContext } from "@/tools/Context/authProvider";
import H3 from "@/components/UI/Tags/Heading/H3";

const MailVerification = () => {
	const { exchangeToken } = useContext(AuthContext);
	const [message, setMessage] = useState({ message: "", status: true });
	const [token, setToken] = useState("");
	const router = useRouter();

	// verification handler
	const verificationHandler = async () => {
		if (token) {
			const data = await exchangeToken(token);
			if (data.error) {
				setMessage({
					message: `Error: ${data?.error?.message}`,
					status: false,
				});
				return;
			} else {
				Cookies.set("customerId", data.customer_id, { expires: 7 });
				Cookies.set("JWT", data.JWT, { expires: 7 });
				const url = localStorage.getItem("redirectUrl") || "/profile";
				router.replace(url);
			}
		}
	};
	// verificationHandler();
	useEffect(() => {
		if (
			router.query.mailVerification &&
			router.query.mailVerification !== token
		) {
			setToken(router.query.mailVerification);
		}
	}, [router.query.mailVerification, token]);
	// //useEffect hook
	useEffect(() => {
		verificationHandler();
	}, [token]);
	if (message.status === false) {
		return <H3 className="text__center text__red">{message.message}</H3>;
	}
};

export default MailVerification;
