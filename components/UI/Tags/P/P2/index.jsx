import style from "./style.module.scss";
const P2 = ({ className = "", children, TagName = "p", ...props }) => {
	return (
		<TagName className={`${style.P} ${className}`} {...props}>
			{children}
		</TagName>
	);
};
export default P2;
