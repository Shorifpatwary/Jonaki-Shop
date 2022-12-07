import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import { searchIcon, selectArrow } from "@/public/images";
import Div from "../Tags/Div";

// category items. ... will be dynamic
const categories = [
	"All Categories",
	"Bakery",
	"Fruit and vegetables",
	"Meat and fish",
	"Meat and fish",
	"Meat and fish",
	"Meat and fish",
	"Meat and fish",
	"Meat and fish",
];

const SearchBox = ({ className = "", ...props }) => {
	const router = useRouter();
	// search bar state
	const [category, setCategory] = useState("All Categories");
	const [searchTerm, setSearchTerm] = useState("");
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);

	// handle submit button
	const handleSubmit = (e) => {
		// e.preventDefault();
		console.log(e, "Hello this is a event object please give");
		if (!searchTerm) {
			alert("search term empty.");
		} else {
			router.push(
				`/search/search_term=${searchTerm}/category=${category}`,
				undefined,
				{ shallow: true }
			);
		}
	};
	return (
		<Div className={`${style.SearchBox} ${className}`} {...props}>
			<Div className="search__box-group flex__center-sb gap__2">
				{/* category select */}
				<Div
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
								key={categoryItem}
								className="dropdown__item"
								onClick={(e) => setCategory(e.target.innerText)}
								value={categoryItem}
							>
								<span>{categoryItem}</span>
							</li>
						))}
					</ul>
				</Div>
				{/* search input  w__4  */}
				<Div className={` ${style.search} grow shrink`}>
					<input
						className="w__10"
						type="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search Products"
					/>
				</Div>
				<button
					onClick={(e) => handleSubmit(e)}
					className={`w__1 ${style.searchIcon}`}
				>
					<img src={searchIcon.src} alt="search icon" />
				</button>
			</Div>
			{/* mobile search  */}
			{/* <Div className="mobile__search  ">
				<img src={searchIcon.src} alt="search icon" />
			</Div> */}
		</Div>
	);
};
export default SearchBox;
