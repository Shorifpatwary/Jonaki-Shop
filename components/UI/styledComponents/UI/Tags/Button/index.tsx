import styled from "styled-components";

const Button = ({ icon, className, children, ...props }) => {
	return (
		<button className={` flex__center-sb ${className}`} {...props}>
			{icon === "prepend" && <i className={` fa fa-chevron-left`}></i>}
			<span>{children}</span>
			{icon === "append" && <i className={`fa fa-chevron-right`}></i>}
		</button>
	);
};

export default styled(Button)`
	transition: all 0.5s;
	border-radius: 12px;
	gap: 2px;
	cursor: pointer;
	// transition inherited from button tag .
	&:hover {
		gap: 5px;
		transform: scaleX(1.2);
	}
	${(props) => {
		const { variant, size } = props;

		if (variant === "primary" || variant === undefined) {
			return `
		 background : #46760A;
		 color : white ; 
		 border: 2px solid #46760A; 
		  `;
		} else if (variant === "outline") {
			return `
		 background : transparent;
		 color : black;
		 border: 2px solid #46760A;
		 span {
			color :  #46760A 
		 }
		  `;
		} else if (variant === "secondary") {
			return `
		 background : #F5F5F5;
		 color : black ; 
		
		  `;
		}
		// size
		if (size === "lg" || size === undefined) {
			return `
			padding: 0.8rem 1.2rem;
		  `;
		} else if (size === "md") {
			return `
			padding: 0.8rem 3rem;
		  `;
		} else if (size === "sm") {
			return `
			padding: 0.9rem;
		
		  `;
		}
	}};
`;
