import React from "react";
import style from "@/Tags/Heading/H1/style.module.scss";
const H1 = ({ className, children, TagName = "h1", ...props }) => {
	return (
		<TagName className={`${style.h1}  ${className || null}`} {...props}>
			{children}
		</TagName>
	);
};
export default H1;
