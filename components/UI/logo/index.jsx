import React from "react";

const Logo = (props) => {
	return (
		<img
			id={props?.name || "logo"}
			className={`_logo ${props?.className || ""}`}
			{...props}
			alt="logo"
		/>
	);
};

export default Logo;
