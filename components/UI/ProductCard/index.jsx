import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Div from "@/UiComponent/Tags/Div";
import BtnPrimary from "@/UiComponent/Tags/Button/Primary";
import H5 from "@/UiComponent/Tags/Heading/H5";
import P1 from "@/UiComponent/Tags/P/P1";
import Link from "next/link";
// import { productPlaceholder } from "@/Image";

const ProductCard = ({ product }) => {
	console.log(product, "from product page ");

	return (
		<Div
			className={`${style.product__wrapper} pad__2 flex__column-start gap__2`}
		>
			<Div className={`${style.product__image} `}>
				<Image
					src={product.image.url}
					width={235}
					height={180}
					// placeholder={productPlaceholder}
					placeholder="https://via.placeholder.com/235x180.png?text=Product+Image"
				/>
			</Div>
			<Div className={`${style.product__info} flex__column-start gap__2`}>
				<Div className={`${style.product__text} `}>
					<Div className={`${style.product__title} `}>
						<H5>{product.name}</H5>
					</Div>
					<Div className={`${style.product__excerpt} `}>
						<P1>{product.description.slice(0, 60)} ...</P1>
					</Div>
				</Div>

				<Div className={`${style.product__action} flex__center-sb w__10  `}>
					<Div className={`${style.product__price} flex__column-start gap__1`}>
						<Div className={`${style.current__price} `}>
							{product.price.formatted_with_code}
						</Div>
						<Div className={`${style.old__price} `}>old price</Div>
					</Div>
					<Div className={`${style.product__button} `}>
						<Link href={`/product/${product.id}`}>
							<BtnPrimary size="sm"> order </BtnPrimary>
						</Link>
					</Div>
				</Div>
			</Div>
		</Div>
	);
};

export default ProductCard;
