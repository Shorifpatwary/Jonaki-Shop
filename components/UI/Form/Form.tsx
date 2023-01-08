import React, { useState } from "react";
import Button from "@/UiComponent/Tags/Button";
export interface FormContextValue {
	form: { [key: string]: any };
	handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormContext = React.createContext<FormContextValue>({
	form: {},
	handleFormChange: () => {
		return;
	},
});

interface Props {
	children: React.ReactNode;
	submit: (form: {}) => void;
	initialValues: { [key: string]: unknown };
}

const Form = ({ children, submit = () => {}, initialValues }: Props) => {
	const [form, setForm] = useState(initialValues);
	const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
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

			<Button size="sm" type="button" onClick={() => submit(form)}>
				Submit
			</Button>
		</form>
	);
};

export default Form;
