import React from "react";
import style from "@/Tags/Heading/H2/style.module.scss";
const H2 = ({ className = "", children, TagName = "h2", ...props }) => {
	return (
		<TagName className={`${style.h2}  ${className || null}`} {...props}>
			{children}
		</TagName>
	);
};
export default H2;
