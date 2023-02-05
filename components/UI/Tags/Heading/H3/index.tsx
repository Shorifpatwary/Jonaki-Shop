import style from "./style.module.scss";
const H3 = ({ className = "", children, TagName = "h3", ...props }) => {
	return (
		<TagName className={`${style.h3}  ${className}`} {...props}>
			{children}
		</TagName>
	);
};
export default H3;
