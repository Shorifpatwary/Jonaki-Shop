import React from "react";
import Style from "@/UiComponent/section/section.module.scss";
const Section = (props) => {
	return (
		<div
			id={props?.name || ""}
			className={`${Style.section__wrapper} flex__center ${
				props?.className || ""
			}`}
		>
			<div
				className={`${Style.section__row}  flex__column-center ${
					props?.rowClassName || ""
				}`}
			>
				{props?.children || ""}
			</div>
			{/*  */}
		</div>
	);
};

export default Section;
