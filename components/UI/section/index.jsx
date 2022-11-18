import React from "react";
// style import from style > main.scss file
const Section = (props) => {
	return (
		<div
			id={props?.name || ""}
			className={`_section__wrapper flex__center ${
				props?.className || ""
			}`}
		>
			<div
				className={`_section__row flex__column-center ${
					props?.rowClassName || ""
				}`}
			>
				{props?.children || ""}
			</div>
		</div>
	);
};

export default Section;
