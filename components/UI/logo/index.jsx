import React from "react";
import style from "@/UiComponent/Logo/logo.module.scss";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
const Logo = ({ name = "logo", className = "", ...props }) => {
	return (
		<Link href="/" className={` flex__start ${style.logo__main} ${className}`}>
			<Image
				id={name}
				className={`${style.logo__main} ${className}`}
				{...props}
				alt="Jonaki online shop"
				src={logo}
				width={280}
				height={20}
				quality={100}
			/>
		</Link>
	);
};

export default Logo;
