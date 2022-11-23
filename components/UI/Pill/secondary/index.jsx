import React from "react";

const PillSecondary = ({ children = "Pill", ...props }) => {
	return (
		<span className={`${style.pill_secondary}`} {...props}>
			{children}
		</span>
	);
};

export default PillSecondary;
