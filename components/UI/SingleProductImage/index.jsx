import React, { useState } from "react";

import Image from "next/image";
import Style from "./Style.module.scss";

const SingleProductImage = ({ productImages }) => {
	console.log(productImages, "product image from single product image ");
	console.log(Style, "style object ");
	// Set up state to store the current main image
	const [mainImage, setMainImage] = useState(0);

	return (
		<div className={`${Style.single__product_image} flex__start flex__row `}>
			{/* Display the main image at the top of the page */}
			<div className={`${Style.main__image} flex__center col__8`}>
				{productImages.map((image, index) => (
					<div
						key={image + index}
						className={`${Style.single__image} ${
							index === mainImage ? Style.single__active_image : ""
						}`}
					>
						{/* When the user clicks on an image, update the main image to be the clicked image */}
						<Image
							src={productImages[index].url}
							alt="Product main image"
							className={`${Style.mainImage} img__contain`}
							width={500}
							height={400}
						/>
					</div>
				))}
			</div>

			<div
				className={`${Style.mini__images} flex__column-start  col__1 gap__1 pad__1`}
			>
				{productImages.map((image, index) => (
					<div
						key={image + index}
						className={`${Style.imageItem}`}
						onClick={() => setMainImage(index)}
					>
						{/* When the user clicks on an image, update the main image to be the clicked image */}
						<Image
							className="img__contain"
							src={image.url}
							alt="Product image thumbnail"
							width={120}
							height={70}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(SingleProductImage);
