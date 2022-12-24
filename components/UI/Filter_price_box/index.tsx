import React from "react";
import Style from "./style.module.scss";

type PriceInputProps = {
	label: string;
	value: number;
	onChange: (value: number, inputName: string) => void;
};

const PriceInput: React.FC<PriceInputProps> = ({
	label = "Label",
	value = 23,
	onChange,
}) => (
	<label
		htmlFor={`price__input-${label?.toLowerCase()}`}
		className={`${Style.price__input_label} flex__column-start  gap__1`}
	>
		{label}:
		<input
			id={`price__input-${label?.toLowerCase()}`}
			type="number"
			value={value}
			onChange={(event) =>
				onChange(parseInt(event.target.value), label.toLowerCase())
			}
		/>
	</label>
);
export default React.memo(PriceInput);
