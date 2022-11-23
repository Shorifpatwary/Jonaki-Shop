import React from "react";

import Head from "next/head";
import Link from "next/link";
import useFetch from "../tools/CustomHooks/useFetch";
import Div from "@/components/UI/Tags/Div";
import Section from "@/UiComponent/section";
import H4 from "@/components/UI/Tags/Heading/H4";
import CategoryList from "@/UiComponent/Lists/CategoryList";
import ProductCard from "@/UiComponent/ProductCard";
import CategoriesBlock from "@/layoutComponent/CategoriesBlock";
import Banner from "@/layoutComponent/Banner";
import ArraySlicer from "../tools/Functions/ArraySlicer";
const Home = ({ categories, products }) => {
	console.log(products, "  products ");
	let originalCategories = categories.data;

	let bannerCategories = ArraySlicer(originalCategories, 5);
	let bestSellingProducts = ArraySlicer(products.data, 3);
	console.log(bestSellingProducts, " best selling prod.. ");

	let bannerOneCategory = bannerCategories[0];
	let bannerTwoCategory = bannerCategories[1];
	// make this categories reverse and push it to be selling category section . because there is no way to find best selling categories .
	let reverseCategories = originalCategories.reverse();
	let bestSellingCategories = ArraySlicer(reverseCategories, 5);
	console.log(bestSellingCategories, "bestSelling Categories");

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Jonaki E-commerce Website " />
			</Head>
			<main className="home__wrapper">
				{/* home category with banner section  */}
				<Section name="home__banner" className="home__banner-wrapper">
					<Div className="banner__row flex__center-sb w__10 gap__2">
						{/* category block  */}
						<Div className="col__3 w__10">
							<CategoriesBlock
								title="Category menu"
								categories={bannerCategories}
							/>
						</Div>
						{/* banner  */}

						<Div className="col__4">
							<Banner category={bannerOneCategory} />
						</Div>
						<Div className="col__4">
							<Banner category={bannerTwoCategory} />
						</Div>
					</Div>
				</Section>
				{/* Best selling products */}
				<Section
					name="best__selling-products"
					className="best__selling-products-wrapper"
				>
					<Div className="best__selling-row flex__center-sb w__10 gap__2">
						{/* category block  */}

						<Div className="col__3">
							<CategoriesBlock
								title="Category menu"
								categories={bestSellingCategories}
							/>
						</Div>
						{/* best selling  products */}
						{bestSellingProducts.map((product) => (
							<Div className="col__3">
								<ProductCard product={product} />
							</Div>
						))}
					</Div>
				</Section>
			</main>
		</>
	);
};

// next js static site generation function
export async function getStaticProps() {
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

	// categories request
	const productsRes = await fetch(
		"https://api.chec.io/v1/products?limit=10&sortBy=sort_order",
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
		// revalidate after 1 minute
		revalidate: 60, // In seconds
	};
}
export default Home;
