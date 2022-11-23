import React, { useState, useEffect } from "react";
import Div from "@/Tags/Div";
import MenuItems from "../NestedMenu";
const CategoriesMenu = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const url = "https://api.chec.io/v1/categories";
		const headers = {
			"X-Authorization": process.env.NEXT_PUBLIC_PUBLIC_KEY_LIVE,
			Accept: "application/json",
			"Content-Type": "application/json",
		};
		async function fetchCategories() {
			const response = await fetch(url, {
				method: "GET",
				headers: headers,
			});
			const categories = await response.json();
			if (categories !== null) {
				setData(categories);
			}
		}
		fetchCategories();
	}, []);

	return (
		<Div className="categories">
			<MenuItems menuItems={data.data} />
		</Div>
	);
};

export default CategoriesMenu;
