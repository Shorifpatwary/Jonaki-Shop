import React, { useContext } from "react";
import Link from "next/link";

import Section from "@/components/UI/Section";
import { CartContext } from "@/tools/Context/cartProvider";
import CartItem from "@/UiComponent/CartItem";
import H2 from "@/components/UI/Tags/Heading/H2";
import P2 from "@/components/UI/Tags/P/P2";
import Button from "@/UiComponent/Tags/Button";

const CartPage = () => {
	const { cartData, itemUpdateHandler, itemRemoveHandler, removeAllCartItems } =
		useContext(CartContext);
	if (cartData?.total_unique_items < 1 || null) {
		return (
			<Section name="cart__page">
				<H2>Your Cart is empty</H2>
				<P2>Go To The Shop Page </P2>
			</Section>
		);
	} else {
		return (
			<Section name="cart__page">
				<div className="cart__header row">
					<P2>Total Unique Items: {cartData?.total_unique_items}</P2>
					<P2>Total Cart Items: {cartData?.total_items}</P2>
					<P2>Total Price: {cartData?.subtotal?.formatted_with_symbol}</P2>
					<Button onClick={removeAllCartItems}>Remove All Items</Button>
				</div>
				<div className="cart__items">
					{cartData?.line_items?.map((item) => (
						<CartItem
							item={item}
							itemUpdateHandler={itemUpdateHandler}
							itemRemoveHandler={itemRemoveHandler}
						/>
					))}
				</div>
				<div className="cart__footer">
					<Button variant="outline">
						<Link href={cartData?.hosted_checkout_url || "/"}> Checkout</Link>
					</Button>
				</div>
			</Section>
		);
	}
};
export default CartPage;
// to do if cart line item === 0 . "show massage about this "
