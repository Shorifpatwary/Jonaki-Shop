import React from "react";
import style from "@/Tags/Button/Primary/style.module.scss";
const BtnPrimary = ({
	className,
	children,
	size = "md",
	TagName = "button",
	...props
}) => {
	return (
		<TagName
			className={`${style.Btn__primary} ${style[size]}  ${className || ""}`}
			{...props}
		>
			{children}
		</TagName>
	);
};
export default BtnPrimary;
