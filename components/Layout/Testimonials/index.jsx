import React from "react";
import Carousel from "react-multi-carousel";

import Style from "./style.module.scss";
import Section from "@/components/UI/Section";
import Div from "@/UiComponent/Tags/Div";
import H4 from "@/UiComponent/Tags/Heading/H4";
import Button from "@/UiComponent/Tags/Button";
import TestimonialCard from "@/layoutComponent/Testimonials/TestimonialCard";

// responsive slider
const responsive = {
	desktop: {
		breakpoint: { max: 30000, min: 992 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 992, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Testimonials = ({ testimonial }) => {
	const title = testimonial.title;
	const testimonials = testimonial.testimonials;
	console.log(testimonials, "from testimonials");
	return (
		<Section
			name="testimonial__section"
			className={`${Style.testimonial__section} gap__1`}
			rowClassName={`${Style.testimonial__section_row}`}
		>
			<Div className={`${Style.section__head} flex__center-sb w__10 `}>
				<H4>{title || "Section Title "}</H4>
				<Button variant="outline" size="sm" icon="append">
					Button
				</Button>
			</Div>
			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={false}
				// showDots={true}
				// infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				keyBoardControl={true}
				customTransition="all .5s"
				transitionDuration={500}
				containerClass={`${Style.carousel__container} w__10 gap__2`}
				removeArrowOnDeviceType={["mobile"]}
				dotListClass="custom__dot-list-style-class"
				itemClass={`${Style.carousel__item_class}`}
			>
				{testimonials.map((testimonial) => (
					<TestimonialCard
						text={testimonial.text}
						name={testimonial.name}
						imageUrl={testimonial.imageUrl}
					/>
				))}
			</Carousel>
		</Section>
	);
};

export default Testimonials;
