import React, { createContext, useEffect, useState } from "react";

type CartProviderProps = {
	children: React.ReactNode;
};
// cart response type
type CartData = {
	id: string;
	total_items: number;
	total_unique_items: number;
	subtotal: {
		raw: number;
		formatted_with_symbol: string;
	};
	hosted_checkout_url: string;
	line_items: [
		{
			id: string;
			product_id: string;
			name: string;
			product_name: string;
			sku: string;
			permalink: string;
			quantity: number;
			price: {
				raw: number;
				formatted_with_symbol: string;
			};
			line_total: {
				raw: number;
				formatted_with_symbol: string;
			};
			is_valid: boolean;
		}
	];
	currency: {};
	discount: any[];
};

export const CartContext = createContext<{
	cartData: CartData | null;
	setCartData: (cartData: CartData) => void;
	// addItemToCart: (productId: string, quantity?: number) => void;
}>({
	cartData: null,
	setCartData: () => {},
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartData, setCartData] = useState<CartData | null>(null);

	// request header
	const headers = {
		"X-Authorization": process.env.NEXT_PUBLIC_SECRET_KEY_LIVE as string,
		Accept: "application/json",
		"Content-Type": "application/json",
	};
	// cart request
	const getCart = async (cartId = "") => {
		try {
			const res = await fetch(`https://api.chec.io/v1/carts/${cartId}`, {
				method: "GET",
				headers: headers,
			});
			const data = await res.json();
			setCartData(data);
			// set cart id into the localStorage
			localStorage.setItem("cartId", data.id);
		} catch (error) {
			console.log(error);
		}
	};
	// add item to cart
	const addItemToCart = async (productId = "", quantity = 1) => {
		try {
			const res = await fetch(`https://api.chec.io/v1/carts/${cartData?.id}`, {
				method: "POST",
				headers: headers,
				body: JSON.stringify({
					id: `${productId}`, // required, must be unique
					quantity: `${quantity}`, // required, must be unique
				}),
			});
			const data = await res.json();
			setCartData(data);
		} catch (error) {
			console.log(error);
		}
	};

	// cart item update handler
	const itemUpdateHandler = async (line_item_id: string, quantity: number) => {
		try {
			const res = await fetch(
				`https://api.chec.io/v1/carts/${cartData?.id}/items/${line_item_id}`,
				{
					method: "PUT",
					headers: headers,
					body: JSON.stringify({
						quantity: `${quantity}`,
					}),
				}
			);
			const data = await res.json();
			setCartData(data);
		} catch (error) {
			console.log(error);
		}
	};
	// cart item remove handler
	const itemRemoveHandler = async (line_item_id: string) => {
		try {
			const res = await fetch(
				`https://api.chec.io/v1/carts/${cartData?.id}/items/${line_item_id}`,
				{
					method: "DELETE",
					headers: headers,
				}
			);
			const data = await res.json();
			setCartData(data);
		} catch (error) {
			console.log(error);
		}
	};
	// cart item remove handler
	const removeAllCartItems = async () => {
		// return;
		try {
			const res = await fetch(
				`https://api.chec.io/v1/carts/${cartData?.id}/items`,
				{
					method: "DELETE",
					headers: headers,
				}
			);
			const data = await res.json();
			setCartData(data);
		} catch (error) {
			console.log(error);
		}
	};
	// REACT HOOKS
	useEffect(() => {
		if (
			!localStorage.getItem("cartId") ||
			localStorage.getItem("cartId") === "undefined"
		) {
			// Create a cart
			getCart();
		} else {
			const cartId = localStorage.getItem("cartId") as string;
			// get a cart item
			getCart(cartId);
		}
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartData,
				setCartData,
				addItemToCart,
				itemUpdateHandler,
				itemRemoveHandler,
				removeAllCartItems,
			}}
		>
			{/* fix add to cart ts error later */}
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;

// create specific error catching function(statuscode) with switch ..
