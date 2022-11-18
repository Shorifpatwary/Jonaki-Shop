import React from "react";
import style from "@/Tags/Button/style.module.scss";
import { FiChevronRight, FaChevronLeft } from "react-icons/fa";
const Button = ({
	variant = "primary", // primary , outline , secondary
	size = "md", // lg , md , sm
	icon = null, // append , prepend
	className = null,
	children, // = null
	TagName = "Button", // a or anything
	...props
}) => {
	return (
		<TagName
			className={` ${style[variant]} ${style[size]}     ${style.Button__class}  ${className}`}
			{...props}
		>
			{icon === "prepend" && <FaChevronLeft />}

			{icon === "prepend" && <i className={` fa fa-chevron-left`}></i>}
			<span>{children}</span>
			{icon === "append" && <i className={`fa fa-chevron-right`}></i>}
		</TagName>
	);
};
export default Button;
