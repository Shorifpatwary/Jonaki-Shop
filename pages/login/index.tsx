import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/tools/Context/authProvider";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import Section from "@/UiComponent/Section";
import H2 from "@/UiComponent/Tags/Heading/H2";
import Form from "@/UiComponent/Form/Form";
import FormInput from "@/UiComponent/Form/FormInput";
import Button from "@/UiComponent/Tags/Button";

type formMassageType = {
	message: string;
	status: boolean | null;
};

const Login = () => {
	const router = useRouter();

	// error
	const { issueAndLogin, exchangeToken, setUserCookie } =
		useContext(AuthContext);

	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const [message, setMessage] = useState<formMassageType>({
		message: "",
		status: true,
	});
	const initialValues = {
		email: "",
	};
	const submit = async (form: { email: string }) => {
		if (!form.email) {
			setMessage({ message: "Please enter your email address", status: false });
			return;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setMessage({
				message: "Please enter a valid email address",
				status: false,
			});
			return;
		}
		// pass data fot server
		// form is valid submit this data
		const data = await issueAndLogin(
			form.email,
			"http://localhost:3000/profile/mail-verification"
		);
		if (!data.error) {
			// exchange token for JWT
			const exchangeData = await exchangeToken(data?.token);

			setMessage({
				message: `Login successful`,
				status: true,
			});
			// set cookie
			Cookies.set("customerId", exchangeData.customer_id, { expires: 29 });
			Cookies.set("JWT", exchangeData.jwt, { expires: 29 });
			// redirect user
			router.replace("/profile");
		} else {
			setMessage({
				message: `Error: ${data.error.message}`,
				status: false,
			});
		}
	};

	return (
		<Section name="registration">
			<div className="pad__6">
				<H2>Login page </H2>
				<Form submit={submit} initialValues={initialValues}>
					<FormInput label="Email Address" type="email" name="email" />
				</Form>

				<div>
					Don't have an account ? <Link href="/registration">Sign Up</Link>
				</div>
				<p className={message.status === true ? "success" : "error"}>
					{message.message}
				</p>
			</div>
			{/* verification massage  */}
			{isAlertOpen ? (
				<div className="verification__alert flex__center gap__2">
					<span className="massage">Please verify Your Email Account </span>
					<Button
						size="sm"
						variant="outline"
						onClick={() => setIsAlertOpen(false)}
					>
						X
					</Button>
				</div>
			) : (
				""
			)}
		</Section>
	);
};

export default Login;

// ==== ========== ======
// this code useful when useFetch is used.
// const { data, error, isLoading, isError } = issueAndLogin(
// 	form.email,
// 	"http://localhost:3000/profile/mail-verification"
// );
// if (isLoading) {
// 	setMessage({
// 		message: "Loading ...",
// 		status: false,
// 	});
// 	return;
// } else if (isError) {
// 	setMessage({
// 		message: error,
// 		status: false,
// 	});
// 	return;
// } else {
// 	setMessage({
// 		message: `We have sent an email to ${data?.mail} this account. Please verify your account`,
// 		status: true,
// 	});
// 	return;
// }
