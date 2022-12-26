import React from "react";
import Style from "./style.module.scss";

const PillSecondary = ({ children = "Pill", ...props }) => {
	return (
		<span className={`${Style.pill__secondary} normal`} {...props}>
			{children}
		</span>
	);
};

export default PillSecondary;
