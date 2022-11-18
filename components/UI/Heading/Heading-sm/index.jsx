import React from "react";

const HeadingSm = (props) => {
	const TagName = `${props?.tag || "h4"}`;
	return (
		<TagName className={`_heading-sm ${props?.class || ""}`} {...props}>
			{props.children}
		</TagName>
	);
};

export default HeadingSm;
