import React from "react";
// import ButtonPrimaryCss from "";
import ButtonPrimaryCss from "./BPrimary.module.scss";
const ButtonPrimary = ({ className, children, tag, ...props }) => {
	const TagName = `${tag || "button"}`;

	return (
		<TagName
			className={ButtonPrimaryCss.ButtonPrimary + " " + className || null}
			{...props}
		>
			{children}
		</TagName>
	);
};

export default ButtonPrimary;
