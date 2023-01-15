import React, { useMemo } from "react";
import Style from "./style.module.scss";
import PillSecondary from "@/components/UI/Pill/Secondary";

const Filter_cat_item = ({ value, name, checked, handleChange, products }) => {
	return (
		<div
			className={`${Style.Filter__cat_item} flex__center-sb w__10 gap__1`}
			htmlFor={value}
		>
			{/* <div key={id} className="flex__column-start"> */}
			<div className={`${Style.Filter__cat_item} flex__start gap__1`}>
				<input
					id={value}
					type="checkbox"
					checked={checked}
					value={value}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor={value}> {name} </label>
			</div>
			<span className="w__1">{products}</span>
			{/* </div> */}
		</div>
	);
};

export default Filter_cat_item;
