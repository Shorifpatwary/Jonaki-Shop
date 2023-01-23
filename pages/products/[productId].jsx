import React, { useContext, useState } from "react";
import Head from "next/head";
import { CartContext } from "@/tools/Context/cartProvider";

import P3 from "@/UiComponent/Tags/P/P3";
import Section from "@/UiComponent/Section";
import SingleProductImage from "@/UiComponent/SingleProductImage";
import H1 from "@/UiComponent/Tags/Heading/H1";
import LabelAndText from "@/UiComponent/LabelAndText/index.tsx";
import Button from "@/UiComponent/Tags/Button";
import ButtonPrimary from "@/UiComponent/Tags/Button/Primary";
const productsPage = ({ product }) => {
	const [productOrderAmount, setProductOrderAmount] = useState(1);
	const { cartData, addItemToCart } = useContext(CartContext);
	// const cartId = cartData?.id;

	const decrementProductOrderAmount = () => {
		if (productOrderAmount <= 1) {
			return;
		} else {
			setProductOrderAmount((prev) => prev - 1);
		}
	};

	const handleAddToCart = (productId) => {
		addItemToCart(productId, productOrderAmount);
	};

	return (
		<>
			<Head lang="en">
				<meta http-equiv="content-language" content="en" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{product.name}</title>
				<meta property="og:title" content={product.name} key="title" />
				<meta
					name="keywords"
					content={`e-commerce, product, shopping, jonaki ${product.categories
						.map((category) => category.name)
						.join(",")}`}
				/>
				<meta name="author" content="shorif" />
				<meta name="publisher" content="shorif" />
				<meta name="copyright" content="Copyright © 2020 shop.com" />
				<meta name="description" content={product.description} />
				<meta name="page-topic" content="Media" />
				<meta name="page-type" content="Blogging" />
				<meta name="audience" content="Everyone" />
				<meta name="robots" content="index, follow" />
			</Head>
			<br />
			<Section name="single__product">
				{/* product view card /  image and product details */}
				<div className="product__view-card row gap__1">
					<div className="col__4 col__bp3-10">
						<SingleProductImage productImages={product.assets} />
					</div>
					<div className="col__4 col__bp3-10 flex__column-start gap__2">
						<div className="title">
							<H1>{product.name}</H1>
						</div>
						{/* sort description  */}
						<div className="sort__description">
							<P3>
								{product.description.replace(/(<([^>]+)>)/gi, "").slice(0, 250)}{" "}
								....
							</P3>
						</div>
						{/* products info  */}
						<div className="product__info">
							<LabelAndText label="SKU" text={product?.sku} />
							<LabelAndText label="Stock" text={product?.inventory.available} />
							<LabelAndText
								label="Home Delivery"
								text={product?.has.physical_delivery ? "Yes" : "No"}
							/>
						</div>
						{/* product actions  */}
						<div className="action__box flex__center-sb gap__3 w__10">
							<div className="price">
								{product?.price.formatted_with_symbol}
							</div>
							<div className="product__order-amount flex__center-sb gap__1">
								<Button
									variant="outline"
									className="product__decrement-button"
									onClick={decrementProductOrderAmount}
								>
									-
								</Button>
								<span className="amount">{productOrderAmount}</span>
								<Button
									variant="outline"
									onClick={() => setProductOrderAmount((prev) => prev + 1)}
									className="product__increment-button"
								>
									+
								</Button>
							</div>
							{/* add to cart button */}
							<ButtonPrimary onClick={() => handleAddToCart(product.id)}>
								Add To Cart
							</ButtonPrimary>
						</div>
					</div>
				</div>
				{/* product description  */}
				<div className="product__description">
					{/* content */}
					<div
						dangerouslySetInnerHTML={{ __html: product.description }}
						className="product__description"
					/>
				</div>
			</Section>
		</>
	);
};
// next js server side site generation function
export async function getServerSideProps(context) {
	// header
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
		Accept: "application/json",
		"Content-Type": "application/json",
	};
	// categories request
	// const categories = await getCategories();
	// products request
	const product_id = context.query.productId;
	const productsRes = await fetch(
		`https://api.chec.io/v1/products/${product_id}`,
		{
			method: "GET",
			headers: headers,
		}
	);
	const product = await productsRes.json();

	return {
		props: {
			product,
		},
	};
}
export default React.memo(productsPage);
