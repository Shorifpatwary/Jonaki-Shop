import React from "react";
import style from "@/Tags/P/P3/style.module.scss";
const P3 = ({ className = "", children, TagName = "p", ...props }) => {
	return (
		<TagName className={`${style.P} ${className}`} {...props}>
			{children}
		</TagName>
	);
};
export default P3;
