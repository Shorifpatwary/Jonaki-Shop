import React from "react";

const HeadingLg = (props) => {
	const TagName = `${props?.tag || "h2"}`;
	return (
		<TagName className={`_heading-lg ${props?.class || ""}`} {...props}>
			{props.children}
		</TagName>
	);
};

export default HeadingLg;
