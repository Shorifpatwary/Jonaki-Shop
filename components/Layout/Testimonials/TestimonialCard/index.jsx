import React from "react";
import Style from "./style.module.scss";
import Div from "@/UiComponent/Tags/Div";
import H5 from "@/UiComponent/Tags/Heading/H5";
import P1 from "@/UiComponent/Tags/P/P1";
import Image from "next/image";
const TestimonialCard = ({ text = "", name = " ", imageUrl = "" }) => {
	return (
		<Div className={`${Style.testimonial__card} flex__column-center gap__1 `}>
			<H5>{text}</H5>
			<P1>{name}</P1>
			<Image
				src={imageUrl}
				width={48}
				height={48}
				alt={text}
				//placeholder="blur" // https://via.placeholder.com/48x48?text=Visit+Shoping.com+Now
			/>
		</Div>
	);
};

export default TestimonialCard;
