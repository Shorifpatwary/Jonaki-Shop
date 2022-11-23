// ============= FormInput.js
import { useContext } from "react";
import { FormContext } from "./Form";

function FormInput(props) {
	const { label, type = "text", name } = props;

	const formContext = useContext(FormContext);
	const { form, handleFormChange } = formContext;

	return (
		<div className="FormInput">
			<label>{label}</label>
			<input
				type={type}
				name={name}
				value={form[name]}
				onChange={handleFormChange}
			/>
		</div>
	);
}

// export default FormInput;

// Form.js
import React, { useState } from "react";

export const FormContext = React.createContext({
	form: {},
});

function Form(props) {
	const { children, submit = () => {}, initialValues } = props;

	const [form, setForm] = useState(initialValues);

	const handleFormChange = (event) => {
		// Get the name of the field that caused this change event
		// Get the new value of this field
		const { name, value } = event.target;

		// Update state
		// Assign new value to the appropriate form field
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<form className="Form">
			<FormContext.Provider
				value={{
					form,
					handleFormChange,
				}}
			>
				{children}
			</FormContext.Provider>

			<button type="button" onClick={() => submit(form)}>
				Submit
			</button>
		</form>
	);
}

// export default Form;

// ======== app.js
import { useState } from "react";

import Form from "./Form";
import FormInput from "./FormInput";

function App() {
	const [message, setMessage] = useState("");

	const initialValues = {
		firstName: "",
		lastName: "",
		emailAddress: "",
		password: "",
	};

	const submit = (form) => {
		setMessage(
			`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`
		);
	};

	return (
		<div className="App">
			<h1>Sign Up</h1>

			<Form submit={submit} initialValues={initialValues}>
				<FormInput label="First Name" name="firstName" />
				<FormInput label="Last Name" name="lastName" />
				<FormInput label="Email Address" type="email" name="emailAddress" />
				<FormInput label="Password" type="password" name="password" />
			</Form>

			<p>{message}</p>

			<h2>Log In</h2>
			<Form
				submit={(form) => {
					alert(`Logged in as ${form.username}!`);
				}}
				initialValues={{
					username: "",
					password: "",
				}}
			>
				<FormInput label="Username" name="username" />
				<FormInput label="Password" name="password" />
			</Form>
		</div>
	);
}

// export default App;
