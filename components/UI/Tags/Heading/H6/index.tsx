import style from "./style.module.scss";
const H6 = ({ className, children, TagName = "h6", ...props }) => {
	return (
		<TagName className={`${style.h6}  ${className || null}`} {...props}>
			{children}
		</TagName>
	);
};
export default H6;
