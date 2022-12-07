import React from "react";
import BreadCrumbs from "@/UiComponent/BreadCrumbs";
import Div from "@/UiComponent/Tags/Div";
import ProductCard from "@/UiComponent/ProductCard";

const productsPage = ({ categories, products }) => {
	console.log(categories, "categories from products page ");
	console.log(products, "products from products page ");
	return (
		<main>
			<h2> Hello this is a products page header part </h2>;
			<hr />
			<BreadCrumbs />
			{/* filter bar and products  */}
			<Div className="content flex__center-sb gap__2 col__2">
				<aside className="filter__bar">
					{" "}
					<h3>This is a side bar </h3>
				</aside>
				<Div className="products__wrapper col__7  row gap__1">
					{products.data.map((product) => (
						<Div className="col__3 col__4 col__10">
							<ProductCard product={product} />
						</Div>
					))}
				</Div>
			</Div>
		</main>
	);
};
// next js server side site generation function
export async function getServerSideProps() {
	const categoriesUrl = "https://api.chec.io/v1/categories";
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
		Accept: "application/json",
		"Content-Type": "application/json",
	};

	// categories request
	const res = await fetch(categoriesUrl, {
		method: "GET",
		headers: headers,
	});
	const categories = await res.json();
	// const { data, error, loading } = useFetch(categoriesUrl, headers);

	// best selling products request
	const productsRes = await fetch(
		"https://api.chec.io/v1/products", // ?limit=20&sortBy=sort_order
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
