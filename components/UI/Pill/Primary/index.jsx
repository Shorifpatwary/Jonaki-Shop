import React from "react";
import style from "@/UiComponent/Pill/Primary/style.module.scss";
import Link from "next/link";
const PillPrimary = ({
	children = "Pill",
	className = "",
	href = "/",
	...props
}) => {
	return (
		<Link
			href={href}
			className={`${style.pill_primary} ${className}`}
			{...props}
		>
			{children}
		</Link>
	);
};

export default PillPrimary;
