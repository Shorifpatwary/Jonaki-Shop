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
	icon = "",
	className = "",
	children = "Button",
	TagName = "button", // a or anything
	...props
}) => {
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
// import Button from "@/UiComponent/Tags/Button
// ====== WITH TYPESCRIPT ======
// import React, { ButtonHTMLAttributes } from "react";
// import style from "@/Tags/Button/style.module.scss";
// import { RightArrow } from "@/public/images";

// type ButtonVariants = "primary" | "outline" | "secondary";
// type ButtonSizes = "md" | "lg" | "sm";
// type ButtonIcons = "append" | "prepend";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
// 	variant?: ButtonVariants;
// 	size?: ButtonSizes;
// 	icon?: ButtonIcons;
// 	className?: string;
// 	children: React.ReactNode;
// 	TagName?: keyof JSX.IntrinsicElements | "a";
// }

// const Button: React.FC<ButtonProps> = ({
// 	variant = "primary",
// 	size = "md",
// 	icon = "",
// 	className = "",
// 	children = "Button",
// 	TagName = "button",
// 	...props
// }) => {
//
// 	return (
// 		<TagName
// 			className={` flex__center  ${style[variant]} ${style[size]}  ${style.Button__class}  ${className}`}
// 			{...props}
// 		>
// 			{icon === "prepend" && (
// 				<img src={RightArrow.src} className="right__arrow" />
// 			)}
// 			<span>{children}</span>
// 			{icon === "append" && (
// 				<img src={RightArrow.src} className="right__arrow" />
// 			)}
// 		</TagName>
// 	);
// };

// export default Button;

// // use
// // import Button from "@/UiComponent/Tags/Button";

// use
// import Button from "@/UiComponent/Tags/Button";
