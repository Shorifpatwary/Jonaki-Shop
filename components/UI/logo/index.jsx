import React from "react";

const Logo = (props) => {
	return (
		<div>
			<img
				id={props?.name || "logo"}
				className={`_logo ${props?.className || ""}`}
				{...props}
				alt="logo"
			/>
		</div>
	);
};

export default Logo;
