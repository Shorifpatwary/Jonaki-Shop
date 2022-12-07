import React from "react";
import style from "@/UiComponent/section/section.module.scss";
/**
 *
 * @param {*} name any string
 * @param {*} className
 * @param {*} rowClassName
 * @param {*} children jsx elements
 * @param {*} TagName default section,
 * @returns
 */
const Section = ({
	name = "",
	className = "",
	rowClassName = "",
	children = "",
	TagName = "section",
}) => {
	return (
		<TagName
			id={name}
			className={`${style.section__wrapper} flex__center ${className}`}
		>
			<div
				className={`${style.section__row}  flex__column-center ${rowClassName} gap__6`}
			>
				{children}
			</div>
			{/*  */}
		</TagName>
	);
};

export default Section;
