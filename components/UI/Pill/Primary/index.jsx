import React from "react";
import Style from "./style.module.scss";

const PillPrimary = ({
	children = "Pill",
	className = "",
	href = "/",
	...props
}) => {
	return (
		<span
			href={href}
			className={`${Style.pill__primary} ${className}`}
			{...props}
		>
			{children}
		</span>
	);
};

export default PillPrimary;
