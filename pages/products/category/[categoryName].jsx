import React from "react";
import Section from "@/UiComponent/Section";
const CategoryPage = ({ products }) => {
	return (
		<Section>
			<h2>Hello this is a yahoo baba </h2>
		</Section>
	);
};

// next js server side site generation function
export async function getServerSideProps(context) {
	//  products request
	let categoryName = context.query.categoryName;

	// header
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
		Accept: "application/json",
		"Content-Type": "application/json",
	};
	// products request
	const productsRes = await fetch(
		`https://api.chec.io/v1/products?category_slug=${categoryName}`,
		{
			method: "GET",
			headers: headers,
		}
	);
	const products = await productsRes.json();

	return {
		props: {
			products,
		},
	};
}
export default CategoryPage;
