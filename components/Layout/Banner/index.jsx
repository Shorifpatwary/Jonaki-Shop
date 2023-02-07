import React from "react";
import Image from "next/image";
import Link from "next/link";
import H4 from "@/components/UI/Tags/Heading/H4";
import H6 from "@/components/UI/Tags/Heading/H6";
import P3 from "@/components/UI/Tags/P/P3";
import Button from "@/UiComponent/Tags/Button";

const Banner = ({ category = [] }) => {
	const item = category;
	const name = item.name;
	const description = item.description.slice(0, 210) + "...";

	return (
		<div className="banner__wrapper ">
			<Image
				src={item.assets[0].url}
				// width={400}
				// height={300}
				placeholder="https://via.placeholder.com/300x250.png?text=Jonaki.com+placeholder"
				quality={50}
				fill
				style={{
					objectFit: "cover",
					zIndex: "-1",
					width: "100%",
					height: "100%",
					// filter: " brightness(50%)",
					// backdropFilter: " brightness(50%)",
				}}
			/>
			<div className="banner__row flex__column-start gap__2">
				<div className="text">
					<H6 className="subtitle">
						{`Special ${name || "Banner"} Products`}{" "}
					</H6>
					<H4 className="title">{` ${name || "Banner"} Products`} </H4>
					{/* <P3>
						{description ||
							"Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
					</P3> */}
				</div>
				<div className="call__to-action">
					<Link
						href={
							item.slug ? `/products?category_slug=${item.slug}` : "/category"
						}
					>
						<Button variant="outline" icon="append">
							Read More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
