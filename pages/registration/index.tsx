import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/tools/Context/authProvider";

import Section from "@/UiComponent/Section";
import H2 from "@/UiComponent/Tags/Heading/H2";
import Form from "@/UiComponent/Form/Form";
import FormInput from "@/UiComponent/Form/FormInput";

type formDataType = {
	firstname: string;
	lastname: string;
	email: string;
};

type formMassageType = {
	message: string;
	status: boolean | null;
};

const Registration = () => {
	const [message, setMessage] = useState<formMassageType>({
		message: "",
		status: true,
	});
	const { emailAndLogin } = useContext(AuthContext);

	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
	};

	const validateForm = (form: formDataType) => {
		if (!form.firstname) {
			setMessage({ message: "Please enter your first name", status: false });
			return false;
		} else if (form.firstname.length > 100) {
			setMessage({
				message: "First name must be 100 characters or less",
				status: false,
			});
			return false;
		}

		if (!form.lastname) {
			setMessage({ message: "Please enter your last name", status: false });
			return false;
		} else if (form.lastname.length > 100) {
			setMessage({
				message: "Last name must be 100 characters or less",
				status: false,
			});
			return false;
		}

		if (!form.email) {
			setMessage({ message: "Please enter your email address", status: false });
			return false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setMessage({
				message: "Please enter a valid email address",
				status: false,
			});
			return false;
		}
		return true;
	};
	// create user function
	const createUser = async (form: formDataType) => {
		try {
			const headers = {
				"X-Authorization": process.env.NEXT_PUBLIC_SECRET_KEY_LIVE as string,
				Accept: "application/json",
				"Content-Type": "application/json",
			};

			const response = await fetch("https://api.chec.io/v1/customers", {
				method: "POST",
				headers: headers,
				body: JSON.stringify({
					email: `${form.email}`,
					firstname: `${form.firstname}`,
					lastname: `${form.lastname}`,
				}),
			});

			const data = await response.json();
			setMessage({ message: "Verify Your Email Account", status: true });
			if (data.error) {
				setMessage({
					message: `${
						data?.error?.errors?.email || data?.error?.massage || ""
					}`,
					status: false,
				});
			} else {
				const emailLoginData = await emailAndLogin(
					form.email,
					"http://localhost:3000/profile/mail-verification"
				);
				if (emailLoginData.error) {
					setMessage({
						message: emailLoginData.error.message,
						status: false,
					});
					return;
				}
			}
		} catch (error) {
			setMessage({ message: error.message, status: false });
		}
	};
	const submit = (form: formDataType) => {
		if (!validateForm(form)) return;
		// send data to the server for create account
		createUser(form);
	};
	return (
		<Section name="registration">
			<div className="pad__6">
				<H2>Sign Up</H2>
				<Form submit={submit} initialValues={initialValues}>
					<FormInput label="First Name" name="firstname" />
					<FormInput label="Last Name" name="lastname" />
					<FormInput label="Email Address" type="email" name="email" />
				</Form>
				<div>
					Already have an account ? <Link href="/login">Login</Link>
				</div>
				<p className={message.status === true ? "success" : "error"}>
					{message.message}
				</p>
			</div>
		</Section>
	);
};
export default Registration;
