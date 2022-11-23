import React from "react";

const RightArrow = (props) => {
	return (
		<svg
			{...props}
			width="7"
			height="10"
			viewBox="0 0 7 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.0332 8.18662L4.7732 5.44662C4.89737 5.32171 4.96706 5.15274 4.96706 4.97662C4.96706 4.80049 4.89737 4.63153 4.7732 4.50662L2.10654 1.83995"
				stroke="red"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="bevel"
			/>
		</svg>
	);
};

export default RightArrow;
