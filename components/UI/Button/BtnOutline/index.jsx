import React from "react";
// import ButtonPrimaryCss from "";
import BOP from "./BOutline.module.scss";
const ButtonOutline = ({ className, children, tag, ...props }) => {
	const TagName = `${tag || "button"}`;

	return (
		<TagName
			className={BOP.ButtonOutline + " " + className || null}
			{...props}
		>
			{children}
		</TagName>
	);
};

export default ButtonOutline;
