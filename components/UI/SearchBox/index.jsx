import React, { useState } from "react";
import categoriesData from "@/public/data/categories.json";

import { useRouter } from "next/router";
import style from "./style.module.scss";
import { searchIcon, selectArrow } from "@/public/images";

// category items. ... will be dynamic
const categories = categoriesData.data;

const SearchBox = ({ className = "", ...props }) => {
	const router = useRouter();
	// search bar state
	const [category, setCategory] = useState("All Categories");
	const [searchTerm, setSearchTerm] = useState("");
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	// handle submit button
	const handleSubmit = (e) => {
		// e.preventDefault();
		if (!searchTerm) {
			alert("search term empty.");
		} else {
			router.push(
				{
					pathname: "/products",
					query: {
						category: category,
						query: searchTerm,
					},
				},
				undefined,
				{
					shallow: true,
				}
			);
		}
	};
	return (
		<div className={`${style.SearchBox} ${className}`} {...props}>
			<div className="search__box-group flex__center-sb gap__2">
				{/* category select */}
				<div
					className={` ${style.select} flex__center-sb gap__1`} //w__2
					onClick={() => setIsOptionsOpen((prev) => !prev)}
				>
					{/* dropdown Icon  */}
					<span className={`${style.selected__text}`}>{category}</span>
					<img src={selectArrow.src} alt="select icon" />
					<ul
						className={`${isOptionsOpen ? "show" : "hide"} ${style.dropdown}`}
					>
						{categories.map((categoryItem) => (
							<li
								key={categoryItem.id}
								className="dropdown__item"
								onClick={(e) => setCategory(categoryItem.name)}
								value={categoryItem.name}
							>
								<span>{categoryItem.name}</span>
							</li>
						))}
					</ul>
				</div>
				{/* search input  w__4  */}
				<div className={` ${style.search} grow shrink`}>
					<input
						className="w__10"
						type="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search Products"
					/>
				</div>
				<button
					onClick={(e) => handleSubmit(e)}
					className={`w__1 ripple ${style.searchIcon} `}
				>
					<img src={searchIcon.src} alt="search icon" />
				</button>
			</div>
			{/* mobile search  */}
			{/* <div className="mobile__search  ">
				<img src={searchIcon.src} alt="search icon" />
			</div> */}
		</div>
	);
};
export default SearchBox;
