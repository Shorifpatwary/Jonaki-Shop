import React from "react";
import style from "@/Tags/Button/style.module.scss";
import { RightArrow } from "@/public/images";
const Button = ({
	variant = "primary", // primary , outline , secondary
	size = "md", // lg , md , sm
	icon = null, // append , prepend
	className = null,
	children = "Button Text", // = null
	TagName = "button", // a or anything
	...props
}) => {
	console.log(RightArrow, "right arrow from button");
	return (
		<TagName
			className={` flex__center  ${style[variant]} ${style[size]}  ${style.Button__class}  ${className}`}
			{...props}
		>
			{icon === "prepend" && (
				<img src={RightArrow.src} className="right__arrow" />
			)}
			<span>{children}</span>
			{/* {icon === "prepend" && (
				<img src={rightArrow.src} className="right__arrow" />
			)} */}
			{icon === "append" && (
				<img src={RightArrow.src} className="right__arrow" />
			)}
		</TagName>
	);
};
export default Button;
// use
// import Button from "@/UiComponent/Tags/Button";
