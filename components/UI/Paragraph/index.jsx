import React from "react";

const Paragraph = (props) => {
	return (
		<p
			id={props?.name || ""}
			className={`_paragraph ${props?.className || ""}`}
		>
			{props?.children || ""}
		</p>
	);
};

export default Paragraph;
