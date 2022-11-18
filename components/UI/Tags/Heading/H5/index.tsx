import React from "react";
import style from "@/Tags/Heading/H5/style.module.scss";
const H5 = ({ className, children, TagName = "h5", ...props }) => {
	return (
		<TagName className={`${style.h5}  ${className || null}`} {...props}>
			{children}
		</TagName>
	);
};
export default H5;
