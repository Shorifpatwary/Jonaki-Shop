import React from "react";

const Heading_1 = (props) => {
	return (
		<>
			<h2 className="_section__heading-1" {...props}>
				{props.children}
			</h2>
		</>
	);
};

export default Heading_1;
