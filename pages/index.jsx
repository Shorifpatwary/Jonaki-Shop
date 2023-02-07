import Head from "next/head";
import data from "@/public/data/data.json";

import categories from "@/public/data/categories.json";
import babiesCategories from "@/public/data/Home-page-data/babies-categories.json";
import babiesProducts from "@/public/data/Home-page-data/babies-products.json";
import products from "@/public/data/Home-page-data/products.json";

import Banner from "@/layoutComponent/Banner";
import Testimonials from "@/layoutComponent/Testimonials";
import Section from "@/UiComponent/Section";

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
	// make this categories reverse and push it to the selling category section . because there is no way to find best selling categories .
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
					<div className="row gap__2">
						{/* category block  */}
						<div className="col__2  col__bp5-10 ">
							<CategoriesBlock
								title="Category menu"
								categories={bannerCategories}
							/>
						</div>
						{/* banner  */}
						<div className="col__3 col__bp3-4 col__bp5-10 ">
							<Banner category={bannerOneCategory} />
						</div>
						<div className="col__3 col__bp3-4 col__bp5-10">
							<Banner category={bannerTwoCategory} />
						</div>
					</div>
				</Section>
				{/* Best selling products */}
				<Section
					name="best__selling-products"
					className="best__selling-products-wrapper"
				>
					<div className=" row gap__1">
						{/* category block  */}
						<div className="col__2 col__bp3-4 col__bp5-10">
							<CategoriesBlock
								title="Best selling products"
								categories={bestSellingCategories}
							/>
						</div>
						{/* best selling  products */}
						{bestSellingProducts.map((product) => (
							<div className="col__2 col__bp3-4 col__bp5-10">
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</Section>
				{/* Best from babies */}
				<Section
					name="best__selling-products"
					className="best__selling-products-wrapper"
				>
					<div className=" row gap__1">
						{/* category block  */}
						<div className="col__2 col__bp3-4 col__bp5-10">
							<CategoriesBlock
								title="Best from Babies"
								categories={bestFromBabiesCategory}
							/>
						</div>
						{/* best selling  products */}
						{bestFromBabiesProducts.map((product) => (
							<div className="col__2 col__bp3-4 col__bp5-10">
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</Section>
				{/* testimonials section in Home page  */}
				<Testimonials testimonial={data.testimonial} />
				{/* special products || Section Headline */}
				<Section name="special__products" className="Section Headline">
					<div className="special__section-wrapper flex__column-center w__10 gap__3">
						<div className="section__head row">
							{/* special products heading with button  */}
							<H4>Special Products</H4>
							<Button variant="outline" size="sm" icon="append">
								Button
							</Button>
						</div>
						{/* products  */}
						<div className="row gap__2">
							{specialProducts.map((product) => (
								<div className="col__2 col__bp3-4 col__bp5-10 ">
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</div>
				</Section>
			</main>
		</>
	);
};

// next js static site generation function
export async function getStaticProps() {
	// const headers = {
	// 	"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
	// 	Accept: "application/json",
	// 	"Content-Type": "application/json",
	// };

	// const { data, error, loading } = useFetch(categoriesUrl, headers);

	// best selling products request
	// const productsRes = await fetch(
	// 	"https://api.chec.io/v1/products?limit=20&sortBy=sort_order",
	// 	{
	// 		method: "GET",
	// 		headers: headers,
	// 	}
	// );
	// const products = await productsRes.json();
	// best from babies products request

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
