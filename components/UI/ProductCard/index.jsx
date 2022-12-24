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
		<div
			className={`${style.product__wrapper} pad__1 flex__column-start gap__2`}
		>
			<Div className={`${style.product__image} `}>
				<Image
					src={product.image?.url}
					width={235}
					height={180}
					// placeholder={productPlaceholder}
					placeholder="https://via.placeholder.com/235x180.png?text=Product+Image"
				/>
			</Div>
			<Div className={`${style.product__info} flex__column-start gap__2`}>
				<Div className={`${style.product__text} flex__column-start gap__1`}>
					<Div className={`${style.product__title} `}>
						<Link href={`/product/${product.id}`}>
							<H5>{product.name}</H5>
						</Link>
					</Div>
					<Div className={`${style.product__excerpt} `}>
						<P1>
							{product.description.replace(/(<([^>]+)>)/gi, "").slice(0, 60)}{" "}
							...
						</P1>
					</Div>
				</Div>

				<Div className={`${style.product__action} flex__center-sb w__10  `}>
					<Div className={`${style.product__price} flex__column-start gap__1`}>
						<H5 className={`${style.current__price} `}>
							{product.price.formatted_with_code}
						</H5>
						{/* old price not available on this api  */}
						{/* <Div className={`${style.old__price} `}>old price</Div> */}
					</Div>
					<Div className={`${style.product__button} `}>
						<Link href={`/product/${product.id}`}>
							<BtnPrimary size="sm">Buy</BtnPrimary>
						</Link>
					</Div>
				</Div>
			</Div>
		</div>
	);
};

export default React.memo(ProductCard);
