import React from "react";

const HeadingMd = (props) => {
	const TagName = `${props?.tag || "h3"}`;
	return (
		<TagName className={`_heading-md ${props?.class || ""}`} {...props}>
			{props.children}
		</TagName>
	);
};

export default HeadingMd;
