import React from "react";
import style from "@/Tags/Heading/H4/style.module.scss";
const H4 = ({ className, children, TagName = "h4", ...props }) => {
	return (
		<TagName className={`${style.h4}  ${className || null}`} {...props}>
			{children}
		</TagName>
	);
};
export default H4;
