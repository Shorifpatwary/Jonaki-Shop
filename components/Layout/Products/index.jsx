import React from "react";
import style from "./style.module.scss";
import Div from "@/UiComponent/Tags/Div";
import ProductCard from "@/UiComponent/ProductCard";
const Products = ({ products = [] }) => {
	return (
		<Div
			className={`${style.product__wrapper} pad__2 flex__center gap__2`}
			{ products?.map((item) => (<ProductCard product={item}/>))}
		></Div>
	);
};

export default Products;
