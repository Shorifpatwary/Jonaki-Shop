import Style from "./style.module.scss";
const A = ({ className = "", children, ...props }) => {
	return (
		<a className={`${Style.A} ${className}`} {...props}>
			{children}
		</a>
	);
};
export default A;
