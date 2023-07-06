import ProductsView from "@/layoutComponent/ProductsView";
import categories from "@/public/data/categories.json";
// import products from "../../public/data/Home-page-data/products.json";

const productsPage = ({ categories, products }) => {
	if (!products.data?.length) {
		return <h2 style={{ textAlign: "center" }}>No Products Found</h2>;
	}
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
