import React from "react";
import Style from "@/UiComponent/Paragraph/paragraph.module.scss";
const Paragraph = (props) => {
	return (
		<p
			id={props?.name || ""}
			className={`${Style.paragraph}  ${props?.className || ""}`}
		>
			{props?.children || ""}
		</p>
	);
};

export default Paragraph;
