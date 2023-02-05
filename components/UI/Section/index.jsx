import Style from "./style.module.scss";
/**
 * @param {string} name any string
 * @param {string} className
 * @param {string} rowClassName
 * @param {*} children jsx elements
 * @param {string} TagName default section,
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
			className={`${Style.section__wrapper} flex__center ${className}`}
		>
			<div
				className={`${Style.section__row}  flex__column-center ${rowClassName} gap__6`}
			>
				{children}
			</div>
			{/*  */}
		</TagName>
	);
};

export default Section;
