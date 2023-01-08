import React, { useState } from "react";
import Section from "@/UiComponent/section";
import H2 from "@/UiComponent/Tags/Heading/H2";
import Form from "@/UiComponent/Form/Form";
import FormInput from "@/UiComponent/Form/FormInput";

const Registration = () => {
	const [message, setMessage] = useState("");

	const initialValues = {
		emailAddress: "",
		password: "",
	};

	const submit = (form: { emailAddress: string; password: string }) => {
		setMessage(
			`Thanks for logging up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`
		);
	};
	return (
		<Section name="registration">
			<h2>This is a Login page </h2>
			<div className="pad__6">
				<H2>Login page </H2>

				<Form submit={submit} initialValues={initialValues}>
					<FormInput label="Email Address" type="email" name="emailAddress" />
					<FormInput label="Password" type="password" name="password" />
				</Form>

				<p>{message}</p>
			</div>
		</Section>
	);
};

export default Registration;
