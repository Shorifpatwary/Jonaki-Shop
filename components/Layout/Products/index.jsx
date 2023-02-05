import React from "react";
import style from "./style.module.scss";
import ProductCard from "@/UiComponent/ProductCard";


const Products = ({ products }) => {
	return (
		<div
			className={`${style.product__wrapper} pad__2 flex__center gap__2`}
			{ products?.map((item) => (<ProductCard product={item}/>))}
		></div>
	);
};

export default Products;
