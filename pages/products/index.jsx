import React from "react";
import getCategories from "@/tools/Functions/getCategories";
import ProductsView from "@/layoutComponent/ProductsView";

const productsPage = ({ categories, products }) => {
	return (
		<ProductsView
			title="Products page title"
			products={products}
			categories={categories}
		/>
	);
};
// next js server side site generation function
export async function getServerSideProps(context) {
	//  products request
	let queryString = "";
	for (const [key, value] of Object.entries(context.query)) {
		queryString += `${key}=${value}&`;
	}
	// header
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
		Accept: "application/json",
		"Content-Type": "application/json",
	};
	// categories request
	const categories = await getCategories();
	// products request
	const productsRes = await fetch(
		`https://api.chec.io/v1/products?${queryString}`,
		{
			method: "GET",
			headers: headers,
		}
	);
	const products = await productsRes.json();

	return {
		props: {
			categories,
			products,
		},
	};
}
export default productsPage;
