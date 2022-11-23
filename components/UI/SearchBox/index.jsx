import React, { useState } from "react";
import style from "./style.module.scss";
import { searchIcon } from "@/public/images";
// category items. ... will be dynamic
const categories = [
	"All Categories",
	"Bakery",
	"Fruit and vegetables",
	"Meat and fish",
];

const SearchBox = ({ className = "", ...props }) => {
	// search bar state
	const [category, setCategory] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	// handle submit button
	const handleSubmit = () => {
		if (!searchTerm) {
			alert("search term empty .");
		} else {
			alert("search happen");
			// useRouter().push(category+searchTerm)
		}
	};
	return (
		<div className={`${style.SearchBox} ${className}`} {...props}>
			<div className="search__box-group flex__center">
				{/* category select */}
				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					{categories.map((categoryItem) => {
						return <option value={categoryItem}>{categoryItem}</option>;
					})}
				</select>
				{/* search input  */}
				<input
					type="search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button onClick={handleSubmit}>
					<img className="searchIcon" src={searchIcon.src} alt="search icon" />
				</button>
			</div>
		</div>
	);
};
export default SearchBox;
