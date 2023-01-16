import React, { useState } from "react";
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
	// status false  for error / true for success
	const [message, setMessage] = useState<formMassageType>({
		message: "",
		status: true,
	});
	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	};
	// simple form validation function
	// const validateForm = (form: formDataType) => {
	// 	// Validate the first name field

	// };
	// handle form submit
	const submit = (form: formDataType) => {
		// validateForm(form);
		if (!form.firstname) {
			setMessage({ message: "Please enter your first name", status: false });
			return;
		} else if (form.firstname.length > 100) {
			setMessage({
				message: "First name must be 100 characters or less",
				status: false,
			});
			return;
		}
		// Validate the last name field
		if (!form.lastname) {
			setMessage({ message: "Please enter your last name", status: false });
			return;
		} else if (form.lastname.length > 100) {
			setMessage({
				message: "Last name must be 100 characters or less",
				status: false,
			});
			return;
		}
		// Validate the email address field
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
		// Validate the password field
		// if (!form.password) {
		// 	setMessage({ message: "Please enter a password", status: false });
		// 	return;
		// } else if (form.password.length < 8) {
		// 	setMessage({
		// 		message: "Password must be at least 8 characters long",
		// 		status: false,
		// 	});
		// 	return;
		// }
		else {
			setMessage({
				message: `Thanks for signing up, ${form?.firstname}`,
				status: true,
			});
			// form is valid submit this data
			const headers = {
				"X-Authorization": process.env.NEXT_PUBLIC_SECRET_KEY_LIVE as string,
				Accept: "application/json",
				"Content-Type": "application/json",
			};
			// using loop
			// const body: object = {};
			// for (const prop in form) {
			// 	body[prop] = form[prop];
			// }
			fetch("https://api.chec.io/v1/customers", {
				method: "POST",
				headers: headers,
				body: JSON.stringify({
					email: `${form.email}`, // required, must be unique

					firstname: `${form.firstname}`, // optional
					lastname: `${form.lastname}`, // optional
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					// Do something with the data

					if (data.error) {
						setMessage({
							message: `${
								data?.error?.errors?.email || data?.error?.massage || ""
							}`,
							status: false,
						});
					} else {
						// no error
						// algorithm  login and redirect
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	return (
		<Section name="registration">
			<h2>This is a registration page</h2>
			<div className="pad__6">
				<H2>Sign Up</H2>

				<Form submit={submit} initialValues={initialValues}>
					<FormInput label="First Name" name="firstname" />
					<FormInput label="Last Name" name="lastname" />
					<FormInput label="Email Address" type="email" name="email" />
					{/* <FormInput label="Password" type="password" name="password" /> */}
				</Form>
				<p>{message.message}</p>
				<p>{message.status ? "true" : "false"}</p>
			</div>
		</Section>
	);
};
export default Registration;
