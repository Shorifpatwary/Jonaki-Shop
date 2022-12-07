import React from "react";
import style from "@/Tags/Button/style.module.scss";
import { RightArrow } from "@/public/images";
/**
 *
 * @param {String} variant || primary || outline || secondary
 * @param {String} size || md || lg || sm
 * @param {String} icon || append || prepend
 * @param {String} children
 * @param {any} TagName "" any
 * @returns
 */
const Button = ({
	variant = "primary",
	size = "md",
	icon = null,
	className = null,
	children = "Button",
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
