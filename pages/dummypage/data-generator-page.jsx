import Section from "@/UiComponent/Section";
import getBabiesCategories from "../../public/data/data-generator/get-babies-categories";
import getBabiesProducts from "../../public/data/data-generator/get-babies-products";
import getProducts from "../../public/data/data-generator/get-products";
import getCategories from "../../tools/Functions/getCategories";

// import json data
import data from "@/public/data/data.json";
// import categories from "@/public/data/categories.json";
import babiesCategories from "@/public/data/Home-page-data/babies-categories.json";
import babiesProducts from "@/public/data/Home-page-data/babies-products.json";

/**
 * @title This is data generator and a private page .
 * @description I'm including this page to reduce sever request . because of commerce js server us very slow
 *
 */

const DataGenerator = () => {
	return (
		<Section>
			<h2 className="text__red">This is a dummy page </h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo fugiat
				beatae, sunt ipsam facere debitis deleniti sed unde voluptas laboriosam
				omnis odit aliquam.
			</p>
		</Section>
	);
};

// next js server side site generation function
export async function getServerSideProps() {
	getBabiesCategories();
	getBabiesProducts();

	getCategories();
	getProducts();

	return {
		props: {
			hello: "hello",
		},
	};
}

export default DataGenerator;
