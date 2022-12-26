import { NextApiRequest, NextApiResponse } from "next";

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

async function getCategories(
	headers: { [key: string]: string } = {
		"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE as string,
		Accept: "application/json",
		"Content-Type": "application/json",
	}
): Promise<Category[]> {
	try {
		const categoriesUrl = "https://api.chec.io/v1/categories";

		const res = await fetch(categoriesUrl, {
			method: "GET",
			headers: headers,
		});
		const categories: Category[] = await res.json();
		console.log(categories, "from main function file .ts file ");
		return categories;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default getCategories;
