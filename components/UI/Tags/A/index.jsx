import React from "react";
import style from "@/Tags/A/style.module.scss";
const A = ({ className = "", children, ...props }) => {
	return (
		<a className={`${style.A} ${className}`} {...props}>
			{children}
		</a>
	);
};
export default A;
