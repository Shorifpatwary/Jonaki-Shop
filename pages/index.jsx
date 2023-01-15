import React from "react";
import Head from "next/head";
import data from "@/public/data/data.json";

import Banner from "@/layoutComponent/Banner";
import Testimonials from "@/layoutComponent/Testimonials";
import Section from "@/components/UI/Section";

import Div from "@/components/UI/Tags/Div";
import H4 from "@/UiComponent/Tags/Heading/H4";
import Button from "@/UiComponent/Tags/Button";
import ProductCard from "@/UiComponent/ProductCard";
import CategoriesBlock from "@/layoutComponent/CategoriesBlock";
import ArraySlicer from "../tools/Functions/ArraySlicer";

const Home = ({
	categories = [],
	products = [],
	babiesCategories = [],
	babiesProducts = [],
}) => {
	let originalCategories = categories.data;
	let bannerCategories = ArraySlicer(originalCategories, 5);
	let bestSellingProducts = ArraySlicer(products.data, 3);
	let specialProducts = ArraySlicer(products.data, 4);
	let bestFromBabiesCategory = ArraySlicer(babiesCategories.data, 5);
	let bestFromBabiesProducts = ArraySlicer(babiesProducts.data, 3);

	let bannerOneCategory = bannerCategories[0];
	let bannerTwoCategory = bannerCategories[1];
	// make this categories reverse and push it to be selling category section . because there is no way to find best selling categories .
	let reverseCategories = originalCategories.reverse();
	let bestSellingCategories = ArraySlicer(reverseCategories, 5);

	return (
		<>
			<Head>
				<title>Next js E-commerce Website </title>
				<meta name="description" content=" E-commerce Website " />
			</Head>
			<main className="home__wrapper">
				{/* home category with banner section */}
				<Section name="home__banner" className="home__banner-wrapper">
					<Div className="row gap__2">
						{/* category block  */}
						<Div className="col__2  col__bp5-10 ">
							<CategoriesBlock
								title="Category menu"
								categories={bannerCategories}
							/>
						</Div>
						{/* banner  */}
						<Div className="col__3 col__bp3-4 col__bp5-10 ">
							<Banner category={bannerOneCategory} />
						</Div>
						<Div className="col__3 col__bp3-4 col__bp5-10">
							<Banner category={bannerTwoCategory} />
						</Div>
					</Div>
				</Section>
				{/* Best selling products */}
				<Section
					name="best__selling-products"
					className="best__selling-products-wrapper"
				>
					<Div className=" row gap__1">
						{/* category block  */}
						<Div className="col__2 col__bp3-4 col__bp5-10">
							<CategoriesBlock
								title="Best selling products"
								categories={bestSellingCategories}
							/>
						</Div>
						{/* best selling  products */}
						{bestSellingProducts.map((product) => (
							<Div className="col__2 col__bp3-4 col__bp5-10">
								<ProductCard product={product} />
							</Div>
						))}
					</Div>
				</Section>
				{/* Best from babies */}
				<Section
					name="best__selling-products"
					className="best__selling-products-wrapper"
				>
					<Div className=" row gap__1">
						{/* category block  */}
						<Div className="col__2 col__bp3-4 col__bp5-10">
							<CategoriesBlock
								title="Best from Babies"
								categories={bestFromBabiesCategory}
							/>
						</Div>
						{/* best selling  products */}
						{bestFromBabiesProducts.map((product) => (
							<Div className="col__2 col__bp3-4 col__bp5-10">
								<ProductCard product={product} />
							</Div>
						))}
					</Div>
				</Section>
				{/* testimonials section in Home page  */}
				<Testimonials testimonial={data.testimonial} />
				{/* special products || Section Headline */}
				<Section name="special__products" className="Section Headline">
					<Div className="special__section-wrapper flex__column-center w__10 gap__3">
						<Div className="section__head row">
							{/* special products heading with button  */}
							<H4>Special Products</H4>
							<Button variant="outline" size="sm" icon="append">
								Button
							</Button>
						</Div>
						{/* products  */}
						<Div className="row gap__2">
							{specialProducts.map((product) => (
								<Div className="col__2 col__bp3-4 col__bp5-10 ">
									<ProductCard product={product} />
								</Div>
							))}
						</Div>
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

	// best selling products request
	const productsRes = await fetch(
		"https://api.chec.io/v1/products?limit=20&sortBy=sort_order",
		{
			method: "GET",
			headers: headers,
		}
	);
	const products = await productsRes.json();
	// best from {farmer} or a specific category
	const categoriesRes = await fetch(
		"https://api.chec.io/v1/categories?parent_id=cat_gnZO5kmbKw7MNq",
		{
			method: "GET",
			headers: headers,
		}
	);
	const babiesCategories = await categoriesRes.json();
	// best from babies products request
	const babiesProductsRes = await fetch(
		"https://api.chec.io/v1/products?limit=20&sortBy=sort_order&category_id=cat_eN1ql9e1dlz3ym",
		{
			method: "GET",
			headers: headers,
		}
	);
	const babiesProducts = await babiesProductsRes.json();

	return {
		props: {
			categories,
			products,
			babiesCategories,
			babiesProducts,
		},
		// revalidate after 1 minute
		revalidate: 60, // In seconds
	};
}
export default Home;
