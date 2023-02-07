import fs from "fs";
interface Category {
	data: [
		{
			id: string;
			parent_id: string | null;
			slug: string;
			name: string;
			description: string;
			products: number;
			created: number;
			updated: number;
			meta: {
				season: string;
			};
			assets: [];
		}
	];
	meta: {
		pagination: {
			total: number;
			count: number;
			per_page: number;
			current_page: number;
			total_pages: number;
			links: {};
		};
	};
}

async function getBabiesProducts(
	headers: { [key: string]: string } = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE as string,
		Accept: "application/json",
		"Content-Type": "application/json",
	}
	// : Promise<Category[]>
) {
	try {
		const categoriesRes = await fetch(
			"https://api.chec.io/v1/products?limit=20&sortBy=sort_order",
			{
				method: "GET",
				headers: headers,
			}
		);
		const babiesCategories: Category[] = await categoriesRes.json();
		// Write the categories to a JSON file

		fs.writeFileSync(
			"./public/data/Home-page-data/products.json",
			JSON.stringify(babiesCategories)
		);
		// return babiesCategories;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default getBabiesProducts;
