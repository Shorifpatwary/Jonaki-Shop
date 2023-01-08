import React, { useContext } from "react";
import Style from "./FormInput.module.scss";
import { FormContext, FormContextValue } from "./Form";

interface Props {
	label: string;
	type?: "text" | "password" | "email" | "number";
	name: string;
}

function FormInput({ label, type = "text", name }: Props) {
	const formContext = useContext(FormContext);
	const { form, handleFormChange } = formContext as FormContextValue;

	return (
		<div className={`${Style.form__input}`}>
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

export default React.memo(FormInput);
