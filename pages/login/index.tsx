import React, { useState } from "react";
import Section from "@/UiComponent/section";
import H2 from "@/UiComponent/Tags/Heading/H2";
import Form from "@/UiComponent/Form/Form";
import FormInput from "@/UiComponent/Form/FormInput";

const Registration = () => {
	const [message, setMessage] = useState("");
	const initialValues = {
		email: "",
	};
	const submit = (form: { email: string; password: string }) => {
		setMessage(`Thanks for logging up, ${form.email}`);
	};
	return (
		<Section name="registration">
			<h2>Login page coming soon</h2>
			<div className="pad__6">
				<H2>Login page </H2>
				<Form submit={submit} initialValues={initialValues}>
					<FormInput label="Email Address" type="email" name="email" />
				</Form>
				<p>{message}</p>
			</div>
		</Section>
	);
};
export default Registration;
