import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import Section from "@/UiComponent/Section";
import BreadCrumbs from "@/UiComponent/BreadCrumbs/index.tsx";

import H3 from "@/UiComponent/Tags/Heading/H3";
import ProductCard from "@/UiComponent/ProductCard";
import Filter_cat_item from "@/UiComponent/Filter_cat_item";
import PriceInput from "@/UiComponent/Filter_price_box";
import ButtonPrimary from "@/UiComponent/Tags/Button/Primary";
import ListPagination from "@/components/UI/ListPagination";

const ProductsView = ({ title = "title", products = {}, categories = {} }) => {
	// router object
	const router = useRouter();
	if (router.query.query) {
		title = `Showing result from : ${router.query.query}`;
	}

	const pagination = products.meta.pagination;

	let currentPageNo = pagination.current_page ? pagination.current_page : 1;
	// ===== START HOOKS =====
	const [currentPage, setCurrentPage] = useState(currentPageNo);

	const [filter_categories, setFilter_categories] = useState([]);

	const [mounted, setMounted] = useState(false);

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1999);
	// ======== FUNCTIONS ==========
	// handle price change function
	const handlePriceChange = (value, inputName) => {
		// return when value is less then zero 0 ;
		if (value < 0) {
			return;
		}
		// set min price and max price defends on input name.
		if (inputName === "min") {
			setMinPrice(value);
		} else if (inputName === "max") {
			setMaxPrice(value);
		}
	};
	// category handle change functions
	const handleChange = (e) => {
		const changedValue = e.target.value;
		// set initial page
		setCurrentPage(1);
		if (filter_categories.includes(changedValue)) {
			// remove this item
			setFilter_categories(
				filter_categories.filter((value) => value !== changedValue)
			);
		} else {
			// add this item
			setFilter_categories(() => [...filter_categories, changedValue]);
		}
	};

	// apply category filter and pagination
	useEffect(() => {
		// prevent useEffect from running on first render.
		setMounted(true);
		if (mounted) {
			router.push({
				pathname: "/products",
				query: {
					category_id: [...filter_categories],
					"price.above": minPrice,
					"price.below": maxPrice,
					page: currentPage,
				},
			});
		}
	}, [currentPage, filter_categories]);

	// filter submit
	const handleSubmit = (event) => {
		event?.preventDefault();
		router.push({
			pathname: "/products",
			query: {
				category_id: filter_categories,
				"price.above": minPrice,
				"price.below": maxPrice,
				page: currentPage,
			},
		});
	};

	return (
		<main>
			<div className="product__page-header">
				<div className="header__page-info flex__center-sb gap__3">
					<div className="title col__6">
						<H3>{title}</H3>
					</div>
					{/* <div className="products__info col__2">
						<PillSecondary className="total__products text__black">
							{pagination.total}
						</PillSecondary>
					</div> */}
				</div>
				<hr />
				<BreadCrumbs />
			</div>
			{/* filter bar and products  */}
			<Section>
				<div className="content flex__center-sb gap__2 w__10">
					{/* filter bar  */}
					{/* hide this filter bar for mobile and appear as modal  */}
					<aside className="filter__bar flex__column-start col__2">
						{/* form */}
						<form onSubmit={handleSubmit} className="filter__categories ">
							<H3>Categories</H3>
							<div className="categories">
								{categories.data.map((category) => (
									<Filter_cat_item
										key={category.id}
										value={category.id}
										name={category.name}
										checked={filter_categories.includes(category.id)}
										handleChange={handleChange}
										products={category.products}
									/>
								))}
							</div>
							{/* price filter  */}
							<div className="flex__column-start gap__1 filter__price-box">
								<H3>Price</H3>
								<div className="price__input-box flex__center-sb gap__1">
									<PriceInput
										label="Min"
										value={minPrice}
										onChange={handlePriceChange}
									/>
									<span>-</span>
									<PriceInput
										label="Max"
										value={maxPrice}
										onChange={handlePriceChange}
									/>
								</div>
							</div>
							<ButtonPrimary type="submit" className="price__button">
								Filter
							</ButtonPrimary>
						</form>
					</aside>
					<div className="products__wrapper col__7  row gap__1">
						{products.data.map((product) => (
							<div key={product.id} className="col__3 col__4 col__10 ">
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</div>
				{/* list pagination  */}
				<ListPagination
					currentPath={router.asPath}
					totalItem={pagination.total}
					totalPage={pagination.total_pages}
					itemPerPage={pagination.per_page}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</Section>
		</main>
	);
};

export default React.memo(ProductsView);
